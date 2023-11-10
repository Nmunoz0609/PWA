//asignar nombre y versión de cache
const CACHE_NAME = 'v1_cache_lilith_pwa';

var urlsToCache= [
    "./",
    "./css/bootstrap.css",
    "./css/responsive.css",
    "./css/style.css",
    "./css/style.css.map",
    "./css/style.scss",
    "./fonts/ethnocentric/ethnocentric rg it.ttf",
    "./fonts/ethnocentric/ethnocentric rg.ttf",
    "./fonts/ethnocentric/read-this.html",
    "./fonts/ethnocentric/typodermic-eula-02-2014.pdf",
    "./fonts/Poppins",
    "./fonts/Poppins/OFL.txt",
    "./fonts/Poppins/Poppins-Bold.ttf",
    "./fonts/Poppins/Poppins-Regular.ttf",
    "./images/about.jpg",
    "./images/android-icon-36x36.png",
    "./images/android-icon-48x48.png",
    "./images/android-icon-72x72.png",
    "./images/android-icon-96x96.png",
    "./images/android-icon-144x144.png",
    "./images/android-icon-192x192.png",
    "./images/apple-icon-57x57.png",
    "./images/apple-icon-60x60.png",
    "./images/apple-icon-72x72.png",
    "./images/apple-icon-76x76.png",
    "./images/apple-icon-114x114.png",
    "./images/apple-icon-120x120.png",
    "./images/apple-icon-144x144.png",
    "./images/apple-icon-152x152.png",
    "./images/apple-icon-180x180.png",
    "./images/apple-icon-precomposed.png",
    "./images/apple-icon.png",
    "./images/contact-bg.jpg",
    "./images/envelope-white.png",
    "./images/favicon-16x16.png",
    "./images/favicon-32x32.png",
    "./images/favicon-96x96.png",
    "./images/favicon.ico",
    "./images/herbal-white.png",
    "./images/herbal.png",
    "./images/hero.jpg",
    "./images/info-bg.jpg",
    "./images/info-logo.png",
    "./images/location-white.png",
    "./images/logo.png",
    "./images/menu.png",
    "./images/ms-icon-70x70.png",
    "./images/ms-icon-144x144.png",
    "./images/ms-icon-150x150.png",
    "./images/ms-icon-310x310.png",
    "./images/next.png",
    "./images/p-1.jpg",
    "./images/p-2.jpg",
    "./images/p-3.jpg",
    "./images/p-4.jpg",
    "./images/prev.png",
    "./images/search-icon.png",
    "./images/telephone-white.png",
    "./images/why-img.jpg",
    "./js/bootstrap.js",
    "./js/jquery-3.4.1.min.js"
]

self.addEventListener('install', e=> {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(()=>{
                self.skipWaiting();
            });
        })
            .catch(err=>console.log('No se registró el cache', err))
            );
         });

self.addEventListener('activate', e=>{
    const cacheWitelist=[CACHE_NAME];
    e.waitUntill(
        caches.keys()
        .then(CacheName =>
            {
                return Promise.all(
                    CacheName.map(CacheName =>
                        {
                            if(cacheWhitelist.indexOf(CacheName)=== -1)
                            {
                                return caches.delete(CacheName);
                            }
                        })
                );
            })
            .then(()=>{self.clients.claim();})
    ); 
});

self.addEventListener
    ('fetch', e =>{
        e.respondWith(
            caches.match(e.request)
            .then(res=>{
                if(res){
                    return res;
                }
                return fetch(e.request);
            })
        );
    });

