var mycache = "mycache"
var assests = [
    "/",
    "/start.html",
    "/img/nebula1.jpg",
    "/img/nebula2.jpg",
    "/img/nebula3.jpg",
    "/js/start.js",
    "/sw.js",
    "/student.json",
    "/manifest.json"
    ];
    self.addEventListener('install', event => {
    console.log('inside the install');
    caches.open(mycache)
    .then(cache => {
    cache.addAll(assests);
    });
    });
    self.addEventListener('activate', event => {
    console.log('inside the activate');
    });
    self.addEventListener('fetch', async (event) => {
    event.respondWith(
    caches.match(event.request)
    .then(respevt => {
    return respevt || fetch(event.request);
    })
    );
    console.log('inside the fetched');
    });