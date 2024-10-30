import{m as ce,n as me,T as Ie,p as ue,j as o,B as K}from"./settings-DDDiKwEV.js";import{R as i,r as v}from"./index-BwDkhjyp.js";import{a as V,_ as G,C as je,c as Z,j as fe,d as ne,k as ye,S as ge}from"./floating-ui.react-BgNs4SA8.js";import{a as Ce}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as we}from"./StoryDocsPage-Bd6ra28w.js";import{u as Re}from"./index-BjLKg1ze.js";import{b as ze}from"./story-helper-BB2of0Wm.js";import{C as Oe,M as ke,a as Pe,b as He}from"./ComposedModal-BB3t0zem.js";import{P as e}from"./index-Dk74W0Oi.js";import{a as Le,c as Ae}from"./events-Dp3Lalez.js";import{L as Me}from"./InlineLoading-BvhLs1sa.js";import{W as Ue}from"./bucket-18-D_XNNF5i.js";import{T as W}from"./Text-DpcC0Z3Y.js";import{T as We}from"./TextInput-Hd7J5_5S.js";import{g as Ke}from"./devtools-C7Iu0rt6.js";import{u as Ge}from"./usePortalTarget-BD2WdNlr.js";import{u as se}from"./uuidv4-BQrI85uz.js";import{A as Ve}from"./bucket-0-Cw-xsoio.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-BLdp044m.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-D42bzfto.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-Bd0eoXr0.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-Dwf_xrN7.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-BK1SMh4y.js";import"./bucket-6-CS7rNrxx.js";import"./useNormalizedInputProps-DtF50Ia0.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-B2E3mTyd.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-DW1YkzHB.js";var oe;function be(d){let{iconDescription:p="Uploading file",status:a="uploading",invalid:f,name:m,tabIndex:E=0,["aria-describedby"]:g,...b}=d;const y=V();switch(a){case"uploading":return i.createElement(Me,{description:p,small:!0,withOverlay:!1,className:`${y}--file-loading`});case"edit":return i.createElement(i.Fragment,null,f&&i.createElement(Ue,{className:`${y}--file-invalid`}),i.createElement("button",G({"aria-label":`${p} - ${m}`,className:`${y}--file-close`,type:"button",tabIndex:E},b,{"aria-describedby":f?g:void 0}),oe||(oe=i.createElement(je,null))));case"complete":return i.createElement(Le,G({"aria-label":p,className:`${y}--file-complete`},b,{tabIndex:-1}),p&&i.createElement("title",null,p));default:return null}}be.propTypes={"aria-describedby":e.string,iconDescription:e.string,invalid:e.bool,name:e.string,status:e.oneOf(["edit","complete","uploading"]),tabIndex:e.number};function he(d){let{accept:p=[],className:a,id:f,disabled:m,labelText:E="Add file",multiple:g=!1,name:b,onAddFiles:y=me,onClick:N,pattern:j=".[0-9a-z]+$",innerRef:C,...w}=d;const u=V(),n=v.useRef(null),{current:_}=v.useRef(f||ce()),[R,D]=v.useState(!1),F=Z(`${u}--file__drop-container`,`${u}--file-browse-btn`,{[`${u}--file__drop-container--drag-over`]:R,[`${u}--file-browse-btn--disabled`]:m},a);function B(t){if(!p.length)return t;const h=new Set(p);return t.reduce((S,I)=>{const{name:L,type:J=""}=I,Q=new RegExp(j,"i"),[A]=L.match(Q)??[];return A===void 0?S:h.has(J)||h.has(A.toLowerCase())?S.concat([I]):(I.invalidFileType=!0,S.concat([I]))},[])}function l(t){const h=[...t.target.files??[]],S=B(h);return y(t,{addedFiles:S})}function H(t){const h=[...t.dataTransfer.files],S=B(h);return y(t,{addedFiles:S})}const Y=()=>{var t;m||(t=n.current)==null||t.click()};return i.createElement("div",{className:`${u}--file`,onDragOver:t=>{t.stopPropagation(),t.preventDefault(),!m&&(D(!0),t.dataTransfer.dropEffect="copy")},onDragLeave:t=>{t.stopPropagation(),t.preventDefault(),!m&&(D(!1),t.dataTransfer.dropEffect="move")},onDrop:t=>{t.stopPropagation(),t.preventDefault(),!m&&(D(!1),H(t))}},i.createElement("button",G({type:"button",className:F,ref:C,onKeyDown:t=>{var h;fe(t,[ye,ge])&&(t.preventDefault(),(h=n.current)==null||h.click())},onClick:Ae([N,Y])},w),E),i.createElement("label",{htmlFor:_,className:`${u}--visually-hidden`},E),i.createElement("input",{type:"file",id:_,className:`${u}--file-input`,ref:n,tabIndex:-1,disabled:m,accept:p.join(","),name:b,multiple:g,onChange:l,onClick:t=>{t.target.value=null}}))}he.propTypes={accept:e.arrayOf(e.string),className:e.string,disabled:e.bool,id:e.string,labelText:e.string.isRequired,multiple:e.bool,name:e.string,onAddFiles:e.func,onClick:e.func,pattern:e.string,role:ne(e.number),tabIndex:ne(e.number)};function xe(d){let{uuid:p,name:a,status:f="uploading",iconDescription:m,onDelete:E=me,invalid:g,errorSubject:b,errorBody:y,size:N,className:j,...C}=d;const[w,u]=v.useState(!1),n=V(),{current:_}=v.useRef(p||ce()),R=Z(`${n}--file__selected-file`,j,{[`${n}--file__selected-file--invalid`]:g,[`${n}--file__selected-file--md`]:N==="md",[`${n}--file__selected-file--sm`]:N==="sm"}),D=g?`${n}--file-filename-container-wrap-invalid`:`${n}--file-filename-container-wrap`,F=l=>l==null?void 0:l.replace(/\s+/g,""),B=l=>(u(l.offsetWidth<l.scrollWidth),l.offsetWidth<l.scrollWidth);return v.useLayoutEffect(()=>{const l=document.querySelector(`[title="${a}"]`);B(l)},[n,a]),i.createElement("span",G({className:R},C),w?i.createElement("div",{className:D},i.createElement(Ie,{label:a,align:"bottom",className:`${n}--file-filename-tooltip`},i.createElement("button",{className:`${n}--file-filename-button`,type:"button"},i.createElement(W,{as:"p",title:a,className:`${n}--file-filename-button`,id:F(a)},a)))):i.createElement(W,{as:"p",title:a,className:`${n}--file-filename`,id:F(a)},a),i.createElement("div",{className:`${n}--file-container-item`},i.createElement("span",{className:`${n}--file__state-container`},i.createElement(be,{name:a,iconDescription:m,status:f,invalid:g,"aria-describedby":g&&b?`${F(a)}-id-error`:void 0,onKeyDown:l=>{fe(l,[ye,ge])&&f==="edit"&&(l.preventDefault(),E(l,{uuid:_}))},onClick:l=>{f==="edit"&&E(l,{uuid:_})}}))),g&&b&&i.createElement("div",{className:`${n}--form-requirement`,role:"alert",id:`${F(a)}-id-error`},i.createElement(W,{as:"div",className:`${n}--form-requirement__title`},b),y&&i.createElement(W,{as:"p",className:`${n}--form-requirement__supplement`},y)))}xe.propTypes={errorBody:e.string,errorSubject:e.string,iconDescription:e.string,invalid:e.bool,name:e.string,onDelete:e.func,size:e.oneOf(["sm","md","lg"]),status:e.oneOf(["uploading","edit","complete"]),uuid:e.string};const ee="ImportModal",Ye={accept:Object.freeze([])};let q=v.forwardRef(({accept:d=Ye.accept,className:p,defaultErrorBody:a,defaultErrorHeader:f,description:m,fetchErrorBody:E,fetchErrorHeader:g,fileDropHeader:b,fileDropLabel:y,fileUploadLabel:N,inputButtonIcon:j,inputButtonText:C,inputId:w,inputLabel:u,inputPlaceholder:n,invalidFileTypeErrorBody:_,invalidFileTypeErrorHeader:R,invalidIconDescription:D,maxFileSize:F,maxFileSizeErrorBody:B,maxFileSizeErrorHeader:l,onClose:H,onRequestSubmit:Y,open:t,portalTarget:h,primaryButtonText:S,secondaryButtonText:I,title:L,...J},Q)=>{const A=V(),[z,M]=v.useState([]),[O,te]=v.useState(""),ve=Ge(h),Ee=r=>{const T=new Set(d),$=r.name,c=r.type,s=`.${$.split(".").pop()}`;return!(T.has(c)||T.has(s)||d.length===0)},X=r=>{const $=[...r.map(c=>{const s={uuid:c.uuid||se(),status:"edit",iconDescription:D,name:c.name,fileSize:c.size,invalidFileType:c.invalidFileType,fileData:c,fetchError:c.fetchError};return s.fetchError?(s.errorBody=E||a,s.errorSubject=g||f,s.invalid=!0):s.invalidFileType?(s.errorBody=_||a,s.errorSubject=R||f,s.invalid=!0):F&&((s==null?void 0:s.fileSize)??0)>F&&(s.errorBody=B||a,s.errorSubject=l||f,s.invalid=!0),s})];M($)},Fe=async r=>{r.preventDefault();const T=O.substring(O.lastIndexOf("/")+1).split("?")[0],$={name:T,status:"uploading",uuid:se()};M([$]);try{const c=await fetch(O);if(!c.ok||c.status!==200)throw new Error(`${c.status}`);const s=await c.blob(),U=new File([s],T,{type:s.type});U.invalidFileType=Ee(U),U.uuid=$.uuid,X([U])}catch{const s={...$,fetchError:!0};X([s])}},Se=(r,{addedFiles:T})=>{r.stopPropagation(),X(T)},$e=r=>{const T=z.filter($=>$.uuid!==r);M(T)},_e=()=>{Y(z)},De=r=>{te(r.target.value)},re=()=>{M([]),te(""),H&&H()},ie=z.length,ae=z.filter(r=>!r.invalid).length,k=ie>0,qe=!k||!(ae>0),Ne=!O||k,Be=`${ae} / ${ie} ${N}`,x=`${ue.prefix}--import-modal`;return ve(o.jsxs(Oe,{...J,open:t,ref:Q,...Ke(ee),"aria-label":L,className:Z(x,p),size:"sm",preventCloseOnClickOutside:!0,onClose:re,children:[o.jsx(ke,{className:`${x}__header`,title:L}),o.jsxs(Pe,{className:`${x}__body-container`,children:[m&&o.jsx("p",{className:`${x}__body`,children:m}),b&&o.jsx("p",{className:`${x}__file-drop-header`,children:b}),o.jsx(he,{accept:d,labelText:y,onAddFiles:Se,disabled:k,"data-modal-primary-focus":!0}),u&&o.jsx("p",{className:`${x}__label`,children:u}),o.jsxs("div",{className:`${x}__input-group`,children:[o.jsx(We,{labelText:"",id:w,onChange:De,placeholder:n,value:O,disabled:k,"aria-label":u}),o.jsx(K,{onClick:Fe,className:`${x}__import-button`,size:"sm",disabled:Ne,renderIcon:j?r=>o.jsx(Ve,{size:20,...r}):null,children:C})]}),o.jsxs("div",{className:`${A}--file-container ${x}__file-container`,children:[k&&o.jsx("p",{className:`${x}__helper-text`,children:Be}),z.map(r=>o.jsx(xe,{onDelete:()=>$e(r.uuid),name:r.name,status:r.status,size:"lg",uuid:r.uuid,iconDescription:r.iconDescription,invalid:r.invalid,errorBody:r.errorBody,errorSubject:r.errorSubject,filesize:r.fileSize},r.uuid))]})]}),o.jsxs(He,{className:`${x}__footer`,children:[o.jsx(K,{type:"button",kind:"secondary",onClick:re,children:I}),o.jsx(K,{type:"submit",kind:"primary",onClick:_e,disabled:qe,children:S})]})]}))});q=ue.checkComponentEnabled(q,ee);q.propTypes={accept:e.array,className:e.string,defaultErrorBody:e.string.isRequired,defaultErrorHeader:e.string.isRequired,description:e.string,fetchErrorBody:e.string,fetchErrorHeader:e.string,fileDropHeader:e.string,fileDropLabel:e.string,fileUploadLabel:e.string,inputButtonIcon:e.bool,inputButtonText:e.string.isRequired,inputId:e.string,inputLabel:e.string,inputPlaceholder:e.string,invalidFileTypeErrorBody:e.string,invalidFileTypeErrorHeader:e.string,invalidIconDescription:e.string,maxFileSize:e.number,maxFileSizeErrorBody:e.string,maxFileSizeErrorHeader:e.string,onClose:e.func,onRequestSubmit:e.func.isRequired,open:e.bool.isRequired,portalTarget:e.node,primaryButtonText:e.string.isRequired,secondaryButtonText:e.string.isRequired,title:e.string.isRequired};q.displayName=ee;q.__docgenInfo={description:"",methods:[],displayName:"ImportModal",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Specifies the file types that are valid for importing",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},defaultErrorBody:{required:!0,tsType:{name:"string"},description:"The default message shown for an import error",type:{name:"string"}},defaultErrorHeader:{required:!0,tsType:{name:"string"},description:"The default header that is displayed to show an error message",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Content that is displayed inside the modal",type:{name:"string"}},fetchErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error body to display specifically for a fetch error",type:{name:"string"}},fetchErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a fetch error",type:{name:"string"}},fileDropHeader:{required:!1,tsType:{name:"string"},description:"Header for the drag and drop box",type:{name:"string"}},fileDropLabel:{required:!1,tsType:{name:"string"},description:"Label for the drag and drop box",type:{name:"string"}},fileUploadLabel:{required:!1,tsType:{name:"string"},description:"Label that appears when a file is uploaded to show number of files (1 / 1)",type:{name:"string"}},inputButtonIcon:{required:!1,tsType:{name:"boolean"},description:"Button icon for import by url button",type:{name:"bool"}},inputButtonText:{required:!0,tsType:{name:"string"},description:"Button text for import by url button",type:{name:"string"}},inputId:{required:!1,tsType:{name:"string"},description:"ID for text input",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"Header to display above import by url",type:{name:"string"}},inputPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for text input",type:{name:"string"}},invalidFileTypeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a invalid file type error",type:{name:"string"}},invalidFileTypeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a invalid file type error",type:{name:"string"}},invalidIconDescription:{required:!1,tsType:{name:"string"},description:"Description for delete file icon",type:{name:"string"}},maxFileSize:{required:!1,tsType:{name:"number"},description:"File size limit in bytes",type:{name:"number"}},maxFileSizeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a max file size error",type:{name:"string"}},maxFileSizeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a max file size error",type:{name:"string"}},open:{required:!0,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},onClose:{description:"Specify a handler for closing modal",type:{name:"func"},required:!1},onRequestSubmit:{description:'Specify a handler for "submitting" modal. Access the imported file via `file => {}`',type:{name:"func"},required:!0}}};const Te=()=>{const{csfFile:d}=Re("meta",["meta"]);return o.jsx(we,{altGuidelinesHref:[ze(d),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})};Te.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ut={title:"IBM Products/Patterns/Import and upload/ImportModal",component:q,tags:["autodocs"],parameters:{docs:{page:Te}},argTypes:{accept:{control:{type:"select",labels:{0:"image (png, jpeg or gif)",1:"document (doc or pdf)",2:"development (html, css or javascript)"}},options:[0,1,2],mapping:{0:["image/png","image/jpeg","image/gif"],1:["application/doc","application/docx","application/pdf"],2:["text/plain","text/css","text/html","text/javascript"]}},portalTarget:{control:!1}}},Je={className:"test-class",defaultErrorBody:"Select a new file and try again.",defaultErrorHeader:"Import failed",description:"You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB)",fetchErrorBody:"Unable to fetch URL.",fetchErrorHeader:"Import failed",fileDropHeader:"Add files using drag and drop",fileDropLabel:"Drag and drop files here or click to upload",fileUploadLabel:"files uploaded",inputButtonIcon:!1,inputButtonText:"Add file",inputId:"test-id",inputLabel:"Add a file by specifying a URL",inputPlaceholder:"URL",invalidFileTypeErrorBody:"Invalid file type.",invalidFileTypeErrorHeader:"Import failed",invalidIconDescription:"Delete",maxFileSize:5e5,maxFileSizeErrorBody:"500kb max file size. Select a new file and try again.",maxFileSizeErrorHeader:"Import failed",onClose:Ce("onClose event"),onRequestSubmit:d=>console.log("file contents",d),open:!0,primaryButtonText:"Import",secondaryButtonText:"Cancel",title:"Import"},Qe=d=>{const[p,a]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(q,{...d,open:p,onClose:()=>a(!1)}),o.jsx(K,{onClick:()=>a(!0),children:"Launch modal"})]})},P=Qe.bind({});P.args={accept:0,...Je};var le,de,pe;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <ImportModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(pe=(de=P.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Wt=["Standard"];export{P as Standard,Wt as __namedExportsOrder,Ut as default};
