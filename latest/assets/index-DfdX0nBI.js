import{a as g,c as u,_ as f}from"./floating-ui.react-BgNs4SA8.js";import{P as t}from"./index-Dk74W0Oi.js";import{R as r,r as d}from"./index-BwDkhjyp.js";import{L as T}from"./LayerContext-DbU-6VX4.js";const i=r.createContext({theme:"white"}),x=r.forwardRef(function(s,a){let{children:e,theme:n}=s;const o=d.useMemo(()=>({theme:n}),[n]),m=r.cloneElement(e,{ref:a});return r.createElement(i.Provider,{value:o},m)});x.propTypes={children:t.node,theme:t.oneOf(["white","g10","g90","g100"])};function y(c){let{as:s="div",className:a,theme:e,...n}=c;const o=g(),m=u(a,{[`${o}--white`]:e==="white",[`${o}--g10`]:e==="g10",[`${o}--g90`]:e==="g90",[`${o}--g100`]:e==="g100",[`${o}--layer-one`]:!0}),l=r.useMemo(()=>{const h=e&&["g90","g100"].includes(e);return{theme:e,isDark:h}},[e]),p=s;return r.createElement(i.Provider,{value:l},r.createElement(T.Provider,{value:1},r.createElement(p,f({},n,{className:m}))))}y.propTypes={as:t.oneOfType([t.func,t.string,t.elementType]),children:t.node,className:t.string,theme:t.oneOf(["white","g10","g90","g100"])};export{y as T};