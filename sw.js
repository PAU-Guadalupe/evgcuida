// Service worker mínimo del lanzador de EVGCuida: guarda la portada y los iconos para que
// el icono instalado abra al instante. La aplicación (Apps Script) nunca se guarda en caché.
const CACHE = 'evgcuida-lanzador-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './maskable-512.png', './apple-touch-icon.png', './logo-evgcuida.png', './logo-escuela.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // Google: siempre en directo
  // Primero la red (para recoger cambios del lanzador); si no hay conexión, la copia guardada
  e.respondWith(fetch(e.request).then(r => {
    const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
