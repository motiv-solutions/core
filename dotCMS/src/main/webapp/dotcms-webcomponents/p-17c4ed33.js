const e="dotcms-webcomponents";let t,n,l,o=0,s=!1,r=!1,c=!1,i=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},m={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},d=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),p=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),w=new WeakMap,b=e=>w.get(e),h=(e,t)=>w.set(t.o=e,t),y=(e,t)=>t in e,_=e=>console.error(e),v=new Map,g=new Map,j=[],k=[],R=[],S=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&m.t?C(L):m.raf(L))},M=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){_(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},L=()=>{o++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){_(t)}e.length=0})(j);const e=2==(6&m.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;M(k,e),M(R,e),k.length>0&&(R.push(...k),k.length=0),(s=j.length+k.length+R.length>0)?m.raf(L):o=0},C=e=>p().then(e),O=S(k,!0),U={},P=e=>"object"==(e=typeof e)||"function"===e,T=()=>f&&f.supports&&f.supports("color","var(--c)")?p():__sc_import_dotcms_webcomponents("./p-1826e5f0.js").then(()=>(m.s=a.__cssshim)?(!1).i():0),x=()=>{m.s=a.__cssshim;const t=Array.from(u.querySelectorAll("script")).find(t=>new RegExp(`/${e}(\\.esm)?\\.js($|\\?|#)`).test(t.src)||t.getAttribute("data-stencil-namespace")===e),n={};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(n.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,a.location.href)).href,E(n.resourcesUrl,t),a.customElements?p(n):__sc_import_dotcms_webcomponents("./p-3b66a627.js").then(()=>n))},E=(t,n)=>{const l=`__sc_import_${e.replace(/\s|-/g,"_")}`;try{a[l]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const e=new Map;a[l]=o=>{const s=new URL(o,t).href;let r=e.get(s);if(!r){const t=u.createElement("script");t.type="module",t.crossOrigin=n.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${l}.m = m;`],{type:"application/javascript"})),r=new Promise(e=>{t.onload=()=>{e(a[l].m),t.remove()}}),e.set(s,r),u.head.appendChild(t)}return r}}},A=new WeakMap,F=e=>"sc-"+e,W=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,c=!1,i=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!P(l))&&(l=String(l)),r&&c?i[i.length-1].u+=l:i.push(r?H(null,l):l),c=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const f=H(e,null);return f.p=t,i.length>0&&(f.$=i),f.h=o,f._=s,f},H=(e,t)=>({t:0,v:e,u:t,g:null,$:null,p:null,h:null,_:null}),N={},q=(e,t,n,l,o,s)=>{if(n!==l){let c=y(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=D(n),s=D(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if(c||"o"!==t[0]||"n"!==t[1]){const i=P(l);if((c||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(r){}null==l||!1===l?e.removeAttribute(t):(!c||4&s||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):y(a,i)?i.slice(2):i[2]+t.slice(3),n&&m.rel(e,t,n,!1),l&&m.ael(e,t,l,!1)}},B=/\s/,D=e=>e?e.split(B):[],V=(e,t,n,l)=>{const o=11===t.g.nodeType&&t.g.host?t.g.host:t.g,s=e&&e.p||U,r=t.p||U;for(l in s)l in r||q(o,l,s[l],void 0,n,t.t);for(l in r)q(o,l,s[l],r[l],n,t.t)},z=(e,o,s,c)=>{let a,f,m,d=o.$[s],p=0;if(r||(i=!0,"slot"===d.v&&(t&&c.classList.add(t+"-s"),d.t|=d.$?2:1)),null!==d.u)a=d.g=u.createTextNode(d.u);else if(1&d.t)a=d.g=u.createTextNode("");else if(a=d.g=u.createElement(2&d.t?"slot-fb":d.v),V(null,d,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),d.$)for(p=0;p<d.$.length;++p)f=z(e,d,p,a),f&&a.appendChild(f);return a["s-hn"]=l,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=d._||"",m=e&&e.$&&e.$[s],m&&m.v===d.v&&e.g&&G(e.g,!1)),a},G=(e,t)=>{m.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(X(e).insertBefore(e,Q(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&G(e,t)}m.t&=-2},I=(e,t,n,o,s,r)=>{let c,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=z(null,n,s,e),c&&(o[s].g=c,i.insertBefore(c,Q(t))))},J=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(c=!0,(o=l.g)["s-ol"]?o["s-ol"].remove():G(o,!0),o.remove())},K=(e,t)=>e.v===t.v&&("slot"===e.v?e._===t._:e.h===t.h),Q=e=>e&&e["s-ol"]||e,X=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Y=(e,t)=>{const n=t.g=e.g,l=e.$,o=t.$,s=t.u;let r;null===s?("slot"===t.v||V(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,c=0,i=0,a=0,f=t.length-1,u=t[0],m=t[f],d=l.length-1,p=l[0],$=l[d];for(;r<=f&&c<=d;)if(null==u)u=t[++r];else if(null==m)m=t[--f];else if(null==p)p=l[++c];else if(null==$)$=l[--d];else if(K(u,p))Y(u,p),u=t[++r],p=l[++c];else if(K(m,$))Y(m,$),m=t[--f],$=l[--d];else if(K(u,$))"slot"!==u.v&&"slot"!==$.v||G(u.g.parentNode,!1),Y(u,$),e.insertBefore(u.g,m.g.nextSibling),u=t[++r],$=l[--d];else if(K(m,p))"slot"!==u.v&&"slot"!==$.v||G(m.g.parentNode,!1),Y(m,p),e.insertBefore(m.g,u.g),m=t[--f],p=l[++c];else{for(i=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].h&&t[a].h===p.h){i=a;break}i>=0?(s=t[i],s.v!==p.v?o=z(t&&t[c],n,i,e):(Y(s,p),t[i]=void 0,o=s.g),p=l[++c]):(o=z(t&&t[c],n,c,e),p=l[++c]),o&&X(u.g).insertBefore(o,Q(u.g))}r>f?I(e,null==l[d+1]?null:l[d+1].g,n,l,c,d):c>d&&J(t,r,f)})(n,l,t,o):null!==o?(null!==e.u&&(n.textContent=""),I(n,null,t,o,0,o.length-1)):null!==l&&J(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:e.u!==s&&(n.data=s)},Z=e=>{let t,n,l,o,s,r,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==t["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){t.hidden=!0;break}Z(t)}},ee=[],te=e=>{let t,n,l,o,s,r,i=0,a=e.childNodes,f=a.length;for(;i<f;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(ne(n,o)?(s=ee.find(e=>e.j===n),c=!0,n["s-sn"]=n["s-sn"]||o,s?s.k=t:ee.push({k:t,j:n}),n["s-sr"]&&ee.forEach(e=>{ne(e.j,n["s-sn"])&&(s=ee.find(e=>e.j===n),s&&(e.k=s.k))})):ee.some(e=>e.j===n)||ee.push({j:n}));1===t.nodeType&&te(t)}},ne=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,le=(e,t)=>{t&&!e.R&&t["s-p"].push(new Promise(t=>e.R=t))},oe=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const o=t.o,s=()=>se(e,t,n,o,l);let r;return le(t,t.S),l&&(t.t|=256,t.M&&(t.M.forEach(([e,t])=>ae(o,e,t)),t.M=null),r=ae(o,"componentWillLoad")),fe(r,()=>O(s))},se=(e,o,s,a,f)=>{const p=e["s-rc"];f&&((e,t)=>{const n=((e,t)=>{let n=F(t.L),l=g.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=A.get(e=e.head||e);o||A.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(d&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(e,s),((e,o,s,a)=>{l=e.tagName;const f=o.C||H(null,null),p=($=a)&&$.v===N?a:W(null,null,a);var $;if(s.O&&(p.p=p.p||{},s.O.forEach(([t,n])=>p.p[n]=e[t])),p.v=null,p.t|=4,o.C=p,p.g=f.g=e.shadowRoot||e,t=e["s-sc"],n=e["s-cr"],r=d&&0!=(1&s.t),c=!1,Y(f,p),i){let e,t,n,l,o,s;te(p.g);let r=0;for(;r<ee.length;r++)e=ee[r],t=e.j,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(m.t|=1,r=0;r<ee.length;r++)if(e=ee[r],t=e.j,e.k){for(l=e.k.parentNode,o=e.k.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0);m.t&=-2}c&&Z(p.g),ee.length=0})(e,o,s,re(a)),o.t&=-17,o.t|=2,p&&(p.forEach(e=>e()),e["s-rc"]=void 0);{const t=e["s-p"],n=()=>ce(e,o,s);0===t.length?n():(Promise.all(t).then(n),o.t|=4,t.length=0)}},re=e=>{try{e=e.render()}catch(t){_(t)}return e},ce=(e,t,n)=>{const l=t.o,o=t.S;64&t.t||(t.t|=64,ue(e),ae(l,"componentDidLoad"),t.U(e),o||ie()),t.P(e),t.R&&(t.R(),t.R=void 0),512&t.t&&C(()=>oe(e,t,n,!1)),t.t&=-517},ie=()=>{ue(u.documentElement),m.t|=2},ae=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){_(l)}},fe=(e,t)=>e&&e.then?e.then(t):t(),ue=e=>e.classList.add("hydrated"),me=(e,t,n)=>{if(t.T){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.T),o=e.prototype;if(l.forEach(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return t=e,b(this).F.get(t);var t},set(n){((e,t,n,l)=>{const o=b(this),s=o.W,r=o.F.get(t),c=o.t,i=o.o;var a,f;if(f=l.T[t][0],!((n=null==(a=n)||P(a)?a:4&f?"false"!==a&&(""===a||!!a):2&f?parseFloat(a):1&f?String(a):a)===r||8&c&&void 0!==r)&&(o.F.set(t,n),i)){if(l.A&&128&c){const e=l.A[t];e&&e.forEach(e=>{try{i[e](n,r,t)}catch(l){_(l)}})}2==(18&c)&&oe(s,o,l,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=b(this);return n.H.then(()=>n.o[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){m.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.O.push([e,o]),o})}}return e},de=e=>{ae(e,"connectedCallback")},pe=e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},$e=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=u.head,r=s.querySelector("meta[charset]"),c=u.createElement("style"),i=[];let f,p=!0;Object.assign(m,t),m.l=new URL(t.resourcesUrl||"./",u.baseURI).href,t.syncQueue&&(m.t|=4),e.forEach(e=>e[1].forEach(t=>{const s={t:t[0],L:t[1],T:t[2],N:t[3]};s.T=t[2],s.N=t[3],s.O=[],s.A={},!d&&1&s.t&&(s.t|=8);const r=s.L,c=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,W:e,F:new Map};t.H=new Promise(e=>t.P=e),t.q=new Promise(e=>t.U=e),e["s-p"]=[],e["s-rc"]=[],w.set(e,t)})(e=this),1&s.t&&(d?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),p?i.push(this):m.jmp(()=>((e,t)=>{if(0==(1&m.t)){const n=()=>{},l=b(e);if(t.N&&(l.B=((e,t,n)=>{t.M=t.M||[];const l=n.map(([n,l,o])=>{const s=e,r=((e,t)=>n=>{256&e.t?e.o[t](n):e.M.push([t,n])})(t,o),c=(e=>0!=(2&e))(n);return m.ael(s,l,r,c),()=>m.rel(s,l,r,c)});return()=>l.forEach(e=>e())})(e,l,t.N)),!(1&l.t)){l.t|=1,(4&t.t||8&t.t)&&pe(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){le(l,l.S=t);break}}t.T&&Object.entries(t.T).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),C(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=(e=>{const t=e.L.replace(/-/g,"_"),n=e.D,l=v.get(n);return l?l[t]:__sc_import_dotcms_webcomponents(`./${n}.entry.js`).then(e=>(v.set(n,e),e[t]),_)})(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.A=o.watchers,me(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){_(c)}t.t&=-9,t.t|=128,e(),de(t.o)}const e=F(n.L);if(!g.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_dotcms_webcomponents("./p-93e23355.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=g.get(e);$&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,g.set(e,l)})(e,l,!!(1&n.t)),t()}}const s=t.S,r=()=>oe(e,t,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(e,l,t))}de(l.o),n()}})(this,s))}disconnectedCallback(){m.jmp(()=>(()=>{if(0==(1&m.t)){const e=b(this),t=e.o;e.B&&(e.B(),e.B=void 0),ae(t,"disconnectedCallback")}})())}forceUpdate(){((e,t)=>{{const n=b(e);n.W.isConnected&&2==(18&n.t)&&oe(e,n,t,!1)}})(this,s)}componentOnReady(){return b(this).q}};s.D=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,me(c,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),p=!1,i.length>0?i.forEach(e=>e.connectedCallback()):m.jmp(()=>f=setTimeout(ie,30))},we=(e,t,n)=>{const l=be(e);return{emit:e=>{const o=new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});return l.dispatchEvent(o),o}}},be=e=>b(e).W;export{N as H,T as a,$e as b,we as c,be as g,W as h,x as p,h as r};