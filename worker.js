const CACHE_NAME = 'PLUG_CACHE-1'

const files_to_cache = ['./index.html']

self.addEventListener('install' , e => {

    e.waitUntil(

        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(files_to_cache)
        })
    )
})

self.addEventListener('fetch' , e => {

    e.respondWith(

        caches.match(e.request).then(match => {

            return match || fetch(e.request)
        })
    )
})

self.addEventListener('activate' , e => {

    const safeList = [ CACHE_NAME ]

    e.waitUntil(

        caches.keys().then(cachename => (Promise.all(cachename.map(name => {
            if(!safeList.includes(name)) caches.delete(name)
        }))))
    )
})




