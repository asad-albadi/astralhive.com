'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf": "59b5238c0c1acf946ebea93fc3862987",
"assets/assets/fonts/Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf": "2eabf19db936c3a7603eaa08dce63e6b",
"assets/assets/fonts/Source_Code_Pro.zip": "2ed146793b70ab3af0b7b7be8dc11e37",
"assets/assets/images/Google_Play_Arrow_logo.svg.png": "b6faa27499eb15df7edc76bf5f00897f",
"assets/assets/images/Google-Play-Store-Button.png": "36722765efd30ba3123ad23efd2911d2",
"assets/assets/images/astralcalc_logo.png": "bbd9687feb1e501077cc16f17b1b9ca7",
"assets/assets/vectors/maker_semi_trans.svg": "0ae14cc7041acfd7c0175c8700891ba5",
"assets/assets/vectors/astralhive_logo.svg": "31c7f82028e7cbbceb51011ccc88cd8c",
"assets/assets/vectors/maker.svg": "eece10c135b9c8fc276ba4556b7a0bdf",
"assets/assets/vectors/code.svg": "1c9fb4364e6b2e5a37d3af973a082e38",
"assets/assets/vectors/google-play-badge-logo-svgrepo-com.svg": "1644f2561e9bf28500e4e029c8e4e689",
"assets/assets/vectors/astralhive_logo_semi_trans.svg": "4f843df3deb969364e6162a67fe6a687",
"assets/assets/vectors/code_semi_trans.svg": "f9d023f4aff181111d9bc702f1e878d0",
"assets/assets/vectors/game_semi_trans.svg": "b351a75858b829027265e6adf584b072",
"assets/assets/vectors/game.svg": "3b89ff8238cc7cd4d4739e90ace1705e",
"assets/AssetManifest.bin": "cbad3f3cb1f75f65b795c82f6a9abfec",
"assets/AssetManifest.bin.json": "cc58bc16e87c443e0aab9628723a11f3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "9696078be09ab49113250611b531b023",
"assets/AssetManifest.json": "90025b81d9e8d9c66e7c80b04252981f",
"assets/FontManifest.json": "ec83ad2f303bd74a13f1ce30121e5127",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"main.dart.js": "80e9081752fb119b13d7af98ec9953fa",
"favicon.png": "1b27e4fe4019f734f2f5013cd20b28a5",
"version.json": "748370cd5686f1847b322d2026337cc3",
"manifest.json": "4300449c0b166512898db90aa86348b7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"index.html": "cb7df39d110d3fd019405ba19c4a9951",
"/": "cb7df39d110d3fd019405ba19c4a9951",
"flutter_bootstrap.js": "d9f8964ca6f837880c4d4d9dbb19475c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-maskable-512.png": "eb17f3049741d51356ef7982c84858c5",
"icons/Icon-512.png": "eb17f3049741d51356ef7982c84858c5",
"icons/Icon-maskable-192.png": "d32b3df88816b270adc0ba83e46ded2a",
"icons/Icon-192.png": "d32b3df88816b270adc0ba83e46ded2a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
