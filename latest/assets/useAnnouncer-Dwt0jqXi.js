function a(t,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"characters";const e=r-t;if(e<=10&&e>0){const u=e===1?n.slice(0,-1):n;return`${e} ${u} left.`}return e<=0?`Maximum ${n} reached.`:null}export{a as u};