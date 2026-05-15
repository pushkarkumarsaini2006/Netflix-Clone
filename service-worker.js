const CACHE_NAME = 'netflix-clone-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/assets/videos/captions-en.vtt',
  '/assets/images/logo.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  // Cache-first for navigation and static assets
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
