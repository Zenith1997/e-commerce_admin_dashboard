import{a as N,g as z,ad as U,s as y,p as u,_ as s,ae as G,r as P,b as T,c as V,j as n,f as H,h as A,i as K,af as O,ag as Z,F as q,ah as w,B as R,e as D,a0 as M,D as J,l as k,I as C,a2 as Q,H as X}from"./index-21iW_YCQ.js";import{C as Y}from"./config-global-BFP0ZBRT.js";import{T as S}from"./TextField-BMYIm1hK.js";import"./Select-BE-91QlZ.js";function oo(i){return N("MuiCircularProgress",i)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const io=["className","color","disableShrink","size","style","thickness","value","variant"];let $=i=>i,E,F,W,_;const g=44,no=U(E||(E=$`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),to=U(F||(F=$`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),ro=i=>{const{classes:o,variant:t,color:r,disableShrink:a}=i,e={root:["root",t,`color${u(r)}`],svg:["svg"],circle:["circle",`circle${u(t)}`,a&&"circleDisableShrink"]};return A(e,oo,o)},so=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(i,o)=>{const{ownerState:t}=i;return[o.root,o[t.variant],o[`color${u(t.color)}`]]}})(({ownerState:i,theme:o})=>s({display:"inline-block"},i.variant==="determinate"&&{transition:o.transitions.create("transform")},i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].main}),({ownerState:i})=>i.variant==="indeterminate"&&G(W||(W=$`
      animation: ${0} 1.4s linear infinite;
    `),no)),ao=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(i,o)=>o.svg})({display:"block"}),eo=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(i,o)=>{const{ownerState:t}=i;return[o.circle,o[`circle${u(t.variant)}`],t.disableShrink&&o.circleDisableShrink]}})(({ownerState:i,theme:o})=>s({stroke:"currentColor"},i.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},i.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:i})=>i.variant==="indeterminate"&&!i.disableShrink&&G(_||(_=$`
      animation: ${0} 1.4s ease-in-out infinite;
    `),to)),lo=P.forwardRef(function(o,t){const r=T({props:o,name:"MuiCircularProgress"}),{className:a,color:e="primary",disableShrink:b=!1,size:h=40,style:B,thickness:d=3.6,value:x=0,variant:j="indeterminate"}=r,L=V(r,io),p=s({},r,{color:e,disableShrink:b,size:h,thickness:d,value:x,variant:j}),f=ro(p),m={},c={},v={};if(j==="determinate"){const I=2*Math.PI*((g-d)/2);m.strokeDasharray=I.toFixed(3),v["aria-valuenow"]=Math.round(x),m.strokeDashoffset=`${((100-x)/100*I).toFixed(3)}px`,c.transform="rotate(-90deg)"}return n.jsx(so,s({className:H(f.root,a),style:s({width:h,height:h},c,B),ownerState:p,ref:t,role:"progressbar"},v,L,{children:n.jsx(ao,{className:f.svg,ownerState:p,viewBox:`${g/2} ${g/2} ${g} ${g}`,children:n.jsx(eo,{className:f.circle,style:m,ownerState:p,cx:g,cy:g,r:(g-d)/2,fill:"none",strokeWidth:d})})}))});function co(i){return N("MuiLoadingButton",i)}const l=z("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),go=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],uo=i=>{const{loading:o,loadingPosition:t,classes:r}=i,a={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${u(t)}`],endIcon:[o&&`endIconLoading${u(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${u(t)}`]},e=A(a,co,r);return s({},r,e)},ho=i=>i!=="ownerState"&&i!=="theme"&&i!=="sx"&&i!=="as"&&i!=="classes",xo=y(K,{shouldForwardProp:i=>ho(i)||i==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(i,o)=>[o.root,o.startIconLoadingStart&&{[`& .${l.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${l.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:i,theme:o})=>s({[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},i.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${l.loading}`]:{color:"transparent"}},i.loadingPosition==="start"&&i.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},i.loadingPosition==="end"&&i.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),po=y("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(i,o)=>{const{ownerState:t}=i;return[o.loadingIndicator,o[`loadingIndicator${u(t.loadingPosition)}`]]}})(({theme:i,ownerState:o})=>s({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(i.vars||i).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),fo=P.forwardRef(function(o,t){const r=P.useContext(O),a=Z(r,o),e=T({props:a,name:"MuiLoadingButton"}),{children:b,disabled:h=!1,id:B,loading:d=!1,loadingIndicator:x,loadingPosition:j="center",variant:L="text"}=e,p=V(e,go),f=q(B),m=x??n.jsx(lo,{"aria-labelledby":f,color:"inherit",size:16}),c=s({},e,{disabled:h,loading:d,loadingIndicator:m,loadingPosition:j,variant:L}),v=uo(c),I=d?n.jsx(po,{className:v.loadingIndicator,ownerState:c,children:m}):null;return n.jsxs(xo,s({disabled:h||d,id:f,ref:t},p,{variant:L,classes:v,ownerState:c,children:[c.loadingPosition==="end"?b:I,c.loadingPosition==="end"?I:b]}))});function mo(){const i=w(),[o,t]=P.useState(!1),r=P.useCallback(()=>{i.push("/")},[i]),a=n.jsxs(R,{display:"flex",flexDirection:"column",alignItems:"flex-end",children:[n.jsx(S,{fullWidth:!0,name:"email",label:"Email address",defaultValue:"hello@gmail.com",InputLabelProps:{shrink:!0},sx:{mb:3}}),n.jsx(M,{variant:"body2",color:"inherit",sx:{mb:1.5},children:"Forgot password?"}),n.jsx(S,{fullWidth:!0,name:"password",label:"Password",defaultValue:"@demo1234",InputLabelProps:{shrink:!0},type:o?"text":"password",InputProps:{endAdornment:n.jsx(Q,{position:"end",children:n.jsx(k,{onClick:()=>t(!o),edge:"end",children:n.jsx(C,{icon:o?"solar:eye-bold":"solar:eye-closed-bold"})})})},sx:{mb:3}}),n.jsx(fo,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"contained",onClick:r,children:"Sign in"})]});return n.jsxs(n.Fragment,{children:[n.jsxs(R,{gap:1.5,display:"flex",flexDirection:"column",alignItems:"center",sx:{mb:5},children:[n.jsx(D,{variant:"h5",children:"Sign in"}),n.jsxs(D,{variant:"body2",color:"text.secondary",children:["Don’t have an account?",n.jsx(M,{variant:"subtitle2",sx:{ml:.5},children:"Get started"})]})]}),a,n.jsx(J,{sx:{my:3,"&::before, &::after":{borderTopStyle:"dashed"}},children:n.jsx(D,{variant:"overline",sx:{color:"text.secondary",fontWeight:"fontWeightMedium"},children:"OR"})}),n.jsxs(R,{gap:1,display:"flex",justifyContent:"center",children:[n.jsx(k,{color:"inherit",children:n.jsx(C,{icon:"logos:google-icon"})}),n.jsx(k,{color:"inherit",children:n.jsx(C,{icon:"eva:github-fill"})}),n.jsx(k,{color:"inherit",children:n.jsx(C,{icon:"ri:twitter-x-fill"})})]})]})}function bo(){return n.jsxs(n.Fragment,{children:[n.jsx(X,{children:n.jsxs("title",{children:[" ",`Sign in - ${Y.appName}`]})}),n.jsx(mo,{})]})}export{bo as default};
