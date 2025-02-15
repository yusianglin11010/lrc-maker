import{R as s,a as O,A as m,s as w,S as j,L as g,t as G,j as e,O as I,C as L,D as E,p as V,b as A,c as B,U as M}from"./index-x1279g5m.js";import{c as D}from"./gistapi-wsVnCHGW.js";import{l as H}from"./lrc-file-name-BlWFRsDa.js";const c={autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",spellCheck:!1},d=(a,l)=>{const t=((n,p)=>n??p)(l,s.useRef(null));return s.useEffect(()=>{t.current&&(t.current.value=a)},[a,t]),{ref:t,defaultValue:a}},$=({lrcState:a,lrcDispatch:l})=>{const{prefState:f,lang:t,trimOptions:n}=s.useContext(O),p=s.useCallback(o=>{l({type:m.parse,payload:{text:o.target.value,options:n}})},[l,n]),b=s.useCallback(o=>{const{name:i,value:U}=o.target;l({type:m.info,payload:{name:i,value:U}})},[l]),C=w(a,f),x=s.useRef(null),y=s.useCallback(()=>{sessionStorage.setItem(j.editorDetailsOpen,x.current.open.toString())},[]),k=s.useMemo(()=>sessionStorage.getItem(j.editorDetailsOpen)!=="false",[]),r=s.useRef(null),[F,R]=s.useState(void 0),S=s.useCallback(()=>{R(o=>(o&&URL.revokeObjectURL(o),URL.createObjectURL(new Blob([r.current.value],{type:"text/plain;charset=UTF-8"}))))},[]),T=s.useCallback(o=>{if(o.target.files===null||o.target.files.length===0)return;const i=new FileReader;i.addEventListener("load",()=>{l({type:m.parse,payload:{text:i.result,options:n}})}),i.readAsText(o.target.files[0],"UTF-8")},[l,n]),v=s.useCallback(()=>{var o;(o=r.current)==null||o.select(),document.execCommand("copy")},[]),u=s.useMemo(()=>H(a.info),[a.info]),h=s.useMemo(()=>localStorage.getItem(g.token)!==null&&localStorage.getItem(g.gistId)!==null,[]),N=s.useCallback(()=>{setTimeout(()=>{const o=prompt(t.editor.saveFileName,u);o&&D(o,r.current.value).catch(i=>{G.pub({type:"warning",text:i.message})})},500)},[u,t]);return e.jsxs("div",{className:"app-editor",children:[e.jsxs("details",{ref:x,open:k,onToggle:y,children:[e.jsx("summary",{children:t.editor.metaInfo}),e.jsxs("section",{className:"app-editor-infobox",onBlur:b,children:[e.jsx("label",{htmlFor:"info-ti",children:"[ti:"}),e.jsx("input",{id:"info-ti",name:"ti",placeholder:t.editor.title,...c,...d(a.info.get("ti")||"")}),e.jsx("label",{htmlFor:"info-ti",children:"]"}),e.jsx("label",{htmlFor:"info-ar",children:"[ar:"}),e.jsx("input",{id:"info-ar",name:"ar",placeholder:t.editor.artist,...c,...d(a.info.get("ar")||"")}),e.jsx("label",{htmlFor:"info-ar",children:"]"}),e.jsx("label",{htmlFor:"info-al",children:"[al:"}),e.jsx("input",{id:"info-al",name:"al",placeholder:t.editor.album,...c,...d(a.info.get("al")||"")}),e.jsx("label",{htmlFor:"info-al",children:"]"})]})]}),e.jsxs("section",{className:"editor-tools",children:[e.jsxs("label",{className:"editor-tools-item ripple",title:t.editor.uploadText,children:[e.jsx("input",{hidden:!0,type:"file",accept:"text/*, .txt, .lrc",onChange:T}),e.jsx(I,{})]}),e.jsx("button",{className:"editor-tools-item ripple",title:t.editor.copyText,onClick:v,children:e.jsx(L,{})}),e.jsx("a",{className:"editor-tools-item ripple",title:t.editor.downloadText,href:F,onClick:S,download:u,children:e.jsx(E,{})}),e.jsx("a",{title:t.editor.saveToGist,href:h?void 0:V(A.gist),className:"editor-tools-item ripple",onClick:h?N:void 0,children:e.jsx(B,{})}),e.jsx("a",{title:t.editor.utils,href:"/lrc-utils/",className:"editor-tools-item ripple",children:e.jsx(M,{})})]}),e.jsx("textarea",{className:"app-textarea","aria-label":"lrc input here",onBlur:p,...c,...d(C,r)})]})};export{$ as Eidtor};
