import"./index-BwDkhjyp.js";function e(r){if(!r||!r.childNodes)return null;if(f(r))return r;for(const t of r.childNodes){const i=e(t);if(i)return i}return null}function c(r){var t;if(!r||!r.childNodes)return null;if((t=r==null?void 0:r.getAttribute)!=null&&t.call(r,"role")&&r.getAttribute("role")!=="")return r;for(const i of r.childNodes){const u=c(i);if(u)return u}return null}function f(r){if(r.tabIndex===void 0||r.tabIndex<0||r.disabled)return!1;switch(r.nodeName){case"A":return!!r.href&&r.rel!=="ignore";case"INPUT":return r.type!=="hidden";default:return!0}}export{c as a,e as g};
