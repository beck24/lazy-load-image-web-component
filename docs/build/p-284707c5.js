let t,e,n=0,l=!1;const o=window,s=document,r={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},c=(()=>!!s.documentElement.attachShadow)(),a=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),i=new WeakMap,u=t=>i.get(t),f=(t,e)=>i.set(e.o=t,e),m=(t,e)=>e in t,p=t=>console.error(t),d=new Map,y=new Map,$=[],w=[],h=[],_=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&r.t?j(g):r.raf(g))},b=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){p(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},g=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){p(e)}t.length=0})($);const t=2==(6&r.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;b(w,t),b(h,t),w.length>0&&(h.push(...w),w.length=0),(l=$.length+w.length+h.length>0)?r.raf(g):n=0},j=t=>Promise.resolve().then(t),v=_(w,!0),S={},M=t=>"object"==(t=typeof t)||"function"===t,R=()=>o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_lazy_image("./p-d8631f0b.js").then(()=>{r.s=o.__stencil_cssshim}),U=async()=>{r.s=o.__stencil_cssshim;const t=new RegExp("/lazy-image(\\.esm)?\\.js($|\\?|#)"),e=Array.from(s.querySelectorAll("script")).find(e=>t.test(e.src)||"lazy-image"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,o.location.href));return z(t.href),window.customElements||await __sc_import_lazy_image("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},z=t=>{const e=(()=>`__sc_import_${"lazy-image".replace(/\s|-/g,"_")}`)();try{o[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;o[e]=n=>{const r=new URL(n,t).href;let c=l.get(r);if(!c){const t=s.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${e}.m = m;`],{type:"application/javascript"})),c=new Promise(n=>{t.onload=()=>{n(o[e].m),t.remove()}}),l.set(r,c),s.head.appendChild(t)}return c}}},L=new WeakMap,O=t=>"sc-"+t,k=(t,e,...n)=>{let l=null,o=!1,s=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!M(l))&&(l=String(l)),o&&s?r[r.length-1].i+=l:r.push(o?P(null,l):l),s=o)};c(n);const a=P(t,null);return a.u=e,r.length>0&&(a.p=r),a},P=(t,e)=>({t:0,$:t,i:e,h:null,p:null,u:null}),C={},x=(t,e,n,l,s,c)=>{if(n===l)return;let a=m(t,e),i=e.toLowerCase();if(a||"o"!==e[0]||"n"!==e[1]){const o=M(l);if((a||o&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?a=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(u){}null==l||!1===l?t.removeAttribute(e):(!a||4&c||s)&&!o&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):m(o,i)?i.slice(2):i[2]+e.slice(3),n&&r.rel(t,e,n,!1),l&&r.ael(t,e,l,!1)},E=(t,e,n,l)=>{const o=11===e.h.nodeType&&e.h.host?e.h.host:e.h,s=t&&t.u||S,r=e.u||S;for(l in s)l in r||x(o,l,s[l],void 0,n,e.t);for(l in r)x(o,l,s[l],r[l],n,e.t)},A=(e,n,l)=>{let o,r,c=n.p[l],a=0;if(o=c.h=s.createElement(c.$),E(null,c,!1),(t=>null!=t)(t)&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),c.p)for(a=0;a<c.p.length;++a)(r=A(e,c,a))&&o.appendChild(r);return o},T=(t,n,l,o,s,r)=>{let c,a=t;for(a.shadowRoot&&a.tagName===e&&(a=a.shadowRoot);s<=r;++s)o[s]&&(c=A(null,l,s))&&(o[s].h=c,a.insertBefore(c,n))},F=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.h.remove()},H=(t,e)=>t.$===e.$,W=(t,e)=>{const n=e.h=t.h,l=t.p,o=e.p;E(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,a=e[0],i=e[c],u=l.length-1,f=l[0],m=l[u];for(;s<=c&&r<=u;)null==a?a=e[++s]:null==i?i=e[--c]:null==f?f=l[++r]:null==m?m=l[--u]:H(a,f)?(W(a,f),a=e[++s],f=l[++r]):H(i,m)?(W(i,m),i=e[--c],m=l[--u]):H(a,m)?(W(a,m),t.insertBefore(a.h,i.h.nextSibling),a=e[++s],m=l[--u]):H(i,f)?(W(i,f),t.insertBefore(i.h,a.h),i=e[--c],f=l[++r]):(o=A(e&&e[r],n,r),f=l[++r],o&&a.h.parentNode.insertBefore(o,a.h));s>c?T(t,null==l[u+1]?null:l[u+1].h,n,l,r,u):r>u&&F(e,s,c)})(n,l,e,o):null!==o?T(n,null,e,o,0,o.length-1):null!==l&&F(l,0,l.length-1)},q=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},B=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>D(t,e,n,o,l);return q(e,e.g),I(void 0,()=>v(s))},D=(n,l,o,r,a)=>{const i=n["s-rc"];a&&((t,e)=>{const n=((t,e)=>{let n=O(e.j),l=y.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,o=L.get(t=t.head||t);o||L.set(t,o=new Set),o.has(n)||((e=s.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(c&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(n,o);try{((n,l,o,s)=>{e=n.tagName;const r=l.v||P(null,null),c=(t=>t&&t.$===C)(s)?s:k(null,null,s);c.$=null,c.t|=4,l.v=c,c.h=r.h=n.shadowRoot||n,t=n["s-sc"],W(r,c)})(n,l,0,r.render())}catch(u){p(u)}l.t&=-17,l.t|=2,i&&(i.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>N(n,l,o);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},N=(t,e,n)=>{const l=e.o,o=e.g;64&e.t||(e.t|=64,t.classList.add("hydrated"),G(l,"componentDidLoad"),e.S(t),o||V()),e._&&(e._(),e._=void 0),512&e.t&&j(()=>B(t,e,n,!1)),e.t&=-517},V=()=>{s.documentElement.classList.add("hydrated"),r.t|=2},G=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){p(l)}},I=(t,e)=>t&&t.then?t.then(e):e(),J=(t,e,n)=>{if(e.M){t.watchers&&(e.R=t.watchers);const l=Object.entries(e.M),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>u(t).U.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=u(this),s=o.L,r=o.U.get(e),c=o.t,a=o.o;if(!((n=((t,e)=>null==t||M(t)?t:1&e?String(t):t)(n,l.M[e][0]))===r||8&c&&void 0!==r)&&(o.U.set(e,n),a)){if(l.R&&128&c){const t=l.R[e];t&&t.forEach(t=>{try{a[t](n,r,e)}catch(l){p(l)}})}2==(18&c)&&B(s,o,l,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){r.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},K=(t,e={})=>{const n=[],l=e.exclude||[],f=s.head,m=o.customElements,$=f.querySelector("meta[charset]"),w=s.createElement("style"),h=[];let _,b=!0;Object.assign(r,e),r.l=new URL(e.resourcesUrl||"./",s.baseURI).href,e.syncQueue&&(r.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],j:e[1],M:e[2],O:e[3]};o.M=e[2],o.R={},!c&&1&o.t&&(o.t|=8);const s=o.j,f=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,L:t,U:new Map};e.k=new Promise(t=>e.S=t),t["s-p"]=[],t["s-rc"]=[],i.set(t,e)})(t=this),1&o.t&&(c?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){_&&(clearTimeout(_),_=null),b?h.push(this):r.jmp(()=>((t,e)=>{if(0==(1&r.t)){const n=()=>{},l=u(t);if(!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){q(l,l.g=e);break}}e.M&&Object.entries(e.M).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),j(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.j.replace(/-/g,"_"),n=t.P,l=d.get(n);return l?l[e]:__sc_import_lazy_image(`./${n}.entry.js`).then(t=>(d.set(n,t),t[e]),p)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.R=o.watchers,J(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){p(c)}e.t&=-9,e.t|=128,t()}const t=O(n.j);if(!y.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_lazy_image("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=y.get(t);a&&n?(l=l||new CSSStyleSheet).replace(e):l=e,y.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.g,r=()=>B(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){r.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=u(t);2==(18&n.t)&&B(t,n,e,!1)}})(this,o)}componentOnReady(){return u(this).k}};o.P=t[0],l.includes(s)||m.get(s)||(n.push(s),m.define(s,J(f,o,1)))})),w.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),f.insertBefore(w,$?$.nextSibling:f.firstChild),b=!1,h.length>0?h.forEach(t=>t.connectedCallback()):r.jmp(()=>_=setTimeout(V,30,"timeout"))},Q=(t,e,n)=>{const l=X(t);return{emit:t=>l.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},X=t=>u(t).L;export{C as H,R as a,K as b,Q as c,X as g,k as h,U as p,f as r};