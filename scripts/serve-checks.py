"""Read-only static server for browser tests, bound only to loopback."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).resolve().parents[1]), **kwargs)
    def log_message(self, *_):
        pass

ThreadingHTTPServer(('127.0.0.1', 18086), Handler).serve_forever()
