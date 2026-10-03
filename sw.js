// =============================================================================
// SERVICE WORKER - CACHE-FIRST PER USO 100% OFFLINE (TABLET, BOOX, SMARTPHONE)
// =============================================================================

const CACHE_NAME = 'dnd-zelota-v3.5';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './tailwind.cdn.js',
  './dnd-compendium-data.js',
  './dnd-engine.js',
  './icon.svg',
  './manifest.webmanifest',
  './kaelen__stigmata__vane_dnd5e.json',
  './fonts/fonts.css',
  './fonts/cinzel-600.ttf',
  './fonts/cinzel-700.ttf',
  './fonts/cinzel-800.ttf',
  './fonts/cinzel-900.ttf',
  './fonts/medievalsharp-400.ttf',
  './fonts/inter-400.ttf',
  './fonts/inter-600.ttf',
  './fonts/inter-700.ttf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching assets offline...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
    // NOTA: niente skipWaiting() qui. Il nuovo SW resta "in attesa" finché
    // l'utente non preme "Aggiorna Ora ⚡" (messaggio SKIP_WAITING più sotto).
    // Così la pagina non si ricarica mai da sola mentre si sta scrivendo.
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Pulizia vecchia cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Ignora richieste non GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Se la richiesta va a buon fine, memorizza nella cache
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback offline principale
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// Riceve comando di aggiornamento immediato dal banner dell'interfaccia
self.addEventListener('message', (event) => {
  if (event.data && (event.data.type === 'SKIP_WAITING' || event.data.action === 'skipWaiting')) {
    self.skipWaiting();
  }
});

