const m=[0,1,2,3,4,5,6,7,8,9,10],p={0:"None",1:"One button",2:"A danger button",3:"A ghost button",4:"Two buttons",5:"Two buttons with one ghost",6:"Three buttons",7:"Three buttons with one ghost",8:"Three buttons with one danger",9:"Four buttons with one ghost",10:"Four buttons with two danger"},w=(t,d)=>{const o=(g,u,y)=>{const h=d&&d(`Click on '${g}'`);return{label:g,kind:u,key:y,onClick:h&&(i=>{i&&i.persist(),h(i)})}},n=o((t==null?void 0:t.primary)??"Primary","primary",1),c=o((t==null?void 0:t.danger)??"Danger","danger",2),r=o((t==null?void 0:t.secondary)??"Secondary","secondary",3),e=o((t==null?void 0:t.secondary2)??"Secondary","secondary",4),a=o((t==null?void 0:t.dangerGhost)??"Danger-ghost","danger--ghost",5),s=o((t==null?void 0:t.ghost)??"Ghost","ghost",6);return{0:[],1:[n],2:[c],3:[s],4:[n,r],5:[n,s],6:[n,r,e],7:[n,r,s],8:[c,r,s],9:[n,r,e,s],10:[c,r,e,a]}},_=".tearsheet-stories__dummy-content-block{padding:1.5rem 2rem}.tearsheet-stories__narrow-content-block{padding:1rem}.tearsheet-stories__tabs{margin-left:-1rem}.tearsheet-stories__tabs .cds--tab-content{display:none}";export{p as a,m as b,w as c,_ as s};