import{a as g,c as h,_ as I,d as C}from"./floating-ui.react-BgNs4SA8.js";import{P as e}from"./index-Dk74W0Oi.js";import{r as k,R as l}from"./index-BwDkhjyp.js";import{I as q}from"./TableToolbar-DziYVX_8.js";import{R as L}from"./RadioButton-Dk88TpeT.js";const T=n=>{let{ariaLabel:o,["aria-label"]:r,checked:c,id:d,name:t,onSelect:m,onChange:b,disabled:p,radio:a,className:s}=n;const i=g(),u=k.useId(),f={id:d,name:t||u,onClick:m,onChange:b,checked:c,disabled:p},R=a?L:q,x=h(`${i}--table-column-checkbox`,{...s&&{[s]:!0},[`${i}--table-column-radio`]:a});return l.createElement("td",{className:x,"aria-live":"off"},l.createElement(R,I({},f,a&&{labelText:r||o,hideLabel:!0},!a&&{"aria-label":r||o})))};T.propTypes={"aria-label":e.string,ariaLabel:C(e.string),checked:e.bool.isRequired,className:e.string,disabled:e.bool,id:e.string.isRequired,name:e.string.isRequired,onChange:e.func,onSelect:e.func.isRequired,radio:e.bool};export{T};