import{p as L,j as a,B as h}from"./settings-DDDiKwEV.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as J}from"./StoryDocsPage-Bd6ra28w.js";import{R as K}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as Q}from"./floating-ui.react-BgNs4SA8.js";import{L as U}from"./Link-DHwEx_0L.js";import{g as X}from"./devtools-C7Iu0rt6.js";import{E as Y,d as b}from"./EmptyState-BiZ2jBGL.js";import{NoTagsIllustration as Z}from"./NoTagsIllustration-CrGA_is5.js";import{A as R}from"./bucket-0-Cw-xsoio.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./v4-CQkTLCs1.js";import"./index-BjLKg1ze.js";import"./iframe-D42bzfto.js";import"../sb-preview/runtime.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-BB2of0Wm.js";import"./tslib.es6-B4_xh3D5.js";import"./props-helper-D2PZmIqz.js";import"./EmptyStateV2-By0Ce8kG.js";import"./uuidv4-BQrI85uz.js";const u=`${L.prefix}--empty-state`,g="NoTagsEmptyState";let o=K.forwardRef(({action:t,className:_,illustrationPosition:V=b.position,illustrationTheme:$,illustrationDescription:M,link:W,size:f=b.size,subtitle:F,title:y,...G},H)=>a.jsxs("div",{...G,className:Q(u,_,`${u}-position--${V}`,`${u}-type--noTags`),ref:H,...X(g),children:[a.jsx(Z,{theme:$,size:f,alt:M||y}),a.jsx(Y,{action:t,link:W,size:f,subtitle:F,title:y=""})]}));o=L.checkComponentEnabled(o,g);o.displayName=g;o.propTypes={action:e.shape({...h.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:h.propTypes.onClick,text:e.string}),className:e.string,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...U.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};o.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"NoTagsEmptyState",props:{illustrationPosition:{defaultValue:{value:"'top'",computed:!1},description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},size:{defaultValue:{value:"sizes.lg",computed:!0},description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"},required:!1},illustrationTheme:{description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};const De={title:"IBM Products/Patterns/Empty state/NoTagsEmptyState",component:o,tags:["autodocs"],parameters:{docs:{page:()=>a.jsx(J,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/cdai-design/pal/patterns/empty-state/usage",label:"Error pattern usage guidelines"},{href:"https://www.carbondesignsystem.com/patterns/empty-states-pattern/",label:"Carbon empty pattern usage guidelines"}]})}}},r={title:"Empty state title",subtitle:"Description text explaining why this section is empty.",illustrationDescription:"Test alt text"},s=t=>a.jsx(o,{...t}),i=s.bind({});i.args={...r};const n=s.bind({});n.args={...r,illustrationTheme:"dark"};const p=s.bind({});p.args={...r,action:{text:"Create new",onClick:d("Clicked empty state action button")}};const m=s.bind({});m.args={...r,action:{text:"Create new",onClick:d("Clicked empty state action button"),renderIcon:t=>a.jsx(R,{size:20,...t}),iconDescription:"Add icon"}};const l=s.bind({});l.args={...r,link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};const c=s.bind({});c.args={...r,action:{text:"Create new",onClick:d("Clicked empty state action button"),renderIcon:t=>a.jsx(R,{size:20,...t}),iconDescription:"Add icon"},link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};var k,T,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,x,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var S,C,N;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(N=(C=p.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var q,D,j;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var A,I,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var O,z,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const je=["Default","WithDarkModeIllustration","withAction","withActionIconButton","withLink","withActionAndLink"];export{i as Default,n as WithDarkModeIllustration,je as __namedExportsOrder,De as default,p as withAction,c as withActionAndLink,m as withActionIconButton,l as withLink};