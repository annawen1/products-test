import{p as ge,j as o,B as J,I as Ge,a as Me}from"./settings-DDDiKwEV.js";import{R as me,r as a}from"./index-BwDkhjyp.js";import{c as N,C as Ze}from"./floating-ui.react-BgNs4SA8.js";import{D as E,E as F,m as se,A as pe}from"./motionConstants-CR5hPmRc.js";import{P as t}from"./index-Dk74W0Oi.js";import{a as Je}from"./props-helper-D2PZmIqz.js";import{g as Qe}from"./devtools-C7Iu0rt6.js";import{m as ue}from"./index-DkUr2NOz.js";import{u as We}from"./usePrefersReducedMotion-DeqUFceN.js";import{A as ye}from"./ActionSet-7kyZHLkU.js";import{u as fe}from"./usePreviousValue-DDnp_zt4.js";import{u as Xe}from"./useFocus-mCy_1587.js";import{a as Ye}from"./bucket-0-Cw-xsoio.js";const Ue={visible:{opacity:1,transition:{duration:E.moderate02,ease:F.productive.standard}},hidden:{opacity:0},exit:{opacity:0}},Re={visible:()=>({x:0,transition:{duration:E.moderate02,ease:F.productive.standard},opacity:1}),hidden:({placement:i,shouldReduceMotion:f})=>({x:i==="right"?f?0:"100%":f?0:-320,opacity:f?0:1}),exit:({placement:i,shouldReduceMotion:f})=>({x:i==="right"?f?0:"100%":f?0:-320,transition:{duration:E.moderate01,ease:F.productive.exit},opacity:f?0:1})},et={hidden:i=>({opacity:i?0:1,transition:{duration:i?E.moderate01:E.fast01,ease:i?0:F.productive.exit}}),visible:i=>({opacity:1,transition:{duration:i?E.moderate01:E.fast02,ease:i?0:F.productive.entrance,delay:i?.075:0}})},he={xs:"16rem",sm:"20rem",md:"30rem",lg:"40rem",xl:"65rem",max:"75%"},n=`${ge.prefix}--side-panel`,Q="SidePanel",tt=se(ye),O={animateTitle:!0,closeIconDescription:"Close",currentStep:0,navigationBackIconDescription:"Back",placement:"right",size:"md"};let K=me.forwardRef(({actionToolbarButtons:i,actions:f,animateTitle:P=O.animateTitle,children:ve,className:be,closeIconDescription:W=O.closeIconDescription,condensedActions:ie,currentStep:I=O.currentStep,id:X=n,includeOverlay:A,labelText:D,navigationBackIconDescription:xe=O.navigationBackIconDescription,onNavigationBack:Se,onRequestClose:q,onUnmount:$,open:s,placement:x=O.placement,preventCloseOnClickOutside:oe,selectorPageContent:j,selectorPrimaryFocus:Y,size:h=O.size,slideIn:S,slug:V,subtitle:U,title:c,launcherButtonRef:C,..._e},Te)=>{const[G,R]=a.useState(!1),$e=a.useRef(null),w=Te||$e,ee=a.useRef(null),g=a.useRef(null),we=a.useRef(null),ke=a.useRef(null),Pe=a.useRef(null),y=a.useRef(null),l=a.useRef(null),b=a.useRef(null),k=fe({size:h,open:s,currentStep:I}),[te,qe]=a.useState(-1),[_,ne]=a.useState(!0),{firstElement:M,keyDownListener:Ne}=Xe(w),r=w.current,re=fe(s),m=We(),[le,Ee]=a.useState(0),ce=e=>{e.key==="Escape"&&s&&(q==null||q())};a.useEffect(()=>{s&&!(y!=null&&y.current)?ne(!1):ne(P)},[P,s]);const de=a.useCallback(e=>{var p,d,v;if(b!=null&&b.current){const u=b==null?void 0:b.current,H=(u==null?void 0:u.clientHeight)*e;(p=u==null?void 0:u.style)==null||p.setProperty("margin-top",`${-H}px`)}if(l!=null&&l.current){const u=le*e;(v=(d=l==null?void 0:l.current)==null?void 0:d.style)==null||v.setProperty("margin-top",`${-u}px`)}},[le]);a.useEffect(()=>{var e;s&&P&&(l!=null&&l.current)&&Ee(Number(((e=l==null?void 0:l.current)==null?void 0:e.clientHeight)||null))},[P,l,s]);const ae=a.useCallback(()=>{var e;if(_&&(g!=null&&g.current)){const p=(e=g==null?void 0:g.current)==null?void 0:e.scrollTop,d=Math.min(Number(p),te)/te;r==null||r.style.setProperty(`--${n}--scroll-animation-progress`,d.toString()),de(d)}},[_,r==null?void 0:r.style,te,de]);a.useEffect(()=>{if(w&&r){const e=ke.current??g.current;k&&k.currentStep!==I&&e&&(e.scrollTop=0),k&&k.size!==h&&e&&(e.scrollTop=0)}},[I,w,h,k,X,r]),a.useEffect(()=>{!c&&D&&console.warn(`${Q}: The prop \`labelText\` was provided without a \`title\`. It is required to have a \`title\` when using the \`labelText\` prop.`)},[D,c]),a.useEffect(()=>{re&&!s&&C&&setTimeout(()=>{var e;(e=C==null?void 0:C.current)==null||e.focus()},0)},[C,s,re]);const Ae=()=>{var p,d;let e=!1;if(r&&s&&P&&G&&(y!=null&&y.current)&&c&&c.length&&!m){const v=y.current,u=((p=l==null?void 0:l.current)==null?void 0:p.offsetHeight)??0,B=((d=b==null?void 0:b.current)==null?void 0:d.offsetHeight)??0,H=i?v.offsetHeight-v.clientHeight:0,L=u+B+H;qe(L),r==null||r.style.setProperty(`--${n}--scroll-animation-distance`,L.toString());const z=g.current;if(z){const T=window==null?void 0:window.getComputedStyle(g.current),Z=T?parseFloat(T==null?void 0:T.paddingTop)+parseFloat(T==null?void 0:T.paddingBottom):0;e=(!!D||!!i||!!U)&&z.scrollHeight-z.clientHeight>=L+Z}}_!==e&&ne(e)};a.useEffect(()=>{!_&&w.current&&(r==null||r.style.setProperty(`--${n}--scroll-animation-progress`,"0"))},[_,ae,w,g,s,r==null?void 0:r.style]),a.useEffect(()=>{r&&s&&P&&G&&(y!=null&&y.current)&&c&&c.length&&!m&&Ae()},[s,_,G,ae,c,h,m,X]),a.useEffect(()=>{const e=d=>{r&&ee.current&&ee.current.contains(d.target)&&q&&q()},p=document.body;return A&&s?p.style.overflow="hidden":A&&!s&&(p.style.overflow=""),A&&!oe&&document.addEventListener("click",e),()=>{const d=document.body;d.style.overflow="",document.removeEventListener("click",e)}},[A,q,s,oe,$,w,r]);const De=()=>{s||$==null||$(),R(!0)};a.useEffect(()=>{m&&R(!0)},[m]);const je=()=>{R(!1)};a.useEffect(()=>{if(!s&&S){const e=j?document.querySelector(j):null;x&&x==="right"&&e?e.style.marginInlineEnd="0":e&&(e.style.marginInlineStart="0")}},[s,x,j,S]),a.useEffect(()=>{!s&&k&&k.open&&m&&($==null||$())},[s,$,m,k]),a.useEffect(()=>{if(s&&S){const e=j?document.querySelector(j):null;e?e.style.inlineSize="auto":Me.warn("SidePanel prop `selectorPageContent` was not provided a selector that matches any element on your page. If an element is not found, the panel will render as a slide over."),x&&x==="right"&&e?(e.style.marginInlineEnd="0",e.style.transition=m?"":`margin-inline-end ${ue}`,e.style.marginInlineEnd=he[h]):e&&(e.style.marginInlineStart="0",e.style.transition=m?"":`margin-inline-start ${ue}`,e.style.marginInlineStart=he[h])}},[S,j,x,h,m,s]),a.useEffect(()=>{s&&setTimeout(()=>{if(Y){const e=document==null?void 0:document.querySelector(Y);e&&(e==null||e.focus())}else S||M==null||M.focus()},0)},[G,M,s,Y,S]);const Oe=N([`${n}__actions-container`,{[`${n}__actions-container--condensed`]:ie}]),Ie=N([n,be,`${n}`,`${n}--${h}`,{[`${n}--right-placement`]:x==="right",[`${n}--left-placement`]:x==="left",[`${n}--slide-in`]:S,[`${n}--has-slug`]:V,[`${n}--condensed-actions`]:ie,[`${n}--has-overlay`]:A}]),Ce=()=>o.jsxs("div",{className:N(`${n}__title`,{[`${n}__title--no-label`]:!l.current}),ref:y,children:[o.jsx("h2",{className:`${n}__title-text`,title:c,"aria-hidden":!1,children:c}),_&&!m&&o.jsx("h2",{className:`${n}__collapsed-title-text`,title:c,"aria-hidden":!0,children:c})]}),Be=()=>{var d;const e=f&&f.length&&/l/.test(h)?"md":"sm";let p;return V&&((d=V.type)==null?void 0:d.displayName)==="Slug"&&(p=me.cloneElement(V,{size:e})),o.jsxs("div",{className:N(`${n}__header`,{[`${n}__header--on-detail-step`]:I>0,[`${n}__header--no-title-animation`]:!P,[`${n}__header--reduced-motion`]:m,[`${n}__header--has-title`]:c}),ref:Pe,children:[I>0&&o.jsx(J,{kind:"ghost",size:e,disabled:!1,renderIcon:v=>o.jsx(Ye,{size:20,...v}),iconDescription:xe,className:`${n}__navigation-back-button`,onClick:Se}),c&&c.length&&D&&D.length&&o.jsx("p",{className:`${n}__label-text`,ref:l,children:D}),c&&c.length&&Ce(),o.jsxs("div",{className:`${n}__slug-and-close`,children:[p,o.jsx(Ge,{className:`${n}__close-button`,label:W,onClick:q,onKeyDown:S?void 0:ce,title:W,"aria-label":W,ref:we,align:"left",children:o.jsx(Ze,{size:20,"aria-hidden":"true",tabIndex:"-1",className:`${n}--btn__icon`})})]}),U&&o.jsx("p",{className:N(`${n}__subtitle-text`,{[`${n}__subtitle-text-no-animation-no-action-toolbar`]:!_&&(!i||!i.length)}),ref:b,children:U}),i&&i.length&&o.jsx("div",{className:`${n}__action-toolbar`,children:i.map(({label:v,kind:u,hasIconOnly:B=!1,icon:H,renderIcon:L,tooltipPosition:z,tooltipAlignment:T,leading:Z,disabled:ze,className:Fe,onClick:Ke,...Ve})=>a.createElement(J,{...Ve,key:v,kind:u||"ghost",size:"sm",renderIcon:L||H,iconDescription:v,...B&&{tooltipPosition:z||"bottom",tooltipAlignment:T||"start"},hasIconOnly:B,disabled:ze,className:N([`${n}__action-toolbar-button`,Fe,{[`${n}__action-toolbar-leading-button`]:Z}]),onClick:Ke},Z&&v))})]})},He=()=>o.jsx("div",{ref:g,onScroll:ae,className:N(`${n}__inner-content`,`${n}--scrolls`,`${_?"":`${n}__inner-content--no-animated-title`}`),children:ve}),Le=e=>{S||(ce(e),Ne(e))};return o.jsx(pe,{children:s&&o.jsxs(o.Fragment,{children:[o.jsxs(se.div,{...Qe(Q),..._e,id:X,className:Ie,ref:w,role:"complementary","aria-label":c,onAnimationComplete:De,onAnimationStart:je,variants:Re,initial:"hidden",animate:"visible",exit:"exit",custom:{placement:x,shouldReduceMotion:m},onKeyDown:Le,children:[o.jsxs(o.Fragment,{children:[Be(),He()]}),o.jsx(tt,{actions:f??[],className:Oe,size:h==="xs"?"sm":h,custom:m,variants:et})]}),o.jsx(pe,{children:A&&o.jsx(se.div,{variants:Ue,initial:"hidden",animate:"visible",exit:"exit",ref:ee,className:`${n}__overlay`})})]})})});K=ge.checkComponentEnabled(K,Q);K.propTypes={actionToolbarButtons:t.arrayOf(t.shape({label:t.string,leading:t.bool,icon:t.oneOfType([t.object,t.func]),onClick:t.func,kind:t.oneOf(["ghost","tertiary","secondary","primary"]),tooltipAlignment:t.oneOf(["top","right","bottom","left"]),tooltipPosition:t.oneOf(["start","center","end"])})),actions:Je([ye.validateActions(),t.arrayOf(t.shape({...J.propTypes,kind:t.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),tooltipPosition:t.oneOf(["top","right","bottom","left"]),tooltipAlignment:t.oneOf(["start","center","end"]),label:t.string,loading:t.bool,onClick:J.propTypes.onClick}))]),animateTitle:t.bool,children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired,className:t.string,closeIconDescription:t.string,condensedActions:t.bool,currentStep:t.number,id:t.string,includeOverlay:t.bool,labelText:t.string,launcherButtonRef:t.any,navigationBackIconDescription:t.string,onNavigationBack:t.func,onRequestClose:t.func,onUnmount:t.func,open:t.bool.isRequired,placement:t.oneOf(["left","right"]),preventCloseOnClickOutside:t.bool,selectorPageContent:t.string.isRequired.if(({slideIn:i})=>i),selectorPrimaryFocus:t.string,size:t.oneOf(["xs","sm","md","lg","xl","2xl"]),slideIn:t.bool,slug:t.node,subtitle:t.node,title:t.string.isRequired.if(({labelText:i})=>i)};K.displayName=Q;K.__docgenInfo={description:"Side panels keep users in-context of a page while performing tasks like navigating, editing, viewing details, or configuring something new.",methods:[],displayName:"SidePanel",props:{actionToolbarButtons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps",elements:[{name:"any"}],raw:"ButtonProps<any>"}],raw:"ButtonProps<any>[]"},description:"Sets the action toolbar buttons",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},leading:{name:"bool",required:!1},icon:{name:"union",value:[{name:"object"},{name:"func"}],required:!1},onClick:{name:"func",required:!1},kind:{name:"enum",value:[{value:"'ghost'",computed:!1},{value:"'tertiary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'primary'",computed:!1}],required:!1},tooltipAlignment:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}],required:!1},tooltipPosition:{name:"enum",value:[{value:"'start'",computed:!1},{value:"'center'",computed:!1},{value:"'end'",computed:!1}],required:!1}}}}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps",elements:[{name:"any"}],raw:"ButtonProps<any>"}],raw:"ButtonProps<any>[]"},description:`The primary actions to be shown in the side panel. Each action is
specified as an object that will render expressive Buttons. Any Button
props can be passed in and any other fields in the object will be
passed through to the button element as HTML attributes.

See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api`,type:{name:"custom",raw:`allPropTypes([
  /**@ts-ignore*/
  ActionSet.validateActions(),
  PropTypes.arrayOf(
    PropTypes.shape({
      /**@ts-ignore */
      ...Button.propTypes,
      kind: PropTypes.oneOf([
        'ghost',
        'danger--ghost',
        'secondary',
        'danger',
        'primary',
      ]),
      tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
      tooltipAlignment: PropTypes.oneOf(['start', 'center', 'end']),
      label: PropTypes.string,
      loading: PropTypes.bool,
      // we duplicate this Button prop to improve the DocGen here
      /**@ts-ignore */
      onClick: Button.propTypes.onClick,
    })
  ),
])`}},animateTitle:{required:!1,tsType:{name:"boolean"},description:"Determines if the title will animate on scroll",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},children:{required:!0,tsType:{name:"ReactNode"},description:"Sets the body content of the side panel",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}},className:{required:!1,tsType:{name:"string"},description:"Sets an optional className to be added to the side panel outermost element",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"Sets the close button icon description",defaultValue:{value:"'Close'",computed:!1},type:{name:"string"}},condensedActions:{required:!1,tsType:{name:"boolean"},description:"Determines whether the side panel should render the condensed version (affects action buttons primarily)",type:{name:"bool"}},currentStep:{required:!1,tsType:{name:"number"},description:"Sets the current step of the side panel",defaultValue:{value:"0",computed:!1},type:{name:"number"}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier",defaultValue:{value:"`${pkg.prefix}--side-panel`",computed:!1},type:{name:"string"}},includeOverlay:{required:!1,tsType:{name:"boolean"},description:"Determines whether the side panel should render with an overlay",type:{name:"bool"}},labelText:{required:!1,tsType:{name:"string"},description:"Sets the label text which will display above the title text",type:{name:"string"}},launcherButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Provide a ref to return focus to once the side panel is closed.",type:{name:"any"}},navigationBackIconDescription:{required:!1,tsType:{name:"string"},description:"Sets the icon description for the navigation back icon button",defaultValue:{value:"'Back'",computed:!1},type:{name:"string"}},open:{required:!0,tsType:{name:"boolean"},description:"Determines whether the side panel should render or not",type:{name:"bool"}},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Determines if the side panel is on the right or left",defaultValue:{value:"'right'",computed:!1},type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]}},preventCloseOnClickOutside:{required:!1,tsType:{name:"boolean"},description:"Prevent closing on click outside of the panel",type:{name:"bool"}},selectorPageContent:{required:!0,tsType:{name:"string"},description:"This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.\nThis prop is required when using the `slideIn` variant of the side panel.",type:{name:"string"}},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:`Specify a CSS selector that matches the DOM element that should
be focused when the side panel opens`,type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"Sets the size of the side panel",defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]}},slideIn:{required:!1,tsType:{name:"boolean"},description:"Determines if this panel slides in",type:{name:"bool"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component",type:{name:"node"}},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"Sets the subtitle text",type:{name:"node"}},title:{required:!0,tsType:{name:"string"},description:"Sets the title text",type:{name:"string"}},onNavigationBack:{description:"Changes the current side panel page to the previous page",type:{name:"func"},required:!1},onRequestClose:{description:"Specify a handler for closing the side panel.\nThis handler closes the modal, e.g. changing `open` prop.",type:{name:"func"},required:!1},onUnmount:{description:`Optional function called when the side panel exit animation is complete.
This handler can be used for any state cleanup needed before the panel is removed from the DOM.`,type:{name:"func"},required:!1}}};export{K as S};
