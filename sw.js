const CACHE_NAME = "static_cache"
const STATIC_ASSESTS = [
    '/index.html',
    '/index.css'
];

async function preCache() {
    const cache = await caches.open(CACHE_NAME)
    return cache.addAll(STATIC_ASSESTS)
};

self.addEventListener("install",event => {
    console.log("(sw) installed");
    event.waitUntill(preCache())
});

self.addEventListener("activate",event => {
    console.log("(sw) activated");
});

async function fetchAssests(event) {
    try {
        const response = await fetch(event.request)
        return response
    } catch (err) {
        const cache = await caches.open(CACHE_NAME)
        return cache.match(event.requst)
    }
};

self.addEventListener("fetch",event => {
    console.log("(sw) fetched");
    event.respondWith(fetchAssests(event))
});

// add event listener for send button 

const sendbtn = document.getElementById("sendbtn");
const username = document.getElementById("name");
const mail = document.getElementById("email");
const message = document.getElementById("message");

    message.addEventListener("click",function (event)
{
    console.log(event.target);
    sendbtn.style.display = "block";
});
    sendbtn.addEventListener("click" ,function(event){
        alert("Get Replay As Soon As Once Our Team Receive Your Message ! ...Thank You For Contacting Us."           
        )
    });