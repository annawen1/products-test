import{R as l}from"./index-BwDkhjyp.js";import{a as f}from"./floating-ui.react-BgNs4SA8.js";import{T as d}from"./Text-DpcC0Z3Y.js";import{W as p,a as v}from"./bucket-18-D_XNNF5i.js";function $(t){let{id:a,readOnly:e,disabled:o,invalid:r,invalidText:s,warn:m,warnText:c}=t;const n=f(),i={disabled:!e&&o,invalid:!e&&r,invalidId:`${a}-error-msg`,warn:!e&&!r&&m,warnId:`${a}-warn-msg`,validation:null,icon:null,helperId:`${a}-helper-text`};return i.invalid?(i.icon=p,i.validation=l.createElement(d,{as:"div",className:`${n}--form-requirement`,id:i.invalidId},s)):i.warn&&(i.icon=v,i.validation=l.createElement(d,{as:"div",className:`${n}--form-requirement`,id:i.warnId},c)),i}export{$ as u};