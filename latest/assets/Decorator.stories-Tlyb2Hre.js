import{j as e,p as h}from"./settings-DDDiKwEV.js";import{useMDXComponents as u}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-C743MKLZ.js";import{e as f,i as g,C as x}from"./index-BjLKg1ze.js";import{R as b}from"./index-BwDkhjyp.js";import{P as n}from"./index-Dk74W0Oi.js";import{g as v}from"./devtools-C7Iu0rt6.js";import{p as y}from"./props-helper-D2PZmIqz.js";import{D as j}from"./DecoratorBase-8JSv9rpZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./floating-ui.react-BgNs4SA8.js";import"./index-BONylQH5.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./iframe-D42bzfto.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./bucket-5-BlAGcMmC.js";import"./bucket-15-DqJqYgDY.js";const l="Decorator";let o=b.forwardRef((r,t)=>{const s=y(r,["disabled","kind","onClick","onClickLabel","onClickValue","onContextMenu","onContextMenuLabel","onContextMenuValue"]);return e.jsx(j,{ref:t,...s,kind:"default",...v(l)})});o=h.checkComponentEnabled(o,l);o.displayName=l;o.propTypes={className:n.string,hideIcon:n.bool,label:n.string,score:n.number,scoreThresholds:n.arrayOf(n.number),setLabelTitle:n.func,small:n.bool,theme:n.oneOf(["light","dark"]),truncateValue:n.oneOfType([n.oneOf(["end","start"]),n.shape({maxLength:n.number,front:n.number,back:n.number})]),value:n.string.isRequired,valueTitle:n.string};o.__docgenInfo={description:"The Decorator groups a key/value pair as a single element. This component is not interactive.",methods:[],displayName:"Decorator",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},hideIcon:{description:"Do not show the icon, regardless of score.",type:{name:"bool"},required:!1},label:{description:"The label for the data.",type:{name:"string"},required:!1},score:{description:"Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon.\n\nIf you don't want to show the icon at all, set `hideIcon={true}`.",type:{name:"number"},required:!1},scoreThresholds:{description:'Used in conjunction with `score`, determines the color, shape, and type of magnitude of the icon.\n\nAn array of 4 numbers determines the range of thresholds.\n\nExample using `[0, 4, 7, 10]`:\n<br/>- `<= 0` "Benign"\n<br/>- `1-3` "Low"\n<br/>- `4-6` "Medium"\n<br/>- `7-9` "High"\n<br/>- `>= 10` "Critical"\n<br/>- `NaN` "Unknown"',type:{name:"arrayOf",value:{name:"number"}},required:!1},setLabelTitle:{description:'Optional callback function for building a more detailed descriptive text.\nReturns `score`, `scoreThresholds`, `magnitude`.\n\nTypical description is in the form of\n\'"(magnitude)" magnitude: score (score) out of (last element of scoreThresholds array)\'.\n\nE.g. `"Medium" magnitude: score 5 out of 10`.\n\nIf not defined, the title will default to the `label` prop.',type:{name:"func"},required:!1},small:{description:"Styled smaller to better fit inline with text.",type:{name:"bool"},required:!1},theme:{description:`Override the default theme of the component.
Useful if you want "invert" the component's theme.`,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},truncateValue:{description:"If not defined, it will behave as `display:inline-block`.",type:{name:"union",value:[{name:"enum",value:[{value:"'end'",computed:!1},{value:"'start'",computed:!1}]},{name:"shape",value:{maxLength:{name:"number",required:!1},front:{name:"number",required:!1},back:{name:"number",required:!1}}}]},required:!1},value:{description:"The value of the data.",type:{name:"string"},required:!0},valueTitle:{description:"Overrides the default title for the Decorator's value.",type:{name:"string"},required:!1}}};function c(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...u(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"decorator",children:"Decorator"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-setlabeltitle",children:"Example setLabelTitle()"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:`The Decorator groups a key/value pair as a single element. This component is not
interactive.`}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(f,{children:e.jsx(g,{of:a})}),`
`,e.jsxs(t.h2,{id:"example-setlabeltitle",children:["Example ",e.jsx(t.strong,{children:"setLabelTitle()"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<Decorator label="IP" score={5} value="192.168.0.50" />
`})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function T(r={}){const{wrapper:t}={...u(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(c,{...r})}):c(r)}const k="",i={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},J={title:"Experimental/Components/Decorators/Decorator",component:o,tags:["autodocs"],parameters:{styles:k,docs:{page:T}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(i)},mapping:Object.values(i),options:Object.values(i).map((r,t)=>t)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0}},w=r=>r.truncateValue?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"0 0 1rem"},children:"With limited width."}),e.jsx("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"},children:e.jsx(o,{...r,value:"Very long value to show truncation"})})]}):e.jsx(o,{...r}),a=w.bind({});a.storyName="Decorator";a.args={hideIcon:!1,label:"IP",score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(r,t,s)=>typeof r!="number"?"Unknown score":`"${s}" magnitude. Score ${r} out of ${t[t.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:""};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  if (args.truncateValue) {
    return <>
        <div style={{
        padding: '0 0 1rem'
      }}>With limited width.</div>
        <div style={{
        maxWidth: '16rem',
        padding: '3px',
        outline: '2px dashed #999'
      }}>
          <Decorator {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <Decorator {...args} />;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const K=["Default"];export{a as Default,K as __namedExportsOrder,J as default};