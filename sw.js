const CACHE_NAME = "recursos-v1.24.0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./robots.txt",
  "./sitemap.xml",
  "./styles/site.css",
  "./scripts/app.js",
  "./scripts/api.js",
  "./scripts/i18n.js",
  "./scripts/state.js",
  "./scripts/filters.js",
  "./scripts/url-state.js",
  "./scripts/sw-manager.js",
  "./scripts/flash.js",
  "./scripts/jclic.js",
  "./scripts/external.js",
  "./assets/ui/catalogue.js",
  "./data/games-home.json",
  "./data/games.json",
  "./reports/link-report.json",
  "./assets/brand/logo-banc-recursos.png",
  "./assets/brand/edutictac-logo.png",
  "./assets/brand/icon-192.png",
  "./assets/brand/icon-512.png",
  "./favicon.ico",
  "./assets/game-images/generic-game.svg",
  "./assets/flash/aulademusica24aranas.swf",
  "./assets/flash/aulademusicaenriqueta.swf",
  "./assets/flash/pajarologia.swf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "GET_SW_VERSION") {
    return;
  }

  event.source?.postMessage({
    type: "SW_VERSION",
    version: CACHE_NAME
  });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  // Published books and withdrawals must never fall back to an old cached copy.
  if (url.pathname.startsWith("/api/llibres/")) {
    event.respondWith(fetch(request, {cache:"no-store"}));
    return;
  }

  if (url.pathname.startsWith("/api/thumb")) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Sessions and preferences must not survive as a cached response for another user.
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(fetch(request, {cache:"no-store"}));
    return;
  }

  if (url.pathname.endsWith("/data/games-home.json")) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  if (url.pathname.endsWith("/data/games.json") || url.pathname.endsWith("/reports/link-report.json")) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  const cache = await caches.open(CACHE_NAME);
  cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const networkFetch = fetch(request).then((response) => {
    cache.put(request, response.clone());
    return response;
  });
  return cached ?? await networkFetch;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw new Error(`No cached response for ${request.url}`);
  }
}
