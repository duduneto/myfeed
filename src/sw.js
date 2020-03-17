// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
  caches.open('v1')
})

// Call ACTIVE EVENT

self.addEventListener('activate', function(event) {
  console.log('Claiming control');
});

self.addEventListener('fetch', () => {
  console.log('SERVICER WORKER FETCHING')
})
