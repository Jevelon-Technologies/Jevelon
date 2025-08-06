const CACHE_NAME = 'jevelon-cache-v2';
const urlsToCache = [
  '/',
  '/favicon.svg',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch((error) => {
          console.warn('Failed to cache some resources:', error);
          // Continue even if some resources fail to cache
          return Promise.resolve();
        });
      })
      .catch((error) => {
        console.error('Failed to open cache:', error);
        // Don't fail the installation if cache fails
        return Promise.resolve();
      })
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension requests (which can cause the error)
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Skip data URLs
  if (event.request.url.startsWith('data:')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).catch((error) => {
          console.warn('Fetch failed:', error);
          // Return a fallback response for navigation requests
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
          return new Response('Network error', { status: 503 });
        });
      })
      .catch((error) => {
        console.error('Cache match failed:', error);
        // Fallback for navigation requests
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
        return new Response('Service unavailable', { status: 503 });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName).catch((error) => {
              console.warn('Failed to delete cache:', cacheName, error);
              return Promise.resolve();
            });
          }
        })
      );
    }).catch((error) => {
      console.error('Cache cleanup failed:', error);
      return Promise.resolve();
    })
  );
});

// Handle errors gracefully
self.addEventListener('error', (event) => {
  console.warn('Service worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.warn('Service worker unhandled rejection:', event.reason);
}); 