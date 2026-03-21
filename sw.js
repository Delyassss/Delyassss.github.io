const CACHE_NAME = 'studydeck-v1';
const ASSETS_TO_CACHE = [
  './',
  './studydeck-v5.html',
  './manifest.json'
];

// INSTALL - Cache assets
self.addEventListener('install', (event) => {
  console.log('📦 Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('✅ Cached assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH - Network first, fall back to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.ok) {
          const cache = caches.open(CACHE_NAME);
          cache.then((c) => c.put(event.request, response.clone()));
        }
        return response;
      })
      .catch(() => {
        // Fall back to cache if network fails
        return caches.match(event.request).then((response) => {
          return response || new Response('Offline - cached version not available', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});
