"""Reproduce an old HTTP cache during a service-worker upgrade, entirely locally."""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading

import pytest
from playwright.sync_api import sync_playwright


@pytest.mark.parametrize('reload_cache', [False, True])
def test_upgrade_bypasses_fresh_legacy_http_cache(reload_cache):
    state = {'version': 'old'}
    new_worker = (Path(__file__).parents[1] / 'sw.js').read_text()
    if not reload_cache:
        new_worker = new_worker.replace('APP_SHELL.map(path => new Request(path, {cache:"reload"}))', 'APP_SHELL')
    old_worker = """
        self.addEventListener('install', e => e.waitUntil(
          caches.open('old-shell').then(c => c.addAll(['/', '/index.html', '/scripts/app.js'])).then(() => self.skipWaiting())));
        self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
        self.addEventListener('fetch', e => {
          if (e.request.method === 'GET') e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
        });
    """

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            if self.path == '/sw.js':
                body, mime = (old_worker if state['version'] == 'old' else new_worker), 'text/javascript'
            elif self.path in ('/', '/index.html'):
                body, mime = '<!doctype html><script src="/scripts/app.js"></script>', 'text/html'
            elif self.path == '/scripts/app.js':
                body, mime = f'window.currentUI={state["version"]!r};', 'text/javascript'
            else:
                body, mime = '{}', 'application/json'
            self.send_response(200)
            self.send_header('Content-Type', mime)
            self.send_header('Cache-Control', 'no-cache' if self.path == '/sw.js' else 'public, max-age=86400')
            self.end_headers()
            self.wfile.write(body.encode())

        def log_message(self, *_):
            pass

    server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox'])
            page = browser.new_page(service_workers='allow')
            page.goto(f'http://127.0.0.1:{server.server_port}/')
            assert page.evaluate('window.currentUI') == 'old'
            page.evaluate("navigator.serviceWorker.register('/sw.js')")
            page.wait_for_function('navigator.serviceWorker.controller !== null')
            state['version'] = 'new'
            page.evaluate("""async () => {
              const changed = new Promise(resolve => navigator.serviceWorker.addEventListener('controllerchange', resolve, {once:true}));
              await (await navigator.serviceWorker.getRegistration()).update();
              await changed;
            }""")
            page.reload()
            assert page.evaluate('window.currentUI') == ('new' if reload_cache else 'old')
            browser.close()
    finally:
        server.shutdown()
        server.server_close()
        thread.join()
