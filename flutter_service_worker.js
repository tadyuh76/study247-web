'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb5a2d0849ec27f50b1d356be8daeba9",
"assets/AssetManifest.json": "ad0e20cd90f67e03f4dbb8b2bf0535ce",
"assets/assets/fonts/Lexend-Bold.ttf": "4d5d99a2bed14c4c23950731cf6412a2",
"assets/assets/fonts/Lexend-Light.ttf": "f5f37cf9f05f51ab6caf78712fa17fc5",
"assets/assets/fonts/Lexend-Medium.ttf": "8d7edc33c0dc0daaabd638f21bcdf8fb",
"assets/assets/fonts/Lexend-Regular.ttf": "c0dc51d28f78a1d929e777bbfdb514cb",
"assets/assets/icons/academic_cap.svg": "5441f9c030ee8088e13769372d850d60",
"assets/assets/icons/add_people.svg": "24b0e8ee9fa8e5fa0d3c53027c1920ee",
"assets/assets/icons/badges/1_discipline.svg": "02da79dfabf89d486e76e9d7aeb4fdd5",
"assets/assets/icons/badges/1_focus.svg": "5fbd4c4287af75467e0ef328122255a0",
"assets/assets/icons/badges/1_hardwork.svg": "2aa1df285dae74cbe12eb611a8bda58f",
"assets/assets/icons/badges/1_persevere.svg": "ea26337d77c72e477537f533de7258f9",
"assets/assets/icons/badges/2_discipline.svg": "162d2b2478c105ad3d3a139869d0d8b9",
"assets/assets/icons/badges/2_focus.svg": "fcec45de7563dc2fbfd25bd2f7d3ed6c",
"assets/assets/icons/badges/2_hardwork.svg": "cca2223b3ffb41b508ff012b09e56024",
"assets/assets/icons/badges/2_persevere.svg": "3c82e2b26a9ead29ebea9f00f0c8c0ab",
"assets/assets/icons/badges/3_discipline.svg": "9fddc3810f5c173a2e36f8eb693878f9",
"assets/assets/icons/badges/3_focus.svg": "acd42204f790dff5d4a6fa70fc9093bd",
"assets/assets/icons/badges/3_hardwork.svg": "f383cffd8300794259d0c4609aa7c9cf",
"assets/assets/icons/badges/3_persevere.svg": "c3303862f65a95403b6ef5617f500593",
"assets/assets/icons/badges/4_discipline.svg": "b2806c8183ab3c300b4e7c10417ea955",
"assets/assets/icons/badges/4_focus.svg": "4e7d2959a3ac7bcddc6ac3af3c6a1d82",
"assets/assets/icons/badges/4_hardwork.svg": "3fd5a3c885e2883d254326fe017d1230",
"assets/assets/icons/badges/4_persevere.svg": "1406be95c4ae5a47faeed16d43681d88",
"assets/assets/icons/badges/5_discipline.svg": "209044b435a1e5851b517d0c07a8d9b3",
"assets/assets/icons/badges/5_focus.svg": "d9615d3fedd2fc7d8208364c9db2ce2b",
"assets/assets/icons/badges/5_hardwork.svg": "b8358c07756822b50880ce52934496d6",
"assets/assets/icons/badges/5_persevere.svg": "b679c7c839b0e5c283146a905809a6e4",
"assets/assets/icons/bookmark.svg": "8ac10045c21232d0e566fcee740851e1",
"assets/assets/icons/camera.svg": "4ed69c333e3989795c517991f491038e",
"assets/assets/icons/camera_off.svg": "1cca0668aa8a6f6d35a3095ed899536d",
"assets/assets/icons/chats.svg": "3a54029ab5f3c43c05ddec561f843636",
"assets/assets/icons/close.svg": "a820f426a2b52d57a2e666100a19eb08",
"assets/assets/icons/colored/clock.svg": "c324d2e0f521dd963b65b4cde8e3ff2c",
"assets/assets/icons/colored/coffee.svg": "0fcb25c6de55a8d5ba6bb2e8e3fa93e4",
"assets/assets/icons/colored/streak.svg": "64be7cf725f97d23c27cca721c3362a2",
"assets/assets/icons/delete_people.svg": "3304c31cda96b9fa27d7936562cc0c19",
"assets/assets/icons/document.svg": "816b1a8ccba7ea02a53f7ee558130c94",
"assets/assets/icons/documents.svg": "069e38acbddacbc968cc32775b19cd54",
"assets/assets/icons/edit.svg": "b00802248bde7ec9a1d357d147b7e291",
"assets/assets/icons/facebook.svg": "8731f495b35f6a37d850de25b9c656f7",
"assets/assets/icons/fast.svg": "f1f3390b2fbb104e64078a342a5314fe",
"assets/assets/icons/file.svg": "ac6213f4425a74fe4a2e8f5cd3a1da7d",
"assets/assets/icons/file_add.svg": "d4204456a9633e539ed499cfc4bacd68",
"assets/assets/icons/file_change.svg": "754972791ee224dafd6a16f60acb37ed",
"assets/assets/icons/file_unknown.svg": "6eebc340e7b1cb6bcc7f7ca48a6f4fac",
"assets/assets/icons/flashcards.svg": "b54c8635fb2b618442c8114e978c06c7",
"assets/assets/icons/folder.svg": "3e5e91b3ca7c37c81032f69fd48b6cea",
"assets/assets/icons/folder_add.svg": "96ee0dbb2024b5b3919ba6fa6b4fc661",
"assets/assets/icons/goal.svg": "9e2cf86d038ef0ca0236b74afd579dc5",
"assets/assets/icons/google.svg": "b2657ca6c17cfaade0023997c22cec9f",
"assets/assets/icons/google_play.svg": "4b9aa68e69116da6172d135b253143b8",
"assets/assets/icons/hide_participants.svg": "71bd3feed27374fc8971ee51108775e4",
"assets/assets/icons/home.svg": "3440f9431d9bf67faf5fd6522cc0aa6d",
"assets/assets/icons/home_outline.svg": "d6034f99c87d06ae9678d6a6d061563a",
"assets/assets/icons/image.svg": "1b8aad8c0067701a907286d8c105c294",
"assets/assets/icons/info.svg": "42a32f20c40fe0dcc2040dd5558c449d",
"assets/assets/icons/log_out.svg": "4bae0ea123cc263d8a4470641fe99132",
"assets/assets/icons/mastery/1.svg": "e656bcef1e5996fbb61565a62a784ab5",
"assets/assets/icons/mastery/10.svg": "a7c8e34446b7d1b20a2f5cfcd9e75bde",
"assets/assets/icons/mastery/2.svg": "fae82f50d7200ba0abf7fa6d008dba9f",
"assets/assets/icons/mastery/3.svg": "4b012665ec178a697ff3baf70fe86aa6",
"assets/assets/icons/mastery/4.svg": "421ae4dcd1a8a6d9545b431f26bcd884",
"assets/assets/icons/mastery/5.svg": "3c2807deb2e7ab8649e34209bc8b2c84",
"assets/assets/icons/mastery/6.svg": "4bf14806fb8b98ca72739365d4b47918",
"assets/assets/icons/mastery/7.svg": "7c250201a966f39d33becd51849d0581",
"assets/assets/icons/mastery/8.svg": "252505c11b0b1e9b51efc23b6d23254e",
"assets/assets/icons/mastery/9.svg": "e11b83d246df2363f6b2b7e4da9d09a8",
"assets/assets/icons/memory.svg": "efa8eb2bd3a3167b2558c41a8d099f8e",
"assets/assets/icons/message.svg": "1a9e2e6e777655eb0d5aa8638adf4f3c",
"assets/assets/icons/mic.svg": "4081140a7ce0d7ff3be4f66c07f1a586",
"assets/assets/icons/mic_off.svg": "c7e87966624c9f18728501668efd881c",
"assets/assets/icons/more.svg": "8dafef5bb97e70979a524e488f49dcc8",
"assets/assets/icons/music.svg": "eee35fb7e89bdeaeeefb668657ad6f85",
"assets/assets/icons/notification.svg": "c793e5f6f7042e2ba31b9c68cee18f53",
"assets/assets/icons/palette.svg": "6461216747b9483830269bde1c137f98",
"assets/assets/icons/pause.svg": "4d1d76793f3e6dea933e3937dcbc4baf",
"assets/assets/icons/people.svg": "9028437f3d3f6296fec17a568af1c75b",
"assets/assets/icons/person.svg": "09d431272bc15990e8575fccabcc5cd6",
"assets/assets/icons/pin.svg": "7bd45291fa86ab881be0eba1d33bc158",
"assets/assets/icons/play.svg": "3553d2ed4ee49f3ae9e19726e0306a9e",
"assets/assets/icons/profile.svg": "0999f67668f300f1f81de2f87291f4e1",
"assets/assets/icons/reply.svg": "e9d03faab6005cb5c9d450add0366482",
"assets/assets/icons/reset.svg": "ffb270c65385ae15824a1431bb420ad5",
"assets/assets/icons/search.svg": "465d39523d8810815523f5b8c4924c1f",
"assets/assets/icons/settings.svg": "951e11801e61ddecaba3150523314101",
"assets/assets/icons/share.svg": "6180e562e6059bc875f0c7fdf2bb7ee4",
"assets/assets/icons/show_participants.svg": "fea6dcc170297508ccee7a58b310258f",
"assets/assets/icons/timer.svg": "b0c2c6e137045a9404bb8f8645ee9d66",
"assets/assets/icons/trash_bin.svg": "30b37f8cb1f7238e69b0dbf2717b6b53",
"assets/assets/icons/unpin.svg": "dd2f9e6020a23db91a4e17f9beaf60c9",
"assets/assets/icons/user.svg": "d6721ea37f0fca6d122befb4f3c7f344",
"assets/assets/illustrations/landing.svg": "40fbfd905c4507ea1610ec554a264cfd",
"assets/assets/images/card_background.png": "bc652c4c2cdcc4670f14ebca2c4cbdb8",
"assets/assets/images/logo.png": "be0fd88e8cd50b1545855eba66338f25",
"assets/assets/images/logo_rounded.png": "e0b327ed2ecd3301119ea5bf2c812d29",
"assets/assets/lotties/complete.json": "299eb99f0a09ff6ad5e44fc4af8918cb",
"assets/FontManifest.json": "e28d812e7e48d71422c18138fee00ae2",
"assets/fonts/MaterialIcons-Regular.otf": "138ee93db86244ff386b7fc5776321f2",
"assets/NOTICES": "b3e7fa8c7a8de2ec1003a06c82d7517c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "c8b0d482e99abe1eae4dda9898cbca5f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "0a901af03bb55986fd81405619d7f7e0",
"icons/Icon-512.png": "aab54e8137f48ae1a84bb602a789e04e",
"icons/Icon-maskable-192.png": "0a901af03bb55986fd81405619d7f7e0",
"icons/Icon-maskable-512.png": "aab54e8137f48ae1a84bb602a789e04e",
"index.html": "4c8299c61b4632bb261d3c7cd164db03",
"/": "4c8299c61b4632bb261d3c7cd164db03",
"main.dart.js": "429800992150cb854e8d0c12ea87e44f",
"manifest.json": "bf9e60ec65e8607ace56351afc6f04f6",
"splash/img/dark-1x.png": "651d79d12a1905acc35a8cdc80896b76",
"splash/img/dark-2x.png": "bceee10a4a63f675223383862ef29987",
"splash/img/dark-3x.png": "c49da29ae5bb8bf7a5c78d009805531b",
"splash/img/dark-4x.png": "d7cd25d98b7d050b69d532b9fb258297",
"splash/img/light-1x.png": "651d79d12a1905acc35a8cdc80896b76",
"splash/img/light-2x.png": "bceee10a4a63f675223383862ef29987",
"splash/img/light-3x.png": "c49da29ae5bb8bf7a5c78d009805531b",
"splash/img/light-4x.png": "d7cd25d98b7d050b69d532b9fb258297",
"version.json": "8eecae41ed54ef2d0bac20f36be6e1cc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
