import{u as je,a as Ne,b as Oe,c as _,_ as g,d as G,s as Pe,f as De,e as Le}from"./floating-ui.react-BgNs4SA8.js";import{R as o,r as f}from"./index-BwDkhjyp.js";import{u as Q,L as $,a as Fe,b as Re}from"./index-C7XzgV7l.js";import{P as t}from"./index-Dk74W0Oi.js";import{m as ke}from"./mergeRefs-CTUecegF.js";import{F as Me}from"./FormContext-C7kRVu4t.js";import{W as ze,a as Be}from"./bucket-18-D_XNNF5i.js";import{C as Ke}from"./events-Dp3Lalez.js";const{ItemMouseMove:We,MenuMouseLeave:qe}=Q.stateChangeTypes,J=s=>typeof s=="string"?s:typeof s=="number"?`${s}`:s!==null&&typeof s=="object"&&"label"in s&&typeof s.label=="string"?s.label:"",X=o.forwardRef((s,Y)=>{var V;let{autoAlign:d=!1,className:Z,disabled:w=!1,direction:j="bottom",items:N,label:O,["aria-label"]:ee,ariaLabel:te,itemToString:u=J,itemToElement:P=null,renderSelectedItem:D,type:ne="default",size:I,onChange:L,id:oe,titleText:F="",hideLabel:le,helperText:T="",translateWithId:se,light:R,invalid:r,invalidText:ie,warn:h,warnText:re,initialSelectedItem:ae,selectedItem:k,downshiftProps:de,readOnly:E,slug:y,...ce}=s;const{refs:m,floatingStyles:v}=je(d?{placement:j,strategy:"fixed",middleware:[Pe({apply(e){let{rects:l,elements:a}=e;Object.assign(a.floating.style,{width:`${l.reference.width}px`})}}),De()],whileElementsMounted:Le}:{});f.useEffect(()=>{d&&Object.keys(v).forEach(e=>{m.floating.current&&(m.floating.current.style[e]=v[e])})},[v,d,m.floating]);const n=Ne(),{isFluid:S}=f.useContext(Me),M={items:N,itemToString:u,initialSelectedItem:ae,onSelectedItemChange:Te,stateReducer:ue,isItemDisabled(e,l){return e!==null&&typeof e=="object"&&"disabled"in e&&e.disabled===!0},onHighlightedIndexChange:e=>{let{highlightedIndex:l}=e;if(l>-1&&typeof window!==void 0){const i=document.querySelectorAll(`li.${n}--list-box__menu-item[role="option"]`)[l];i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})}},...de},pe=Oe();function ue(e,l){const{changes:a,type:i}=l;switch(i){case We:case qe:return{...a,highlightedIndex:e.highlightedIndex}}return a}k!==void 0&&(M.selectedItem=k);const{isOpen:b,getToggleButtonProps:fe,getLabelProps:me,getMenuProps:be,getItemProps:ge,selectedItem:c,highlightedIndex:we}=Q(M),p=ne==="inline",z=!r&&h,[he,ye]=f.useState(!1),xe=_(`${n}--dropdown`,{[`${n}--dropdown--invalid`]:r,[`${n}--dropdown--warning`]:z,[`${n}--dropdown--open`]:b,[`${n}--dropdown--inline`]:p,[`${n}--dropdown--disabled`]:w,[`${n}--dropdown--light`]:R,[`${n}--dropdown--readonly`]:E,[`${n}--dropdown--${I}`]:I,[`${n}--list-box--up`]:j==="top",[`${n}--dropdown--autoalign`]:d}),_e=_(`${n}--label`,{[`${n}--label--disabled`]:w,[`${n}--visually-hidden`]:le}),$e=_(`${n}--form__helper-text`,{[`${n}--form__helper-text--disabled`]:w}),Ie=_(`${n}--dropdown__wrapper`,`${n}--list-box__wrapper`,Z,{[`${n}--dropdown__wrapper--inline`]:p,[`${n}--list-box__wrapper--inline`]:p,[`${n}--dropdown__wrapper--inline--invalid`]:p&&r,[`${n}--list-box__wrapper--inline--invalid`]:p&&r,[`${n}--list-box__wrapper--fluid--invalid`]:S&&r,[`${n}--list-box__wrapper--fluid--focus`]:S&&he&&!b,[`${n}--list-box__wrapper--slug`]:y}),B=T?`dropdown-helper-text-${pe}`:void 0,A=P,x=fe(),K=T&&!S?o.createElement("div",{id:B,className:$e},T):null;function Te(e){let{selectedItem:l}=e;L&&L({selectedItem:l??null})}const W=e=>{ye(e.type==="focus")},C=ke(x.ref,Y),[q,Ee]=f.useState();let[ve,U]=f.useState(!1);const Se=E?{onClick:e=>{e.preventDefault(),C.current!==void 0&&C.current.focus()},onKeyDown:e=>{["ArrowDown","ArrowUp"," ","Enter"].includes(e.key)&&e.preventDefault()}}:{onKeyDown:e=>{(e.code!=="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&U(!0),(ve&&e.code==="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&(q&&clearTimeout(q),Ee(setTimeout(()=>{U(!1)},3e3))),x.onKeyDown&&x.onKeyDown(e)}},Ae=f.useMemo(()=>be({ref:d?m.setFloating:null}),[d]);let H;return y&&((V=y.type)==null?void 0:V.displayName)==="Slug"&&(H=o.cloneElement(y,{size:"mini"})),o.createElement("div",g({className:Ie},ce),F&&o.createElement("label",g({className:_e},me()),F),o.createElement($,{onFocus:W,onBlur:W,"aria-label":te||ee,size:I,className:xe,invalid:r,invalidText:ie,warn:h,warnText:re,light:R,isOpen:b,ref:d?m.setReference:null,id:oe},r&&o.createElement(ze,{className:`${n}--list-box__invalid-icon`}),z&&o.createElement(Be,{className:`${n}--list-box__invalid-icon ${n}--list-box__invalid-icon--warning`}),o.createElement("button",g({type:"button",className:`${n}--list-box__field`,disabled:w,"aria-disabled":E?!0:void 0,"aria-describedby":!p&&!r&&!h&&K?B:void 0,title:c&&u!==void 0?u(c):J(O)},x,Se,{ref:C}),o.createElement("span",{className:`${n}--list-box__label`},c?D?D(c):u(c):O),o.createElement($.MenuIcon,{isOpen:b,translateWithId:se})),H,o.createElement($.Menu,Ae,b&&N.map((e,l)=>{const a=e!==null&&typeof e=="object",i=ge({item:e,index:l});e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"id")&&(i.id=e.id);const Ce=a&&"text"in e&&P?e.text:u(e);return o.createElement($.MenuItem,g({key:i.id,isActive:c===e,isHighlighted:we===l,title:Ce,disabled:i["aria-disabled"]},i),typeof e=="object"&&A!==void 0&&A!==null?o.createElement(A,g({key:i.id},e)):u(e),c===e&&o.createElement(Ke,{className:`${n}--list-box__menu-item__selected-icon`}))}))),!p&&!r&&!h&&K)});X.displayName="Dropdown";X.propTypes={"aria-label":t.string,ariaLabel:G(t.string),autoAlign:t.bool,className:t.string,direction:t.oneOf(["top","bottom"]),disabled:t.bool,downshiftProps:t.object,helperText:t.node,hideLabel:t.bool,id:t.string.isRequired,initialSelectedItem:t.oneOfType([t.object,t.string,t.number]),invalid:t.bool,invalidText:t.node,itemToElement:t.func,itemToString:t.func,items:t.array.isRequired,label:t.node.isRequired,light:G(t.bool),onChange:t.func,readOnly:t.bool,renderSelectedItem:t.func,selectedItem:t.oneOfType([t.object,t.string,t.number]),size:Fe,slug:t.node,titleText:t.node.isRequired,translateWithId:t.func,type:Re,warn:t.bool,warnText:t.node};export{X as D};