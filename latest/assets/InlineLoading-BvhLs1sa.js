import{a as f,c as v,_ as N,d as $}from"./floating-ui.react-BgNs4SA8.js";import{R as e}from"./index-BwDkhjyp.js";import{P as a}from"./index-Dk74W0Oi.js";import{E as x}from"./bucket-6-CS7rNrxx.js";import{a as h}from"./events-Dp3Lalez.js";function E(d){let{active:l=!0,className:t,withOverlay:r=!0,small:n=!1,description:o="loading",...g}=d;const i=f(),s=v(t,{[`${i}--loading`]:!0,[`${i}--loading--small`]:n,[`${i}--loading--stop`]:!l}),u=v({[`${i}--loading-overlay`]:!0,[`${i}--loading-overlay--stop`]:!l}),c=e.createElement("div",N({},g,{"aria-atomic":"true","aria-live":l?"assertive":"off",className:s}),e.createElement("svg",{className:`${i}--loading__svg`,viewBox:"0 0 100 100"},e.createElement("title",null,o),n?e.createElement("circle",{className:`${i}--loading__background`,cx:"50%",cy:"50%",r:"42"}):null,e.createElement("circle",{className:`${i}--loading__stroke`,cx:"50%",cy:"50%",r:n?"42":"44"})));return r?e.createElement("div",{className:u},c):c}E.propTypes={active:a.bool,className:a.string,description:a.string,id:$(a.string),small:a.bool,withOverlay:a.bool};const b=d=>{let{className:l,status:t="active",iconDescription:r,description:n,onSuccess:o,successDelay:g=1500,...i}=d;const s=f(),u=v(`${s}--inline-loading`,l),c=()=>{let m=r||t;if(t==="error")return e.createElement(x,{className:`${s}--inline-loading--error`},e.createElement("title",null,m));if(t==="finished")return setTimeout(()=>{o&&o()},g),e.createElement(h,{className:`${s}--inline-loading__checkmark-container`},e.createElement("title",null,m));if(t==="inactive"||t==="active")return r||(m=t==="active"?"loading":"not loading"),e.createElement(E,{small:!0,description:m,withOverlay:!1,active:t==="active"})},_=e.createElement("div",{className:`${s}--inline-loading__text`},n),p=c(),y=p&&e.createElement("div",{className:`${s}--inline-loading__animation`},p);return e.createElement("div",N({className:u},i,{"aria-live":"assertive"}),y,n&&_)};b.propTypes={className:a.string,description:a.node,iconDescription:a.string,onSuccess:a.func,status:a.oneOf(["inactive","active","finished","error"]),successDelay:a.number};export{b as I,E as L};
