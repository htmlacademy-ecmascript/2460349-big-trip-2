(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",d="year",p="date",u="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:a,D:p,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=v;var g=function(e){return e instanceof w},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},C=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},M=_;M.l=$,M.i=g,M.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var n=C(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return C(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<C(e)},m.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!M.u(t)||t,u=M.p(e),h=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},f=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return c?h(1,0):h(31,11);case l:return c?h(1,m):h(0,m+1);case o:var b=this.$locale().weekStart||0,g=(v<b?v+7:v)-b;return h(c?_-g:_+(6-g),m);case a:case p:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=M.p(e),u="set"+(this.$u?"UTC":""),h=(o={},o[a]=u+"Date",o[p]=u+"Date",o[l]=u+"Month",o[d]=u+"FullYear",o[r]=u+"Hours",o[s]=u+"Minutes",o[i]=u+"Seconds",o[n]=u+"Milliseconds",o)[c],f=c===a?this.$D+(t-this.$W):t;if(c===l||c===d){var v=this.clone().set(p,1);v.$d[h](f),v.init(),this.$d=v.set(p,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[M.p(e)]()},m.add=function(n,c){var p,u=this;n=Number(n);var h=M.p(c),f=function(e){var t=C(u);return M.w(t.date(t.date()+Math.round(e*n)),u)};if(h===l)return this.set(l,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===a)return f(1);if(h===o)return f(7);var v=(p={},p[s]=e,p[r]=t,p[i]=1e3,p)[h]||1,m=this.$d.getTime()+n*v;return M.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},p=function(e){return M.s(r%12||12,e,"0")},h=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:p(1),hh:p(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||v[e]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,p,u){var h,f=M.p(p),v=C(n),m=(v.utcOffset()-this.utcOffset())*e,_=this-v,y=M.m(this,v);return y=(h={},h[d]=y/12,h[l]=y,h[c]=y/3,h[o]=(_-m)/6048e5,h[a]=(_-m)/864e5,h[r]=_/t,h[s]=_/e,h[i]=_/1e3,h)[f]||_,u?y:M.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return b[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),D=w.prototype;return C.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",d],["$D",p]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,w,C),e.$i=!0),C},C.locale=$,C.isDayjs=g,C.unix=function(e){return C(1e3*e)},C.en=b[y],C.Ls=b,C.p={},C}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var u=n(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=s(h,i);i.byIndex=o,t.splice(o,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof b))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof b&&t instanceof b))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function i(e){if(null!==e){if(!(e instanceof b))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}var s=n(379),r=n.n(s),a=n(795),o=n.n(a),l=n(569),c=n.n(l),d=n(565),p=n.n(d),u=n(216),h=n.n(u),f=n(589),v=n.n(f),m=n(10),_={};_.styleTagTransform=v(),_.setAttributes=p(),_.insert=c().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=h(),r()(m.Z,_),m.Z&&m.Z.locals&&m.Z.locals;const y="shake";class b{#e=null;constructor(){if(new.target===b)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(y),setTimeout((()=>{this.element.classList.remove(y),e?.()}),600)}}class g extends b{get template(){return'\n   <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n     <div class="trip-sort__item  trip-sort__item--day">\n       <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n       <label class="trip-sort__btn" for="sort-day">Day</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--event">\n       <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n       <label class="trip-sort__btn" for="sort-event">Event</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--time">\n       <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n       <label class="trip-sort__btn" for="sort-time">Time</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--price">\n       <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n       <label class="trip-sort__btn" for="sort-price">Price</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--offer">\n       <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n       <label class="trip-sort__btn" for="sort-offer">Offers</label>\n     </div>\n   </form>\n'}}class $ extends b{get template(){return'<ul class="trip-events__list"></ul>'}}class C extends b{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}var M=n(484),w=n.n(M);function D(e,t){return e?w()(e).format(t):""}const E="HH:MM",A="MM/DD/YYYY HH:mm",T="everything",k="future",S="present",x="past",O="DEFAULT",F="EDITING";class P extends b{#t=null;#n=null;#i=null;#s=null;#r=null;constructor({point:e,offers:t,destination:n,onEditClick:i,onFavoriteClick:s}){super(),this.#t=e,this.#n=t,this.#i=n,this.#s=i,this.#r=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#o)}get template(){return((e,t,n)=>{const{type:i,dateFrom:s,dateTo:r,isFavorite:a,basePrice:o}=e,{name:l}=n;return`\n  <li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${s}">${D(s,"MMM D")}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${i} at ${l}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${s}">${D(s,E)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${r}">${D(r,E)}</time>\n        </p>\n        <p class="event__duration">30M</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${o}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${t.map((e=>(({title:e,price:t})=>`\n  <li class="event__offer">\n    <span class="event__offer-title">${e}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${t}</span>\n  </li>\n  `)(e))).join("")}\n      </ul>\n      <button class="event__favorite-btn ${a&&"event__favorite-btn--active"}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>\n`})(this.#t,this.#n,this.#i)}#a=e=>{e.preventDefault(),this.#s()};#o=e=>{e.preventDefault(),this.#r()}}class L extends b{#t=null;#l=null;#n=null;#i=null;#c=null;#d=null;constructor({point:e,offers:t,destination:n,checkedOffers:i,allDestinations:s,onFormSubmit:r}){super(),this.#t=e,this.#l=i,this.#n=t,this.#i=n,this.#c=s,this.#d=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#p)}get template(){return((e,t,n,i,s)=>{const{type:r,dateFrom:a,dateTo:o,basePrice:l,id:c}=e,{name:d,description:p,pictures:u}=i;return`\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-${c}">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${r}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${c}" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n\n            <div class="event__type-item">\n              <input id="event-type-taxi-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-${c}">Taxi</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-bus-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n              <label class="event__type-label  event__type-label--bus" for="event-type-bus-${c}">Bus</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-train-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n              <label class="event__type-label  event__type-label--train" for="event-type-train-${c}">Train</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-ship-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n              <label class="event__type-label  event__type-label--ship" for="event-type-ship-${c}">Ship</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-drive-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n              <label class="event__type-label  event__type-label--drive" for="event-type-drive-${c}">Drive</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-flight-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n              <label class="event__type-label  event__type-label--flight" for="event-type-flight-${c}">Flight</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-check-in-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-${c}">Check-in</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-sightseeing-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-${c}">Sightseeing</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-restaurant-${c}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-${c}">Restaurant</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-${c}">\n          ${r}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-${c}" type="text" name="event-destination" value="${d}" list="destination-list-${c}">\n        <datalist id="destination-list-${c}">\n        ${s.map((e=>(({name:e})=>`<option value="${e}"></option>`)(e))).join("")}\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-${c}">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-${c}" type="text" name="event-start-time" value="${D(a,A)}"\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-${c}">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-${c}" type="text" name="event-end-time" value="${D(o,A)}">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-${c}">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-${c}" type="text" name="event-price" value="${l}">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n    <section class="event__details">\n        ${(({offers:e}={},t)=>void 0===e?"":`\n    <section class="event__section  event__section--offers">\n     <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n      ${e.map((e=>((e,t)=>{const{id:n,title:i,price:s}=e;return`\n  <div class="event__offer-selector">\n   <input class="event__offer-checkbox  visually-hidden" id="${n}" type="checkbox" name="${n}"${t.map((e=>e.id)).includes(n)?" checked":""}>\n     <label class="event__offer-label" for="${n}">\n       <span class="event__offer-title">${i}</span>\n        &plus;&euro;&nbsp;\n       <span class="event__offer-price">${s}</span>\n     </label>\n  </div>\n  `})(e,t))).join("")||""}\n      </div>\n    </section>`)(t,n)}\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${p}</p>\n        ${(e=>e.length<=0?"":`\n  <div class="event__photos-container">\n    <div class="event__photos-tape">\n       ${e.map((e=>(({src:e,description:t})=>`<img class="event__photo" src="${e}" alt="${t}"></img>`)(e))).join("")}\n    </div>\n  </div>`)(u)}\n      </section>\n    </section>\n  </form>\n`})(this.#t,this.#n,this.#l,this.#i,this.#c)}#p=e=>{e.preventDefault(),this.#d(this.#t)}}class H{#u=null;#h=null;#f=null;#v=null;#m;#t=null;#_=null;#y=O;constructor({listOfTrips:e,pointsModel:t,onDataChange:n,onModeChange:i}){this.#u=e,this.#m=t,this.#h=n,this.#_=i}init(n){const s=this.#f,r=this.#v;this.#t=n,this.#f=new P({point:n,offers:[...this.#m.getOffersByTypeAndIds(n.type,n.offers)],destination:this.#m.getDestinationId(n.destination),onEditClick:()=>{this.#b(),document.addEventListener("keydown",this.#g)},onFavoriteClick:this.#r}),this.#v=new L({point:n,checkedOffers:[...this.#m.getOffersByTypeAndIds(n.type,n.offers)],offers:this.#m.getOfferByType(n.type),allDestinations:this.#m.getDestination(n.destination),destination:this.#m.getDestinationId(n.destination),onFormSubmit:()=>{this.#$(),document.removeEventListener("keydown",this.#g)}}),null!==r&&null!==s?(this.#y===O&&t(this.#f,s),this.#y===F&&t(this.#f,r),i(s),i(r)):e(this.#f,this.#u)}destroy(){i(this.#f),i(this.#v)}#g=e=>{"Escape"===e.key&&(e.preventDefault(),this.#$(),document.removeEventListener("keydown",this.#g))};resetView(){this.#y!==O&&this.#$()}#b(){t(this.#v,this.#f),this.#_(),this.#y=F}#$(){t(this.#f,this.#v),this.#y=O}#r=()=>{this.#h({...this.#t,isFavorite:!this.#t.isFavorite})};#d=e=>{this.#h(e),this.#$()}}class B extends b{#C=null;constructor({filters:e}){super(),this.#C=e}get template(){return`<form class="trip-filters" action="#" method="get">\n  ${this.#C.map(((e,t)=>((e,t)=>{const{type:n,count:i}=e;return`<div class="trip-filters__filter">\n    <input\n    id="filter-${n}"\n    class="trip-filters__filter-input  visually-hidden"\n    type="radio" name="trip-filter"\n    ${t?"checked":""}\n    ${0===i?"disabled":""}>\n\n    <label class="trip-filters__filter-label"\n    for="filter-${n}">${n}</label>\n    </div>`})(e,0===t))).join("")}\n  <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>`}}const I=new Date,j={[T]:e=>e,[k]:e=>e.filter((e=>new Date(e.dateFrom)>I)),[S]:e=>e.filter((e=>I>=new Date(e.dateFrom)&&I<=new Date(e.dateTo))),[x]:e=>e.filter((e=>new Date(e.dateTo)<I))};let Y=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),"");const U=[{basePrice:1100,dateFrom:"2025-08-20T22:55:56.845Z",dateTo:"2025-08-21T11:22:13.375Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e01",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa01","f7d8c9e0-1112-1314-1516-920314253647"],type:"taxi"},{basePrice:1200,dateFrom:"2024-11-01T10:55:56.845Z",dateTo:"2024-12-11T12:22:13.375Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e02",isFavorite:!1,offers:["c3e4e6-9053-42ce-b747-e281314baa32","be4c3e4e6-9053-42ce-b747-e281314baa3"],type:"Ship"},{basePrice:1300,dateFrom:"2019-07-10T11:55:56.845Z",dateTo:"2019-07-11T16:22:13.375Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e03",isFavorite:!1,offers:[],type:"Check-in"}];function Z(){return{id:Y(),...(e=U,e[Math.floor(Math.random()*e.length)])};var e}const N=[{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e01",description:"",name:"Chamonix",pictures:[{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Chamonix parliament building"},{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Chamonix "}]},{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e02",description:"\tLuxembourg, is a beautiful city, a true asian pearl, with crowded streets.",name:"Luxembourg",pictures:[{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Luxembourg "},{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Luxembourg parliament "},{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Luxembourg parliament building"}]},{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e03",description:"Ottawa, is a beautiful city, a true asian pearl, with crowded streets.",name:"Ottawa",pictures:[]}],W=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa01",title:"Upgrade to a business class",price:120},{id:"f7d8c9e0-1112-1314-1516-920314253647",title:"Travel guide",price:10},{id:"b4c3e4e6-9053-42ce-b747-e281314baa02",title:"Help carry the luggage",price:200}]},{type:"Ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa03",title:"Upgrade to a business class",price:120},{id:"be4c3e4e6-9053-42ce-b747-e281314baa3",title:"Add Wi-Fi",price:5},{id:"c3e4e6-9053-42ce-b747-e281314baa32",title:"Choose seats",price:10},{id:"b4c3e4e6-9053-42ce-b747-e281314baa05",title:"Upgrade to a comfort class",price:100}]},{type:"Bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:120}]}],q=document.querySelector(".trip-events"),R=document.querySelector(".trip-main"),V=new class{#M=Array.from({length:4},Z);#w=N;#n=W;get points(){return this.#M}getDestination(){return this.#w}getDestinationId(e){return this.getDestination().find((t=>t.id===e))}getOffers(){return this.#n}getOfferByType(e){return this.getOffers().find((t=>t.type===e))}getOffersByTypeAndIds(e,t){const n=this.getOfferByType(e);return n?.offers.filter((e=>t.includes(e.id)))||[]}},z=new class{#D;#m;#u=new $;#E=new g;#A=new C;#T=[];#k=new Map;constructor({container:e,pointsModel:t}){this.#D=e,this.#m=t}init(){this.#T=[...this.#m.points],this.#S()}#_=()=>{this.#k.forEach((e=>e.resetView()))};#x=e=>{var t,n;this.#T=(t=this.#T,n=e,t.map((e=>e.id===n.id?n:e))),this.#k.get(e.id).init(e)};#O(){e(this.#E,this.#D,"afterbegin")}#F(){e(this.#A,this.#D)}#P(){e(this.#u,this.#D),this.#L()}#H(e){const t=new H({listOfTrips:this.#u.element,pointsModel:this.#m,onDataChange:this.#x,onModeChange:this.#_});t.init(e),this.#k.set(e.id,t)}#L(){for(let e=0;e<this.#T.length;e++)this.#H(this.#T[e])}#B(){this.#k.forEach((e=>e.destroy())),this.#k.clear()}#S(){this.#P(),0!==this.#T.length?this.#O():this.#F()}}({container:q,pointsModel:V}),J=new class{#I=null;#m;constructor({container:e,pointsModel:t}){this.#I=e,this.#m=t}init(){const t=(n=this.#m.points,Object.entries(j).map((([e,t])=>({type:e,count:t(n).length}))));var n;e(new B({filters:t}),this.#I)}}({container:R,pointsModel:V});J.init(),z.init()})()})();
//# sourceMappingURL=bundle.0e5d849ac345701e8ff4.js.map