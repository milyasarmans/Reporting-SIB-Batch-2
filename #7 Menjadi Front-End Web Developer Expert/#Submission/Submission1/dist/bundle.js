!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function u(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],i=0;i<e.length;i++){var a=e[i],s=n.base?a[0]+n.base:a[0],l=t[s]||0,c="".concat(s," ").concat(l);t[s]=l+1;var d=u(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:c,updater:g(p,n),references:1}),r.push(c)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function p(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function g(e,n){var t,r,i;if(n.singleton){var a=h++;t=f||(f=l(n)),r=p.bind(null,t,a,!1),i=p.bind(null,t,a,!0)}else t=l(n),r=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=u(t[r]);o[i].references--}for(var a=s(e,n),l=0;l<t.length;l++){var c=u(t[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}t=a}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}var o,u,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e){e.exports=JSON.parse('{"restaurants":[{"id":"6c7bqjgi84kcowlqdz","name":"Bring Your Phone Cafe","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/41","city":"Medan","rating":4.6},{"id":"ljx8i0qu2uckcowlqdz","name":"Run The Gun","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/07","city":"Bali","rating":4.6},{"id":"fe8bbxoazddkcowlqdz","name":"Pangsit Express","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/29","city":"Ternate","rating":4.8},{"id":"ik1zljmlf68kcowlqdz","name":"Ducky Duck","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/38","city":"Malang","rating":4.7},{"id":"9jpuzkm6n6jkcowlqdz","name":"Kafein","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/40","city":"Bali","rating":3.8},{"id":"cpl5jpsnuqkkcowlqdz","name":"Makan mudah","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/08","city":"Malang","rating":4.6},{"id":"iqtf9hmdzvbkcowlqdz","name":"Saya Suka","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/32","city":"Surabaya","rating":3.6},{"id":"8i06gqcc2dpkcowlqdz","name":"Gigitan Cepat","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/45","city":"Aceh","rating":4},{"id":"wf5o19xhxxkcowlqdz","name":"Fairy Cafe","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/04","city":"Malang","rating":3.9}]}')},function(e,n,t){"use strict";t.r(n);t(4),t(6),t(8),t(10),t(12),t(14);var r=t(2),i=document.getElementById("menu-navbar");document.getElementById("toggle-bar").addEventListener("click",(function(){i.classList.toggle("active")}));var a=document.querySelector("restaurant-list");a.setAttribute("class","restaurant"),r.restaurants.forEach((function(e){var n,t,r=(n=e.description,t=180,n.length>t-5?n.substring(0,t).trimEnd()+".....":n),i=document.createElement("restaurant");i.setAttribute("class","restaurant-item"),i.innerHTML='\n    <div class="card-image">\n        <div tabindex="0" class="restaurant-rating">\n            <span>Rating '.concat(e.rating,'</span>\n        </div>\n        <img class="restaurant-image"\n            src="').concat(e.pictureId,'"\n            alt="').concat(e.name,'">\n    </div>\n    <div class="restaurant-container">\n        <h1 class="restaurant-heading"><a href="#">').concat(e.name,'</a></h1>\n        <h5 tabindex="0">').concat(e.city,'</h5>\n        <p class="restaurant-description">').concat(r,"</p>\n    </div>\n    "),a.appendChild(i)}))},function(e,n,t){(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{s({},"")}catch(e){s=function(e,n,t){return e[n]=t}}function l(e,n,t,r){var i=n&&n.prototype instanceof p?n:p,a=Object.create(i.prototype),o=new k(r||[]);return a._invoke=function(e,n,t){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return L()}for(t.method=i,t.arg=a;;){var o=t.delegate;if(o){var u=w(o,t);if(u){if(u===d)continue;return u}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var s=c(e,n,t);if("normal"===s.type){if(r=t.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(r="completed",t.method="throw",t.arg=s.arg)}}}(e,t,o),a}function c(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function p(){}function m(){}function f(){}var h={};s(h,a,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(A([])));v&&v!==t&&r.call(v,a)&&(h=v);var b=f.prototype=p.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(n){s(e,n,(function(e){return this._invoke(n,e)}))}))}function x(e,t){var i;this._invoke=function(a,o){function u(){return new t((function(i,u){!function i(a,o,u,s){var l=c(e[a],e,o);if("throw"!==l.type){var d=l.arg,p=d.value;return p&&"object"===n(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){i("next",e,u,s)}),(function(e){i("throw",e,u,s)})):t.resolve(p).then((function(e){d.value=e,u(d)}),(function(e){return i("throw",e,u,s)}))}s(l.arg)}(a,o,i,u)}))}return i=i?i.then(u,u):u()}}function w(e,n){var t=e.iterator[n.method];if(void 0===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=void 0,w(e,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=c(t,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var i=r.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function q(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function j(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(q,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,i=function n(){for(;++t<e.length;)if(r.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=f,s(b,"constructor",f),s(f,"constructor",m),m.displayName=s(f,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(x.prototype),s(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(n,t,r,i,a){void 0===a&&(a=Promise);var o=new x(l(n,t,r,i),a);return e.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(b),s(b,u,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return o.type="throw",o.arg=e,n.next=t,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=n,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),d},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),j(t),d}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var i=r.arg;j(t)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:A(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),d}},e}("object"===n(e)?e.exports:{});try{regeneratorRuntime=t}catch(e){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}).call(this,t(5)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){var r=t(0),i=t(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]),n.push([e.i,"/* GENERAL */\r\n\r\n:root {\r\n    --chocholate-color: #6E3B3B;\r\n    --brown-color: #AC3F21;\r\n    --gold-color: #BE6A15;\r\n    --light-color: #f4f4f4;\r\n    --text-color: #141313;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Ubuntu', sans-serif;\r\n    font-stretch: ultra-condensed;\r\n    overflow-x: hidden;\r\n}\r\n\r\nh1 {\r\n    color: var(--gold-color);\r\n    text-align: center;\r\n    font-size: 32px;\r\n    padding: 5px 0;\r\n}\r\n\r\na {\r\n    padding: 5px 0;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    height: 250px;\r\n}\r\n\r\n\r\n/* SKIP LINK */\r\n\r\n.skip-link {\r\n    position: absolute;\r\n    top: -40px;\r\n    left: 0;\r\n    background-color: var(--gold-color);\r\n    color: var(--light-color);\r\n    padding: 8px;\r\n    z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n    top: 0;\r\n}\r\n\r\n\r\n/* EXPLORE RESTAURANT */\r\n\r\nmain {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container {\r\n    padding: 50px;\r\n}\r\n\r\n.explore-restaurant {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 10px auto;\r\n}\r\n\r\n\r\n/* CARD RESTAURANT */\r\n\r\n.restaurant {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n    margin: 20px auto auto;\r\n    text-align: left;\r\n}\r\n\r\n.restaurant-item {\r\n    box-shadow: 0 4px 8px 0 #0c0c0c33;\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    overflow: hidden;\r\n}\r\n\r\n.restaurant-container {\r\n    padding: 10px;\r\n}\r\n\r\n.card-image {\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: transform 0.5s ease;\r\n}\r\n\r\n.restaurant-rating {\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 0;\r\n    background-color: var(--gold-color);\r\n    color: var(--light-color);\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n    padding: 5px 32px;\r\n    z-index: 1;\r\n}\r\n\r\n.restaurant-image {\r\n    width: 100%;\r\n}\r\n\r\n.restaurant-heading {\r\n    text-align: left;\r\n    font-weight: bolder;\r\n    font-size: 24px;\r\n}\r\n\r\n.restaurant-heading a:hover {\r\n    color: var(--chocholate-color);\r\n}\r\n\r\n.restaurant-heading a {\r\n    padding: 10px 0px;\r\n    text-decoration: none;\r\n    color: var(--gold-color);\r\n}\r\n\r\n.restaurant-description {\r\n    margin: 10px 0px;\r\n    font-size: 16px;\r\n    color: var(--text-color);\r\n    line-height: 18px;\r\n}\r\n\r\n.restaurant-container h5 {\r\n    text-decoration: none;\r\n    color: var(--brown-color);\r\n}",""]),e.exports=n},function(e,n,t){var r=t(0),i=t(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,".navbar {\r\n    font-size: 20px;\r\n    background-color: var(--gold-color);\r\n    border-bottom: 5px solid var(--light-color);\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 10px;\r\n    display: inline-block;\r\n    font-weight: 900;\r\n    font-style: italic;\r\n    text-transform: uppercase;\r\n    margin: 10px 0px 0px 20px;\r\n    font-size: 26px;\r\n}\r\n\r\n.main-navbar {\r\n    list-style-type: none;\r\n    min-height: 44px;\r\n    display: none;\r\n}\r\n\r\n.main-navbar li {\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n}\r\n\r\n.main-navbar li a {\r\n    padding: 15px;\r\n}\r\n\r\n.navbar-link,\r\n.navbar-brand {\r\n    text-decoration: none;\r\n    color: var(--light-color);\r\n}\r\n\r\n.toggle-menu {\r\n    background-color: transparent;\r\n    color: var(--light-color);\r\n    padding: 15px 12px;\r\n    position: absolute;\r\n    /* top: 10px; */\r\n    right: 20px;\r\n    cursor: pointer;\r\n    border: none;\r\n    font-size: 30px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.navbar button i {\r\n    padding: 8px;\r\n    font-size: 28px;\r\n}\r\n\r\n.active {\r\n    display: block;\r\n}",""]),e.exports=n},function(e,n,t){var r=t(0),i=t(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,'    .jumbotron {\r\n        display: flex;\r\n        background: url("./images/hero.jpg");\r\n        background-position: center;\r\n        align-items: center;\r\n        min-height: 610px;\r\n        background-size: cover;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    \r\n    .main-jumbotron {\r\n        margin: 0 auto;\r\n    }\r\n    \r\n    .heading-jumbotron {\r\n        color: var(--gold-color);\r\n        font-weight: bolder;\r\n        font-size: 42px;\r\n        text-shadow: 1px 4px #f4f4f4;\r\n    }\r\n    \r\n    .motto-jumbotron {\r\n        color: var(--light-color);\r\n        font-size: 20px;\r\n        font-weight: lighter;\r\n        margin-bottom: 50px;\r\n    }\r\n    \r\n    button {\r\n        text-align: center;\r\n        background-color: var(--gold-color);\r\n        min-height: 44px;\r\n        min-width: 44px;\r\n        border-radius: 5px;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    button a {\r\n        color: var(--light-color);\r\n        font-size: 18px;\r\n        text-decoration: none;\r\n        padding: 15px 30px;\r\n        font-weight: 700;\r\n    }\r\n    \r\n    button:hover {\r\n        background-color: var(--chocolate-color);\r\n    }\r\n    \r\n    button:hover a {\r\n        color: var(--gold-color);\r\n    }',""]),e.exports=n},function(e,n,t){var r=t(0),i=t(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"footer {\r\n    background-color: var(--brown-color);\r\n    padding: 18px;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-style: italic;\r\n    color: var(--light-color);\r\n}",""]),e.exports=n},function(e,n,t){var r=t(0),i=t(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"@media screen and (min-width: 678px) {\r\n    .restaurant {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 16px;\r\n    }\r\n    .restaurant-container {\r\n        padding: 16px 25px 25px 25px;\r\n    }\r\n    .restaurant-heading {\r\n        font-size: 20px;\r\n    }\r\n    .restaurant-description {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .navbar {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding-bottom: 0;\r\n        height: 70px;\r\n        align-items: center;\r\n    }\r\n    .navbar-brand {\r\n        margin-top: 0;\r\n    }\r\n    .main-navbar {\r\n        display: flex;\r\n        margin-right: 30px;\r\n        flex-direction: row;\r\n        justify-content: flex-end;\r\n    }\r\n    .main-navbar li {\r\n        margin: 0;\r\n    }\r\n    .navbar-link {\r\n        margin-left: 40px;\r\n    }\r\n    .navbar-brand:hover,\r\n    .navbar-link:hover {\r\n        color: rgba(255, 255, 255, 1);\r\n    }\r\n    .toggle-menu {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 920px) {\r\n    .restaurant {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    main {\r\n        max-width: 1200px;\r\n    }\r\n}",""]),e.exports=n}]);