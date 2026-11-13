// Guarda o jogo para abrir sem internet. Os baralhos ficam no IndexedDB (uma "pastinha" por baralho).
const V = 'st-v1';
const BASE = ['./', './index.html', './manifest.json', './icone-192.png', './icone-512.png', './decks/catalogo.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  const ehBase = u.pathname.endsWith('/') || u.pathname.endsWith('.html') || u.pathname.endsWith('catalogo.js');
  e.respondWith((async () => {
    const c = await caches.open(V);
    if (ehBase) { // rede primeiro (pega atualizacoes), cache se estiver offline
      try { const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; } catch (err) { return (await c.match(e.request)) || (await c.match('./index.html')); }
    }
    const hit = await c.match(e.request); if (hit) return hit;
    try { const r = await fetch(e.request); if (r.ok && u.pathname.includes('/decks/') && u.pathname.endsWith('.js')) c.put(e.request, r.clone()); return r; }
    catch (err) { return new Response('', { status: 504 }); }
  })());
});
