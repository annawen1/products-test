import{r as c}from"./index-BwDkhjyp.js";const b=(t,i,g=[])=>{const[u,d]=c.useState(-1),[o,R]=c.useState(-1),r=c.useRef(null),a=c.useRef(i);return c.useEffect(()=>{a.current=i},[i]),c.useEffect(()=>{const h=()=>{var e,s;if(t.current){const n=window.getComputedStyle(t.current),w=(((e=t.current)==null?void 0:e.offsetWidth)||0)-(parseFloat((n==null?void 0:n.paddingLeft)||0),parseFloat((n==null?void 0:n.paddingRight)||0)),p=(((s=t.current)==null?void 0:s.offsetHeight)||0)-(parseFloat((n==null?void 0:n.paddingTop)||0),parseFloat((n==null?void 0:n.paddingLeft)||0));d(w),R(p)}};!(t!=null&&t.current)||u>=0&&o>=0||h()},[u,o,t.current,...g]),c.useLayoutEffect(()=>{if(!(t!=null&&t.current))return;const h=()=>{if(!(t!=null&&t.current)||!Array.isArray(r==null?void 0:r.current))return;const s=r.current[0];d(s.contentRect.width),R(s.contentRect.height),a.current&&a.current(s.contentRect)};let e=new ResizeObserver(s=>{r.current=s,window.requestAnimationFrame(()=>{h()})});return e.observe(t.current),()=>{e.disconnect(),e=null}},[t.current,...g]),{width:u,height:o}};export{b as u};
