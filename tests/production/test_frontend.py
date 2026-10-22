"""Read-only checks on a private candidate or the public Banc; no real accounts."""
import os
import re
from urllib.parse import urlparse

import pytest
from playwright.sync_api import sync_playwright, expect

BASE = os.environ.get('RECURSOS_FRONTEND_TEST_URL', '').rstrip('/')
pytestmark = pytest.mark.skipif(not BASE, reason='Set RECURSOS_FRONTEND_TEST_URL explicitly')


@pytest.fixture(scope='module')
def browser():
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox'])
        yield browser
        browser.close()


@pytest.fixture(params=[1280, 820, 393])
def context(browser, request):
    context = browser.new_context(viewport={'width': request.param, 'height': 900}, service_workers='block')
    def read_only(route):
        request = route.request
        if request.method not in ('GET', 'HEAD') or urlparse(request.url).netloc != urlparse(BASE).netloc:
            return route.abort()
        return route.continue_()
    context.route('**/*', read_only)
    yield context
    context.close()


def test_catalogue_languages_filters_and_api(context):
    page = context.new_page()
    errors, book_calls = [], []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.on('response', lambda response: book_calls.append(response.status) if '/api/llibres/books?' in response.url else None)
    page.goto(BASE + '/?ui_lang=va')
    expect(page.locator('#grid article')).to_have_count(48, timeout=30000)
    expect(page.locator('#iframeDialog')).to_be_hidden()
    expect(page.locator('#studentLoginBtn')).to_be_visible()
    expect(page.locator('#loginBtn')).to_have_attribute('href', '/api/auth/login')
    page.wait_for_function("document.querySelector('#catalogueApp') && document.querySelector('#loadMoreBtn')")
    page.locator('#loadMoreBtn').click()
    expect(page.locator('#grid article')).to_have_count(96)
    for language in ('es', 'ca', 'va', 'en'):
        page.locator(f'[data-lang={language}]').click()
        expect(page.locator('html')).to_have_attribute('lang', re.compile('^' + ('ca' if language == 'va' else language)))
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    page.locator('#searchInput').fill('matem')
    expect(page.locator('#grid article').first).to_be_visible()
    page.reload()
    expect(page.locator('#searchInput')).to_have_value('matem')
    expect(page.locator('#grid article').first).to_be_visible()
    assert book_calls and all(status == 200 for status in book_calls)
    assert not errors


def test_synthetic_book_uses_safe_reader_without_publishing(context):
    # Browser-local responses only: no book or account is ever created in the API.
    context.route('**/api/llibres/books?*', lambda route: route.fulfill(json={'items': [{
        'provider': 'edutictac-llibres', 'external_id': 'frontend-check',
        'title': 'Història de comprovació', 'format': 'llibres',
        'play_url': '/api/llibres/public/frontend-check/read',
        'subject': 'General', 'language': ['Valencià'],
    }], 'more': False}))
    context.route('**/api/llibres/public/frontend-check/read', lambda route: route.fulfill(
        content_type='text/html; charset=utf-8', body='<main><h1>Història de comprovació</h1></main>'))
    page = context.new_page()
    page.goto(BASE + '/?ui_lang=va')
    expect(page.locator('#applicationFilter option[value=Llibres]')).to_have_count(1, timeout=30000)
    page.locator('#applicationFilter').select_option('Llibres')
    expect(page.locator('#grid article')).to_have_count(1)
    page.locator('#grid .card-image-link').click()
    expect(page.locator('#iframeDialog')).to_be_visible()
    expect(page.locator('#iframeContainer iframe')).to_have_attribute('sandbox', 'allow-downloads')
    expect(page.frame_locator('#iframeContainer iframe').locator('h1')).to_have_text('Història de comprovació')
    page.locator('#iframeClose').click()
    expect(page.locator('#iframeDialog')).to_be_hidden()
    expect(page.locator('#iframeContainer iframe')).to_have_count(0)


def test_public_service_worker_install_and_offline_shell(browser):
    # Service workers require a secure origin (the private candidate uses localhost).
    context = browser.new_context(service_workers='allow')
    page = context.new_page()
    page.goto(BASE + '/')
    expect(page.locator('#grid article').first).to_be_visible(timeout=30000)
    page.wait_for_function('navigator.serviceWorker.controller !== null', timeout=30000)
    versions = page.evaluate('caches.keys()')
    assert 'recursos-v1.24.3' in versions
    assert len(versions) == 1
    cached = page.evaluate("""async () => (await (await caches.open('recursos-v1.24.3')).keys()).map(r => new URL(r.url).pathname)""")
    for path in ('/scripts/language-preference.js', '/assets/ui/catalogue.js', '/data/games.json'):
        assert path in cached
    assert not any(path.startswith('/api/') and not path.startswith('/api/thumb') for path in cached)
    context.set_offline(True)
    page.reload()
    expect(page.locator('#grid article').first).to_be_visible(timeout=30000)
    expect(page.locator('#iframeDialog')).to_be_hidden()
    context.close()
