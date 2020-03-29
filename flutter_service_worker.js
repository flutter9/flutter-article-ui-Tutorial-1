'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "3094407c6c57e5dcb77438f36838e62e",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "482ea17c30e491a66f4aab5070ab5fb9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/preview.jpg": "0141d8340957c4cea9fe6bcc88b9c137",
"/assets/assets/user.png": "7cc7a630624d20f7797cb4c8e93c09c1",
"/assets/assets/person1.jpg": "1a5231b2ba533417f5bc4822eb6813bc",
"/assets/assets/person3.jpg": "27221023e6337f4ad663d232b25e2ab2",
"/assets/assets/person2.jpg": "84cbad35a49f245a3864dcdb7282f9a7",
"/assets/assets/nature.jpg": "440c0e981ad394bc4caedb885c70bb47"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
