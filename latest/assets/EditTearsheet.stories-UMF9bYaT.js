import{p as F,j as e,a as oe,B as ie}from"./settings-DDDiKwEV.js";import{R as S,r as o}from"./index-BwDkhjyp.js";import{P as t}from"./index-Dk74W0Oi.js";import{a as re,c as C,_ as se}from"./floating-ui.react-BgNs4SA8.js";import{F as ne}from"./Form-C0793gIU.js";import{S as ae,a as le}from"./SideNavItems-PV7WFRtb.js";import{S as me}from"./SideNavLinkText-CTXTGo2f.js";import{L as de}from"./Link-B4SJt6RK.js";import{g as ce}from"./devtools-C7Iu0rt6.js";import{T as pe}from"./TearsheetShell-D7rodDJF.js";import{p as ue}from"./props-helper-D2PZmIqz.js";import{S as he}from"./StoryDocsPage-Bd6ra28w.js";import{C as v}from"./Column-EfHAxmlk.js";import{I as fe}from"./Notification-CTLH5vZf.js";import{N as ge}from"./NumberInput-NTFTuQL2.js";import{R as D}from"./RadioButton-Dk88TpeT.js";import{R as be}from"./RadioButtonGroup-CQZQsCyP.js";import{T as Te}from"./Toggle-TXmJzkDC.js";import{T as L}from"./TextInput-Hd7J5_5S.js";import{F as xe}from"./FormGroup-DoLxBdhK.js";import{G as K}from"./Grid-BKMg6DvV.js";import{a as G}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as ye,s as ve}from"./slug-DEnPiAAV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./index-BONylQH5.js";import"./index-g07FazYc.js";import"./useMatchMedia-DHDhMA9x.js";import"./useResizeObserver-CYrpFlRY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BB3t0zem.js";import"./index-DcAOwtUU.js";import"./index-Bd0eoXr0.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-Dwf_xrN7.js";import"./InlineLoading-BvhLs1sa.js";import"./bucket-6-CS7rNrxx.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-BK1SMh4y.js";import"./usePortalTarget-BD2WdNlr.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-DW1YkzHB.js";import"./useFocus-mCy_1587.js";import"./usePreviousValue-DDnp_zt4.js";import"./ActionSet-7kyZHLkU.js";import"./index-BjLKg1ze.js";import"./iframe-D42bzfto.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-BB2of0Wm.js";import"./tslib.es6-B4_xh3D5.js";import"./Text-DpcC0Z3Y.js";import"./bucket-18-D_XNNF5i.js";import"./bucket-9-pcRs3_9u.js";import"./useNormalizedInputProps-DtF50Ia0.js";import"./FormContext-C7kRVu4t.js";import"./bucket-15-DqJqYgDY.js";import"./bucket-0-Cw-xsoio.js";import"./useControllableState-DwpxGhsf.js";import"./bucket-17-B2E3mTyd.js";import"./useAnnouncer-Dwt0jqXi.js";import"./v4-CQkTLCs1.js";import"./index-C9z6BHTc.js";const H=S.forwardRef(function(a,l){const n=re(),{children:h,className:d,isActive:p,href:g,...u}=a,i=C(`${n}--side-nav__menu-item`,d),m=C({[`${n}--side-nav__link`]:!0,[`${n}--side-nav__link--current`]:p});return S.createElement("li",{className:i},S.createElement(de,se({href:g},u,{className:m,ref:l}),S.createElement(me,null,h)))});H.displayName="SideNavMenuItem";H.propTypes={children:t.node,className:t.string,href:t.string,isActive:t.bool};const O="EditTearsheet",V=`${F.prefix}--tearsheet-edit`,Q=o.createContext(null),X=o.createContext(0),W={verticalPosition:"normal",influencerWidth:"narrow",sideNavAriaLabel:"Side navigation"};let x=o.forwardRef(({cancelButtonText:s,children:a,className:l,description:n,influencerWidth:h=W.influencerWidth,label:d,onClose:p,open:g,submitButtonText:u,title:i,verticalPosition:m=W.verticalPosition,onRequestSubmit:w,onFormChange:y,sideNavAriaLabel:j=W.sideNavAriaLabel,...E},k)=>{const[q,_]=o.useState(!1),$=async()=>{_(!0);try{await w()}catch(c){console.warn(`${O} submit error: ${c}`)}_(!1)},I=[{key:"edit-action-button-submit",label:u,onClick:()=>$(),loading:q,kind:"primary"},{key:"edit-action-button-cancel",label:s,onClick:p,kind:"ghost"}],[R,P]=o.useState(0),[B,A]=o.useState([]),z=o.useRef(null),N=c=>{P(c),y&&y(c)};function M(){return e.jsx("div",{className:`${V}__side-nav-wrapper`,children:e.jsx(ae,{"aria-label":j,className:`${V}__side-nav`,expanded:!0,isFixedNav:!1,children:e.jsx(le,{children:B.map((c,b)=>e.jsx(H,{onClick:()=>N(b),isActive:R===b,children:c},b))})})})}return e.jsx(pe,{...ce(O),...ue(E),actions:I,children:a,className:C(V,l),description:n,influencerPosition:"left",influencerWidth:h,label:d,onClose:p,open:g,size:"wide",title:i,verticalPosition:m,...E,hasCloseIcon:!1,influencer:M(),ref:k,children:e.jsx("div",{className:`${V}__content`,ref:z,role:"main",children:e.jsx(ne,{children:e.jsx(Q.Provider,{value:{currentForm:R,setFormTitles:A},children:S.Children.map(a,(c,b)=>e.jsx(X.Provider,{value:b,children:c}))})})})})});x=F.checkComponentEnabled(x,O);x.displayName=O;x.propTypes={cancelButtonText:t.string,children:t.node,className:t.string,description:t.node,influencerWidth:t.oneOf(["narrow","wide"]),label:t.node,onClose:t.func,onFormChange:t.func,onRequestSubmit:t.func.isRequired,open:t.bool,sideNavAriaLabel:t.string,submitButtonText:t.string,title:t.node,verticalPosition:t.oneOf(["normal","lower"])};x.__docgenInfo={description:"Use Tearsheet with medium to complex edits. See usage guidance for further information.",methods:[],displayName:"EditTearsheet",props:{cancelButtonText:{required:!1,tsType:{name:"string"},description:"The cancel button text",type:{name:"string"}},children:{required:!1,tsType:{name:"ReactNode"},description:"The main content of the tearsheet",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"A description of the flow, displayed in the header area of the tearsheet.",type:{name:"node"}},influencerWidth:{required:!1,tsType:{name:"union",raw:"'narrow' | 'wide'",elements:[{name:"literal",value:"'narrow'"},{name:"literal",value:"'wide'"}]},description:"Used to set the size of the influencer",defaultValue:{value:"'narrow'",computed:!1},type:{name:"enum",value:[{value:"'narrow'",computed:!1},{value:"'wide'",computed:!1}]}},label:{required:!1,tsType:{name:"ReactNode"},description:`A label for the tearsheet, displayed in the header area of the tearsheet
to maintain context for the tearsheet (e.g. as the title changes from page
to page of a multi-page task).`,type:{name:"node"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"}},onFormChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(formIndex: number) => number",signature:{arguments:[{type:{name:"number"},name:"formIndex"}],return:{name:"number"}}},description:`An optional handler that is called when a user changes forms via clicking
an influencer nav item.
Returns the index of the selected form.`,type:{name:"func"}},onRequestSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Specify a handler for submitting the tearsheet. Throughout its execution
the submit button will be disabled and include a loading indicator.`,type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"}},sideNavAriaLabel:{required:!1,tsType:{name:"string"},description:"Specifies the aria label for the SideNav from Carbon UIShell",defaultValue:{value:"'Side navigation'",computed:!1},type:{name:"string"}},submitButtonText:{required:!1,tsType:{name:"string"},description:"The submit button text",type:{name:"string"}},title:{required:!1,tsType:{name:"ReactNode"},description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"}},verticalPosition:{required:!1,tsType:{name:"union",raw:"'normal' | 'lower'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'lower'"}]},description:`The position of the top of tearsheet in the viewport. The 'normal'
position (the default) is a short distance down from the top of the
viewport, leaving room at the top for a global header bar to show through
from below. The 'lower' position provides a little extra room at the top
to allow an action bar navigation or breadcrumbs to also show through.`,defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]}}},composes:["PropsWithChildren"]};const we=({formContext:s,formNumber:a,title:l})=>{o.useEffect(()=>{s&&s.setFormTitles(n=>{if(n[a]!==l){const d=[...n];return d[a]=l,d}return n})},[l,s,a])},Y="EditTearsheetForm",T=`${F.prefix}--tearsheet-edit__form`,Ee={hasFieldset:!0};let f=o.forwardRef(({children:s,className:a,description:l,fieldsetLegendText:n,hasFieldset:h=Ee.hasFieldset,subtitle:d,title:p,...g},u)=>{const i=o.useContext(Q),m=o.useContext(X);return we({formContext:i,formNumber:m,title:p}),i?e.jsx("div",{...g,className:C(T,a,{[`${T}__form--hidden-form`]:m!==(i==null?void 0:i.currentForm),[`${T}__form--visible-form`]:m===(i==null?void 0:i.currentForm)}),ref:u,children:e.jsxs(K,{children:[e.jsxs(v,{xlg:12,lg:12,md:8,sm:4,children:[e.jsx("h4",{className:`${T}--title`,children:p}),d&&e.jsx("h6",{className:`${T}--subtitle`,children:d}),l&&e.jsx("p",{className:`${T}--description`,children:l})]}),e.jsx(v,{span:100,children:h?e.jsx(xe,{legendText:n,className:`${T}--fieldset`,children:e.jsx(K,{children:s})}):s})]})}):oe.warn(`You have tried using a ${Y} component outside of a EditTearsheet. This is not allowed. ${Y}s should always be children of the EditTearsheet`)});f=F.checkComponentEnabled(f,Y);f.propTypes={children:t.node,className:t.string,description:t.string,fieldsetLegendText:t.string.isRequired.if(({hasFieldset:s})=>!!s),hasFieldset:t.bool,subtitle:t.string,title:t.node.isRequired};f.__docgenInfo={description:"",methods:[],displayName:"EditTearsheetForm",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Content that shows in the tearsheet form",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Sets an optional className to be added to the tearsheet form",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Sets an optional description on the form component",type:{name:"string"}},hasFieldset:{required:!1,tsType:{name:"boolean"},description:"This optional prop will render your form content inside of a fieldset html element\nand is defaulted to true.\nYou can set this prop to `false` if you have multiple fieldset elements or want to control the children of your Full Page's form content.",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},subtitle:{required:!1,tsType:{name:"string"},description:"Sets an optional subtitle on the form component",type:{name:"string"}},title:{required:!0,tsType:{name:"ReactNode"},description:"Sets the title text for a tearsheet form",type:{name:"node"}},fieldsetLegendText:{description:"This is the required legend text that appears above a fieldset html element for accessibility purposes.\nYou can set the `hasFieldset` prop to false if you have multiple fieldset elements or want to control the children of your Full Page's form content.\nOtherwise, use CSS to hide/remove this label text.",type:{name:"string"},required:!0}}};const _e=".c4p--tearsheet-edit-multi-form__description{font-size:var(--cds-body-compact-01-font-size, .875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, .16px);padding-bottom:.75rem}p.c4p--tearsheet-edit-multi-form__description:last-of-type{padding-bottom:2rem}.c4p--tearsheet-edit-multi-form__heading{font-weight:600}.c4p--tearsheet-edit-multi-form .c4p--tearsheet__content .cds--form-item{margin-bottom:1rem}.cds--tile-group div{display:flex;flex-wrap:wrap}.c4p--tearsheet-edit-multi-form--custom-tile{width:280px;height:240px;margin-right:1rem}.c4p--tearsheet-edit-multi-form--custom-tile .c4p--empty-state__illustration.c4p--empty-state__illustration--lg{min-width:120px;height:120px}.c4p--tearsheet-edit-multi-form--custom-tile-label{position:absolute;bottom:1rem;left:1rem}",Z=()=>e.jsx(he,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/edit/usage#tearsheet-edit",blocks:[{story:J,description:"This is used when you have one section per step. This can be created by passing\nin the overall `<EditTearsheet />` component and the `<EditTearsheetForm />`\ncomponent with form items as children:",source:{code:`<EditTearsheet {...props}>
  <EditTearsheetForm
    title="Required title"
    subtitle="Optional subtitle"
    description="Optional description"
    onNext={() => {
      'Optional function';
    }}
  >
    <TextInput
      id="test-1"
      invalidText="A valid value is required"
      labelText="Topic name"
      placeholder="Enter topic name"
    />
  </EditTearsheetForm>
</EditTearsheet>`}},{title:"Using custom components",description:"It is possible to use custom components that return `EditTearsheetForms` in\norder to help reduce the amount of logic in the component that contains the main\n`EditTearsheet`. _It is required that each child of the `EditTearsheet` either\nbe a custom step or a `EditTearsheetForm`_. An example of this could look like\nthe following:",source:{code:`const CreateFormCustom = ({ subtitle, ...rest }) => {
  return (
    <EditTearsheetForm {...rest} subtitle={subtitle} title="Form 1">
      form content here
    </EditTearsheetForm>
  );
};

const CreateComponent = () => {
  return (
    <EditTearsheet {...EditTearsheetProps}>
      <CreateFormCustom subtitle="Custom form subtitle" />
      <EditTearsheetForm
        title="Topic name"
        fieldsetLegendText="Topic information"
        subtitle="This is the unique name used to recognize your topic"
        description="It will also be used by your producers and consumers as part of the
        connection information, so make it something easy to recognize."
      >
        Content for second form
      </EditTearsheetForm>
    </EditTearsheet>
  );
};`}},{title:"Class names",description:"Additionally, to get the preferred styling when including your own children as\nsections, you can utilize the below included class names.\n\n| Class name                                            | Element     | Features                                                   |\n| ----------------------------------------------------- | ----------- | ---------------------------------------------------------- |\n| `#{$pkg-prefix}--create-tearsheet__form--title`       | title       | `productive-heading-04` & `margin-bottom` of `$spacing-05` |\n| `#{$pkg-prefix}--create-tearsheet__form--subtitle`    | subtitle    | `productive-heading-01` & `margin-bottom` of `$spacing-03` |\n| `#{$pkg-prefix}--create-tearsheet__form--description` | description | `body-long-01` & `margin-bottom` of `$spacing-06`          |\n| `#{$pkg-prefix}--create-tearsheet__form--fieldset`    | fieldset    | `margin-bottom` of `$spacing-05` to all children elements  |\n"}]});Z.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const U=`${F.prefix}--tearsheet-edit-multi-form`,ee=({cancelButtonText:s,className:a,description:l,influencerWidth:n,label:h,slug:d,submitButtonText:p,title:g})=>{const[u,i]=o.useState(!1),[m,w]=o.useState(!1),[y,j]=o.useState("Topic name here"),[E,k]=o.useState("Topic description here"),[q,_]=o.useState("Topic value here"),[$,I]=o.useState("Location here"),[R,P]=o.useState(1),[B,A]=o.useState("one-day"),[z,N]=o.useState(!1),M=()=>{j(y),k(E),_(q),I($),P(1),A("one-day"),w(!1),N(!1),i(!1)},c=()=>{M(),G("onClose")()},b=async()=>{await new Promise(r=>setTimeout(r,1e3)),i(!1),G("onSubmit")()},te=()=>{G("handleFormChange")()};return e.jsxs("div",{children:[e.jsxs("style",{children:[`.${U} { opacity: 0 }`,";"]}),e.jsx(ie,{onClick:()=>i(!u),children:u?"Close EditTearsheet":"Open EditTearsheet"}),e.jsxs(x,{influencerWidth:n,label:h,className:C(U,a),submitButtonText:p,cancelButtonText:s,description:l,title:g,open:u,onRequestSubmit:b,onClose:c,onFormChange:te,slug:d&&ye(),children:[e.jsx(f,{title:"Topic name",fieldsetLegendText:"Topic information",subtitle:"This is the unique name used to recognize your topic",description:`It will also be used by your producers and consumers as part of the
          connection information, so make it something easy to recognize.`,children:e.jsxs(v,{xlg:8,lg:8,md:8,sm:8,children:[e.jsx(L,{labelText:"Topic name",placeholder:"Enter topic name",id:"tearsheet-multi-form-story-text-input-multi-form-1",value:y,onChange:r=>{r.target.value.length&&N(!1),j(r.target.value)},invalid:z,invalidText:"This is a required field",onBlur:()=>{y.length||N(!0)}}),e.jsx(L,{labelText:"Topic description (optional)",id:"tearsheet-multi-form-story-text-input-multi-form-1-input-2",value:E,placeholder:"Enter topic description",onChange:r=>k(r.target.value)}),e.jsx(L,{labelText:"Topic version (optional)",id:"tearsheet-multi-form-story-text-input-multi-form-1-input-3",value:q,placeholder:"Enter topic version",onChange:r=>_(r.target.value)}),m&&e.jsx(fe,{kind:"error",title:"Error",subtitle:"Resolve errors to continue",onClose:()=>w(!m)}),e.jsx(Te,{className:`${U}__error--toggle`,id:"simulated-error-toggle",size:"sm",labelText:"Simulate error",onToggle:()=>w(!m),toggled:m})]})}),e.jsx(f,{title:"Location",subtitle:"Custom form subtitle",fieldsetLegendText:"",description:"Custom form description (see storybook implementation for new custom form capability)",children:e.jsx(v,{xlg:8,lg:8,md:8,sm:8,children:e.jsx(L,{value:$,onChange:r=>I(r.target.value),id:"custom-form-input",labelText:"Location",placeholder:"Enter location"})})}),e.jsx(f,{title:"Partitions",subtitle:`One or more partitions make up a topic. A partition is an ordered
          list of messages.`,description:`Partitions are distributed across the brokers in order to increase
          the scalability of your topic. You can also use them to distribute
          messages across the members of a consumer group.`,fieldsetLegendText:"Partition information",children:e.jsx(v,{xlg:3,lg:3,md:8,sm:4,children:e.jsx(ge,{id:"carbon-number",min:1,max:100,value:R,label:"Partitions",helperText:"1 partition is sufficient for getting started but, production systems often have more.",invalidText:"Max partitions is 100, min is 1",onChange:r=>P(r.imaginaryTarget.value)})})}),e.jsx(f,{title:"Message retention",subtitle:"This is how long messages are retained before they are deleted.",description:`If your messages are not read by a consumer within this time, they
          will be missed.`,fieldsetLegendText:"Message retention scheduling",children:e.jsx(v,{xlg:8,lg:8,md:8,sm:8,children:e.jsxs(be,{legendText:"Message retention",name:"radio-button-group",defaultSelected:B,onChange:r=>A(r),orientation:"vertical",children:[e.jsx(D,{labelText:"A day",value:"one-day",id:"one-day"}),e.jsx(D,{labelText:"A week",value:"one-week",id:"one-week"}),e.jsx(D,{labelText:"A month",value:"one-month",id:"one-month"})]})})})]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"MultiFormEditTearsheet"};const Dt={title:"Experimental/Patterns/Edit and update/EditTearsheet",component:x,tags:["autodocs"],argTypes:{description:{control:{type:"text"}},label:{control:{type:"text"}},title:{control:{type:"text"}},influencer:{control:{disable:!0}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},...ve()},parameters:{styles:_e,docs:{page:Z}}},Ne={title:"Edit topic",description:"Specify details for the topic you want to update",submitButtonText:"Save",cancelButtonText:"Cancel",className:"test-class-name",label:"",influencerWidth:"narrow"},J=ee.bind({});J.storyName="Edit tearsheet";J.args={...Ne};const Gt=["multiFormEditTearsheet"];export{Gt as __namedExportsOrder,Dt as default,J as multiFormEditTearsheet};
