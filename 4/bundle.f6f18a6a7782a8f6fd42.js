(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",c="quarter",d="year",p="date",u="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:d,w:l,d:a,D:p,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var $=function(e){return e instanceof T},g=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},D=m;D.l=g,D.i=$,D.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function h(e){this.$L=g(e.locale,null,!0),this.parse(e)}var _=h.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(v);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return D},_.isValid=function(){return!(this.$d.toString()===u)},_.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return M(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<M(e)},_.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,c=!!D.u(t)||t,u=D.p(e),v=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},f=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return c?v(1,0):v(31,11);case o:return c?v(1,_):v(0,_+1);case l:var b=this.$locale().weekStart||0,$=(h<b?h+7:h)-b;return v(c?m-$:m+(6-$),_);case a:case p:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var l,c=D.p(e),u="set"+(this.$u?"UTC":""),v=(l={},l[a]=u+"Date",l[p]=u+"Date",l[o]=u+"Month",l[d]=u+"FullYear",l[r]=u+"Hours",l[s]=u+"Minutes",l[i]=u+"Seconds",l[n]=u+"Milliseconds",l)[c],f=c===a?this.$D+(t-this.$W):t;if(c===o||c===d){var h=this.clone().set(p,1);h.$d[v](f),h.init(),this.$d=h.set(p,Math.min(this.$D,h.daysInMonth())).$d}else v&&this.$d[v](f);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[D.p(e)]()},_.add=function(n,c){var p,u=this;n=Number(n);var v=D.p(c),f=function(e){var t=M(u);return D.w(t.date(t.date()+Math.round(e*n)),u)};if(v===o)return this.set(o,this.$M+n);if(v===d)return this.set(d,this.$y+n);if(v===a)return f(1);if(v===l)return f(7);var h=(p={},p[s]=e,p[r]=t,p[i]=1e3,p)[v]||1,_=this.$d.getTime()+n*h;return D.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,c=n.months,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},p=function(e){return D.s(r%12||12,e,"0")},v=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:D.s(l+1,2,"0"),MMM:d(n.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,o,2),ddd:d(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:D.s(r,2,"0"),h:p(1),hh:p(2),a:v(r,a,!0),A:v(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||h[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,p,u){var v,f=D.p(p),h=M(n),_=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=D.m(this,h);return y=(v={},v[d]=y/12,v[o]=y,v[c]=y/3,v[l]=(m-_)/6048e5,v[a]=(m-_)/864e5,v[r]=m/t,v[s]=m/e,v[i]=m/1e3,v)[f]||m,u?y:D.a(y)},_.daysInMonth=function(){return this.endOf(o).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=g(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return D.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),O=T.prototype;return M.prototype=O,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",d],["$D",p]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,T,M),e.$i=!0),M},M.locale=g,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}var i=n(484),s=n.n(i);function r(e,t){return e?s()(e).format(t):""}const a={MONTH_DAY:"MMM D",HOURS:"HH:MM",FULL_DATE_TIME:"MM/DD/YYYY HH:mm"};class l{constructor({point:e,offers:t,destination:n,checkedOffers:i,allDestinations:s}){this.point=e,this.checkedOffers=i,this.offers=t,this.destination=n,this.destinationAll=s}getTemplate(){return((e,t,n,i,s)=>{const{type:l,dateFrom:o,dateTo:c,basePrice:d,id:p}=e,{name:u,description:v,pictures:f}=i;return`\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-${p}">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${l}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${p}" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n\n            <div class="event__type-item">\n              <input id="event-type-taxi-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-${p}">Taxi</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-bus-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n              <label class="event__type-label  event__type-label--bus" for="event-type-bus-${p}">Bus</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-train-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n              <label class="event__type-label  event__type-label--train" for="event-type-train-${p}">Train</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-ship-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n              <label class="event__type-label  event__type-label--ship" for="event-type-ship-${p}">Ship</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-drive-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n              <label class="event__type-label  event__type-label--drive" for="event-type-drive-${p}">Drive</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-flight-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n              <label class="event__type-label  event__type-label--flight" for="event-type-flight-${p}">Flight</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-check-in-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-${p}">Check-in</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-sightseeing-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-${p}">Sightseeing</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-restaurant-${p}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-${p}">Restaurant</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-${p}">\n          ${l}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-${p}" type="text" name="event-destination" value="${u}" list="destination-list-${p}">\n        <datalist id="destination-list-${p}">\n        ${s.map((e=>(({name:e})=>`<option value="${e}"></option>`)(e))).join("")}\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-${p}">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-${p}" type="text" name="event-start-time" value="${r(o,a.fullDateTime)}"\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-${p}">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-${p}" type="text" name="event-end-time" value="${r(c,a.fullDateTime)}">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-${p}">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-${p}" type="text" name="event-price" value="${d}">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n    <section class="event__details">\n        ${(({offers:e}={},t)=>void 0===e?"":`\n    <section class="event__section  event__section--offers">\n     <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n      ${e.map((e=>((e,t)=>{const{id:n,title:i,price:s}=e;return`\n  <div class="event__offer-selector">\n   <input class="event__offer-checkbox  visually-hidden" id="${n}" type="checkbox" name="${n}"${t.map((e=>e.id)).includes(n)?" checked":""}>\n     <label class="event__offer-label" for="${n}">\n       <span class="event__offer-title">${i}</span>\n        &plus;&euro;&nbsp;\n       <span class="event__offer-price">${s}</span>\n     </label>\n  </div>\n  `})(e,t))).join("")||""}\n      </div>\n    </section>`)(t,n)}\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${v}</p>\n        ${(e=>e.length<=0?"":`\n  <div class="event__photos-container">\n    <div class="event__photos-tape">\n       ${e.map((e=>(({src:e,description:t})=>`<img class="event__photo" src="${e}" alt="${t}"></img>`)(e))).join("")}\n    </div>\n  </div>`)(f)}\n      </section>\n    </section>\n  </form>\n`})(this.point,this.offers,this.checkedOffers,this.destination,this.destinationAll)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{getTemplate(){return'\n   <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n     <div class="trip-sort__item  trip-sort__item--day">\n       <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n       <label class="trip-sort__btn" for="sort-day">Day</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--event">\n       <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n       <label class="trip-sort__btn" for="sort-event">Event</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--time">\n       <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n       <label class="trip-sort__btn" for="sort-time">Time</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--price">\n       <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n       <label class="trip-sort__btn" for="sort-price">Price</label>\n     </div>\n     <div class="trip-sort__item  trip-sort__item--offer">\n       <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n       <label class="trip-sort__btn" for="sort-offer">Offers</label>\n     </div>\n   </form>\n'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{constructor({point:e,offers:t,destination:n}){this.point=e,this.offers=t,this.destination=n}getTemplate(){return((e,t,n)=>{const{type:i,dateFrom:s,dateTo:l,isFavorite:o,basePrice:c}=e,{name:d}=n;return`\n  <li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${s}">${r(s,a.MONTH_DAY)}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${i} as ${d}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${s}">${r(s,a.HOURS)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${l}">${r(l,a.HOURS)}</time>\n        </p>\n        <p class="event__duration">30M</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${c}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${t.map((e=>(({title:e,price:t})=>`\n  <li class="event__offer">\n    <span class="event__offer-title">${e}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${t}</span>\n  </li>\n  `)(e))).join("")}\n      </ul>\n      <button class="event__favorite-btn ${o&&"event__favorite-btn--active"}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>\n`})(this.point,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{getTemplate(){return'\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>\n'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const u=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:1100,dateFrom:"2024-08-20T22:55:56.845Z",dateTo:"2024-08-21T11:22:13.375Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e01",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa01","f7d8c9e0-1112-1314-1516-920314253647"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808v",basePrice:1200,dateFrom:"2024-09-10T10:55:56.845Z",dateTo:"2024-09-11T12:22:13.375Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e02",isFavorite:!1,offers:["c3e4e6-9053-42ce-b747-e281314baa32","be4c3e4e6-9053-42ce-b747-e281314baa3"],type:"Ship"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808b",basePrice:1300,dateFrom:"2019-07-10T11:55:56.845Z",dateTo:"2019-07-11T16:22:13.375Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e03",isFavorite:!1,offers:[],type:"Check-in"}];function v(){return(e=u)[Math.floor(Math.random()*e.length)];var e}const f=[{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e01",description:"",name:"Chamonix",pictures:[{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Chamonix parliament building"},{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Chamonix "}]},{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e02",description:"\tLuxembourg, is a beautiful city, a true asian pearl, with crowded streets.",name:"Luxembourg",pictures:[{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Luxembourg "},{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Luxembourg parliament "},{src:`img/photos/${Math.floor(4*Math.random())+1}.jpg`,description:"Luxembourg parliament building"}]},{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e03",description:"Ottawa, is a beautiful city, a true asian pearl, with crowded streets.",name:"Ottawa",pictures:[]}],h=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa01",title:"Upgrade to a business class",price:120},{id:"f7d8c9e0-1112-1314-1516-920314253647",title:"Travel guide",price:10},{id:"b4c3e4e6-9053-42ce-b747-e281314baa02",title:"Help carry the luggage",price:200}]},{type:"Ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa03",title:"Upgrade to a business class",price:120},{id:"be4c3e4e6-9053-42ce-b747-e281314baa3",title:"Add Wi-Fi",price:5},{id:"c3e4e6-9053-42ce-b747-e281314baa32",title:"Choose seats",price:10},{id:"b4c3e4e6-9053-42ce-b747-e281314baa05",title:"Upgrade to a comfort class",price:100}]},{type:"Bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:120}]}],_=document.querySelector(".trip-events"),m=document.querySelector(".trip-main"),y=new class{points=Array.from({length:4},v);destinations=f;offers=h;getPoints(){return this.points}getDestination(){return this.destinations}getDestinationId(e){return this.getDestination().find((t=>t.id===e))}getOffers(){return this.offers}getOfferByType(e){return this.getOffers().find((t=>t.type===e))}getOffersByTypeAndIds(e,t){const n=this.getOfferByType(e);return n?.offers.filter((e=>t.includes(e.id)))||[]}},b=new class{listOfTrips=new c;constructor({container:e,pointsModel:t}){this.boardContainer=e,this.pointsModel=t}init(){this.tripPoints=[...this.pointsModel.getPoints()],t(new o,this.boardContainer),t(this.listOfTrips,this.boardContainer),t(new l({point:this.tripPoints[0],checkedOffers:[...this.pointsModel.getOffersByTypeAndIds(this.tripPoints[0].type,this.tripPoints[0].offers)],offers:this.pointsModel.getOfferByType(this.tripPoints[0].type),allDestinations:this.pointsModel.getDestination(this.tripPoints[0].destination),destination:this.pointsModel.getDestinationId(this.tripPoints[0].destination)}),this.listOfTrips.getElement());for(let e=1;e<this.tripPoints.length;e++)t(new d({point:this.tripPoints[e],offers:[...this.pointsModel.getOffersByTypeAndIds(this.tripPoints[e].type,this.tripPoints[e].offers)],destination:this.pointsModel.getDestinationId(this.tripPoints[e].destination)}),this.listOfTrips.getElement())}}({container:_,pointsModel:y});new class{constructor({container:e}){this.headerContainer=e}init(){t(new p,this.headerContainer)}}({container:m}).init(),b.init()})()})();
//# sourceMappingURL=bundle.f6f18a6a7782a8f6fd42.js.map