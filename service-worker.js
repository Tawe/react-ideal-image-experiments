"use strict";var precacheConfig=[["/async-precious/index.html","905a0667e6fc6112253a0da45b45a8ef"],["/async-precious/static/css/main.e93d637b.css","26900f620e563684db59d6b3d2e46e72"],["/async-precious/static/js/main.a2b9baf1.js","3f3294ea225815095774f493b4bf6027"],["/async-precious/static/media/andre-spieker-238-unsplash.45d5a9bc.jpg","45d5a9bc02e84853f054b4fa4c116613"],["/async-precious/static/media/andre-spieker-238-unsplash.85e19218.webp","85e192180249ce8875e18f9ba5fbd770"],["/async-precious/static/media/jairo-alzate-45522-unsplash.2dce0ac0.webp","2dce0ac0f9bcbe855df4c0b77d6f2064"],["/async-precious/static/media/jairo-alzate-45522-unsplash.6c1c0a4a.jpg","6c1c0a4a79dda7ac3aca38265ad4ba0c"],["/async-precious/static/media/marvin-meyer-188676-unsplash.80fcb317.webp","80fcb317d9d194bcb287f62645972e2f"],["/async-precious/static/media/vincent-van-zalinge-408523-unsplash.32b04e7c.webp","32b04e7cf49d26d80d7df029c991881f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));0,e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});