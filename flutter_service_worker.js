'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "def277474cbf83c15808314caa8e3598",
"version.json": "b6c111bc4d460b712108a59ede89e633",
"index.html": "b8e3d61b895db946a156c7836efb75c8",
"/": "b8e3d61b895db946a156c7836efb75c8",
"main.dart.js": "2710f7b9f30ea96d89657e7c4d9d365d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "0dcce32d1c05c317875a84db56facdbf",
"icons/Icon-192.png": "7d7b1e835af7ba07edfc1f0275c36b63",
"icons/Icon-maskable-192.png": "68ec34cfad49c9145518cf2e8db7c27b",
"icons/Icon-maskable-512.png": "8d002ff59a4600d3d7d58f7590375241",
"icons/Icon-512.png": "88475ca6ba2beca98544ea52ce9e3bb3",
"manifest.json": "c566b381d7ff2f923b34cd36b5382f67",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=d604bf3685ed1c61bb8518c5a0b6ad95-json": "d604bf3685ed1c61bb8518c5a0b6ad95",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=ee259df77e8b79220d2396caec894a57-json": "8eeca428b21deecc648919a27ac1d28d",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=38f3fb761dfcb100ccde40719cb80593-json": "38f3fb761dfcb100ccde40719cb80593",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=5a33297c8e449de2619101fb7edec2e4-json": "59b8f39263b8c7248eee0921e7cdaec6",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=c515419592e32c7085e15bb0cb343326-json": "b8bbaec4d368fc2469c24f5d95d256a6",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=8baae11c5a7fcd644cbbbc43bd6ca6f6-json": "915ce5df8e4fe953456b4c3d4f56104d",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=a8b7436086e6cb50728a710d3d7c7e29-json": "5e6ec1442d1c6ec59a1cf14e2cdde57f",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=cbecfca81adcd566756c4b36459b2d24-json": "cbecfca81adcd566756c4b36459b2d24",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=3d3adb18d38bb335e8685f2bd5e4145c-json": "335c8110eb292e0449c368800edcd18a",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=f7ed0890f190754f9ab5f87ea042bbb7-json": "f57ae4c788beb91108d05f408909da3b",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=8a5c20ac4e353866bd542ffc1afb3d25-json": "8a5c20ac4e353866bd542ffc1afb3d25",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=426bda421c883979d76a00e64fc0a688-json": "8e256814186389013603b76637d1bc2c",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=380c53b92cddc086f19a50d8c6c101f3-json": "380c53b92cddc086f19a50d8c6c101f3",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=96f587fcd1c9bac382228887f4e62ce5-json": "d4ee9b1d50447aeebae2123e72206db8",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=78ab63fe8df6e1faf41b29f9a634b4be-json": "dab1d9b2c527fe059474e70318546c72",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=2f457f55676895788d237723efe5cf8b-json": "ae32865ab8291bdcac86ee4d754809c5",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=96ecb33e6c93e4a27a516d6c4d1702df-json": "02b2255f2cf9ac8e9a6bed1fd7857c2f",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=fd9753f0b5ace102ef67af0c55fe190c-json": "cf546fa4a3caa6188732e2d037b611e2",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=7b28a9258eaf7659a0c3585718b9b70c-json": "9153dbc4376da4044524545e169cb119",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=a162585732120c21527f381fc8c0d63a-json": "9bc0590a4ac746dd0cc813c90d90f604",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=332da57b24eea64dd6f81cdf06278f50-json": "39b33dfd6d8758e55db05c89794f9895",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=c036468e29a26995c86bc1a23e413547-json": "46d4b2920086783eebbb4a410f982149",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=b429905e3fb1c833ce5a3ccafb815095-json": "b429905e3fb1c833ce5a3ccafb815095",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=dbd05eac7de04bb986fe3620860ce78d-json": "e2310d69928af25e312d66b645b67a46",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=d395af4ea2a9fa8501b5e08e22357b61-json": "ef443fb37682953f84608020cf08b2f0",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=d5cded91e63522c45f998d366241a4fe-json": "d5cded91e63522c45f998d366241a4fe",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=1ac5662ba773c4611601d801b73db076-json": "b1cb2b516cf904c0d4e9311788ee469f",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=1f604c9f4f974e9707619f602e59552e-json": "7c14277155e69c637852a82c9caedffa",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=0b2d30ff977384179732f9d417d4f154-json": "c0a6efc43887cde945108e38d65e64f3",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=88dfa837bc5022c70082006bf5d89827-json": "e7a9ff1d884e0f0b07d532dd1fc51b25",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=3eea1c8eb92609e2e1c95710639b658e-json": "3eea1c8eb92609e2e1c95710639b658e",
"build/ios/XCBuildData/PIFCache/target/TARGET@v11_hash=699c6a94081e81fadaf180712e52db19-json": "af26af2eccf6ec2ee5f503961d15f53d",
"build/ios/XCBuildData/PIFCache/workspace/WORKSPACE@v11_hash=(null)_subobjects=321926f3cd1415848b7e4365394c714a-json": "53a2f89b8e16572ca8f3da38926d95a0",
"build/ios/XCBuildData/PIFCache/project/PROJECT@v11_mod=9b6ffb06c5a1f6bfb4b02f1052177c1e_hash=bfdfe7dc352907fc980b868725387e98plugins=1OJSG6M1FOV3XYQCBH7Z29RZ0FPR9XDE1-json": "d92e5d7e8fffcbb2e2b2ed528cee01eb",
"assets/AssetManifest.json": "a63707d0aa6d060c33a00d9b8005993c",
"assets/NOTICES": "8a7d24eeaf3c1e64e5afae4009395a31",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "f2275e975004c55bc66d7c0b97cff7cf",
"assets/packages/aita_common/assets/logo_full.png": "daec643b968c10f6b72c106b0b3ff826",
"assets/packages/aita_common/assets/logo_wide.png": "4ab922a267cbf98055da7240f8b1b910",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d9749d8a1f4c78a0b46dabaa3ef4429b",
"assets/fonts/MaterialIcons-Regular.otf": "2d8f6b82e461dffde3df4e53059a87b1",
"assets/assets/app_icon_admin_ios.png": "fb256597c368420ce261b3185b42d3a4",
"assets/assets/app_icon_admin.png": "53712c9cc5fbf69e839c0cddfb907811",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
