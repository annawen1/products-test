import{g as M}from"./_commonjsHelpers-BosuxZz1.js";import{_ as S,i as j}from"./index-C0xX6qoh.js";import{t as y}from"./toNumber-DVQITUtX.js";var F=S,N=function(){return F.Date.now()},O=N,R=j,x=O,p=y,A="Expected a function",D=Math.max,$=Math.min;function U(h,n,a){var o,c,v,u,i,r,m=0,b=!1,f=!1,d=!0;if(typeof h!="function")throw new TypeError(A);n=p(n)||0,R(a)&&(b=!!a.leading,f="maxWait"in a,v=f?D(p(a.maxWait)||0,n):v,d="trailing"in a?!!a.trailing:d);function g(e){var t=o,s=c;return o=c=void 0,m=e,u=h.apply(s,t),u}function I(e){return m=e,i=setTimeout(l,n),b?g(e):u}function C(e){var t=e-r,s=e-m,k=n-t;return f?$(k,v-s):k}function E(e){var t=e-r,s=e-m;return r===void 0||t>=n||t<0||f&&s>=v}function l(){var e=x();if(E(e))return _(e);i=setTimeout(l,C(e))}function _(e){return i=void 0,d&&o?g(e):(o=c=void 0,u)}function W(){i!==void 0&&clearTimeout(i),m=0,o=r=c=i=void 0}function L(){return i===void 0?u:_(x())}function T(){var e=x(),t=E(e);if(o=arguments,c=this,r=e,t){if(i===void 0)return I(r);if(f)return clearTimeout(i),i=setTimeout(l,n),g(r)}return i===void 0&&(i=setTimeout(l,n)),u}return T.cancel=W,T.flush=L,T}var X=U;const G=M(X);export{X as a,G as d};
