importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

// custom ajustments

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);


workbox.precaching.precacheAndRoute([
  {
    "url": "css/style.css",
    "revision": "d689281555560efbfdf03b1d20aee63b"
  },
  {
    "url": "index.html",
    "revision": "90d312e07002f2595e13a9865ed01419"
  },
  {
    "url": "js/app.js",
    "revision": "926c7651ce8a14e396990b0a83daee47"
  }
]);