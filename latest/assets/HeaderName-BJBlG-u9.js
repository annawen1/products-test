import{a as o,c as i,_ as l}from"./floating-ui.react-BgNs4SA8.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as s}from"./index-BwDkhjyp.js";import{A as d,L as f,a as N}from"./Link-B4SJt6RK.js";const x=t=>{let{className:n,children:m,...a}=t;const c=o(),r=i(`${c}--header`,n);return s.createElement("header",l({},a,{className:r}),m)};x.propTypes={...d,className:e.string};function h(t){let{children:n,className:m,prefix:a="IBM",...c}=t;const r=o(),p=i(`${r}--header__name`,m);return s.createElement(f,l({},c,{className:p}),a&&s.createElement(s.Fragment,null,s.createElement("span",{className:`${r}--header__name--prefix`},a)," "),n)}h.propTypes={...N,children:e.node.isRequired,className:e.string,href:e.string,prefix:e.string};export{x as H,h as a};