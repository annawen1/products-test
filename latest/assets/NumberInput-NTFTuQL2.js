import{a as R,g as _e,c as h,_ as ye,d as $e}from"./floating-ui.react-BgNs4SA8.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as a,r as v}from"./index-BwDkhjyp.js";import{u as Ne}from"./useNormalizedInputProps-DtF50Ia0.js";import{F as we}from"./FormContext-C7kRVu4t.js";import{T as Y}from"./Text-DpcC0Z3Y.js";import{S as xe}from"./bucket-15-DqJqYgDY.js";import{A as Ee}from"./bucket-0-Cw-xsoio.js";var G,J;const Q={"increment.number":"increment.number","decrement.number":"decrement.number"},Ce={[Q["increment.number"]]:"Increment number",[Q["decrement.number"]]:"Decrement number"},Ie=a.forwardRef(function(m,u){var M,j;const{allowEmpty:i=!1,className:s,disabled:l=!1,disableWheel:$=!1,defaultValue:g=0,helperText:V="",hideLabel:P=!1,hideSteppers:z,iconDescription:N,id:C,label:ne,invalid:te=!1,invalidText:re,light:ae,max:D,min:O,onChange:w,onClick:I,onKeyUp:le,readOnly:c,size:W="md",slug:d,step:ie=1,translateWithId:k=n=>Ce[n],warn:se=!1,warnText:oe="",value:b,..._}=m,t=R(),{isFluid:p}=v.useContext(we),[ue,A]=v.useState(!1),[T,x]=v.useState(()=>b!==void 0?b:g!==void 0?g:i?"":0),[de,me]=v.useState(b),f=v.useRef(null),ce=_e([u,f]),be=h({[`${t}--number`]:!0,[`${t}--number--helpertext`]:!0,[`${t}--number--readonly`]:c,[`${t}--number--light`]:ae,[`${t}--number--nolabel`]:P,[`${t}--number--nosteppers`]:z,[`${t}--number--${W}`]:W}),pe=Te({allowEmpty:i,invalid:te,value:T,max:D,min:O}),r=Ne({id:C,readOnly:c,disabled:l,invalid:!pe,invalidText:re,warn:se,warnText:oe}),[B,U]=[k("increment.number"),k("decrement.number")],fe=h(`${t}--number__input-wrapper`,{[`${t}--number__input-wrapper--warning`]:r.warn,[`${t}--number__input-wrapper--slug`]:d}),ve=h({[`${t}--number__invalid`]:r.invalid||r.warn,[`${t}--number__invalid--warning`]:r.warn});b!==de&&(x(b),me(b));let E;r.invalid&&(E=r.invalidId),r.warn&&(E=r.warnId),r.validation||(E=V?r.helperId:void 0);function he(n){if(l)return;const y={value:i&&n.target.value===""?"":Number(n.target.value),direction:T<n.target.value?"up":"down"};x(y.value),w&&w(n,y)}const K=n=>{"type"in n.target&&n.target.type==="button"?A(!1):A(n.type==="focus")},ge=h(`${t}--form-item`,{[s]:!!s,[`${t}--number-input--fluid--invalid`]:p&&r.invalid,[`${t}--number-input--fluid--focus`]:p&&ue,[`${t}--number-input--fluid--disabled`]:p&&l}),q=r.icon;function H(n,y){if(f.current){y==="up"?f.current.stepUp():f.current.stepDown();const L={value:i&&f.current.value===""?"":Number(f.current.value),direction:y};x(L.value),w&&w(n,L),I&&I(n,L)}}let S;d&&((M=d.type)==null?void 0:M.displayName)==="Slug"&&(S=a.cloneElement(d,{size:"mini"}));let F;return d&&((j=d.type)==null?void 0:j.displayName)==="Slug"&&(F=S.props.revertActive),v.useEffect(()=>{!F&&d&&g&&x(g)},[g,F,d]),a.createElement("div",{className:ge,onFocus:p?K:void 0,onBlur:p?K:void 0},a.createElement("div",{className:be,"data-invalid":r.invalid?!0:void 0},a.createElement(Z,{disabled:r.disabled,hideLabel:P,id:C,label:ne}),a.createElement("div",{className:fe},a.createElement("input",ye({},_,{"data-invalid":r.invalid?!0:void 0,"aria-invalid":r.invalid,"aria-describedby":E,"aria-readonly":c,disabled:r.disabled,ref:ce,id:C,max:D,min:O,onClick:I,onChange:he,onKeyUp:le,onFocus:n=>{$&&n.target.addEventListener("wheel",X),_.onFocus&&_.onFocus(n)},onBlur:n=>{$&&n.target.removeEventListener("wheel",X),_.onBlur&&_.onBlur(n)},pattern:"[0-9]*",readOnly:c,step:ie,type:"number",value:T})),S,q?a.createElement(q,{className:ve}):null,!z&&a.createElement("div",{className:`${t}--number__controls`},a.createElement("button",{"aria-label":U||N,className:`${t}--number__control-btn down-icon`,disabled:l||c,onClick:n=>H(n,"down"),tabIndex:-1,title:U||N,type:"button"},G||(G=a.createElement(xe,{className:"down-icon"}))),a.createElement("div",{className:`${t}--number__rule-divider`}),a.createElement("button",{"aria-label":B||N,className:`${t}--number__control-btn up-icon`,disabled:l||c,onClick:n=>H(n,"up"),tabIndex:-1,title:B||N,type:"button"},J||(J=a.createElement(Ee,{className:"up-icon"}))),a.createElement("div",{className:`${t}--number__rule-divider`}))),p&&a.createElement("hr",{className:`${t}--number-input__divider`}),r.validation?r.validation:a.createElement(ee,{id:r.helperId,disabled:l,description:V})))});Ie.propTypes={allowEmpty:e.bool,className:e.string,defaultValue:e.oneOfType([e.number,e.string]),disableWheel:e.bool,disabled:e.bool,helperText:e.node,hideLabel:e.bool,hideSteppers:e.bool,iconDescription:e.string,id:e.string.isRequired,invalid:e.bool,invalidText:e.node,label:e.node,light:$e(e.bool),max:e.number,min:e.number,onChange:e.func,onClick:e.func,onKeyUp:e.func,readOnly:e.bool,size:e.oneOf(["sm","md","lg"]),slug:e.node,step:e.number,translateWithId:e.func,value:e.oneOfType([e.number,e.string]),warn:e.bool,warnText:e.node};const Z=o=>{let{disabled:m,id:u,hideLabel:i,label:s}=o;const l=R(),$=h({[`${l}--label`]:!0,[`${l}--label--disabled`]:m,[`${l}--visually-hidden`]:i});return s?a.createElement(Y,{as:"label",htmlFor:u,className:$},s):null};Z.propTypes={disabled:e.bool,hideLabel:e.bool,id:e.string,label:e.node};function ee(o){let{disabled:m,description:u,id:i}=o;const s=R(),l=h(`${s}--form__helper-text`,{[`${s}--form__helper-text--disabled`]:m});return u?a.createElement(Y,{as:"div",id:i,className:l},u):null}ee.propTypes={description:e.node,disabled:e.bool,id:e.string};function Te(o){let{allowEmpty:m,invalid:u,value:i,max:s,min:l}=o;return u?!1:i===""?m:!(i>s||i<l)}function X(o){o.preventDefault()}export{Ie as N};