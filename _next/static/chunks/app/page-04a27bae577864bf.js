(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1299:function(e,t,r){Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.t.bind(r,5935,23)),Promise.resolve().then(r.t.bind(r,9577,23)),Promise.resolve().then(r.bind(r,3333)),Promise.resolve().then(r.bind(r,614)),Promise.resolve().then(r.bind(r,7952)),Promise.resolve().then(r.bind(r,5534)),Promise.resolve().then(r.bind(r,4847)),Promise.resolve().then(r.bind(r,599))},3333:function(e,t,r){"use strict";r.r(t);var n=r(3827);t.default=()=>(0,n.jsx)("span",{className:"text-rose-900 hover:text-rose-500 cursor-pointer",onClick:e=>{e.target.classList.add("animate-pulse"),setTimeout(()=>{e.target.classList.remove("animate-pulse")},2e3),navigator.clipboard.writeText("npx create-next-app -e https://github.com/finom/vovk-hello-world")},children:(0,n.jsx)("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})})},614:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(3827),o=r(4090),s=r(5009),l=r(8792);function i(){var e;let[t,r]=(0,o.useState)();return(0,n.jsxs)("div",{className:"text-center mt-4",children:[(0,n.jsx)("button",{className:"py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors",onClick:async()=>{r(await s.HelloController.getHello())},children:"Get Greeting from the Server"}),(0,n.jsx)("div",{className:"mt-2",children:null!==(e=null==t?void 0:t.greeting)&&void 0!==e?e:(0,n.jsx)(n.Fragment,{children:"\xa0"})}),(0,n.jsxs)("div",{className:"max-w-3xl mx-auto text-xs mt-2 delay-1000 transition-opacity duration-1000 ".concat(t?"opacity-100":"opacity-0"),children:["Hint: the endpoint for this example is implemented with"," ",(0,n.jsx)(l.default,{target:"_blank",className:"link",href:"https://docs.vovk.dev/docs/api/#generatestaticapi",children:"generateStaticAPI"})," ","and statically hosted on GitHub Pages. Rest of the examples below are served from the"," ",(0,n.jsx)(l.default,{href:"https://vovk-examples.vercel.app/",className:"link",target:"_blank",children:"Examples Website API"})," ","by using pre-built"," ",(0,n.jsx)(l.default,{href:"https://npmjs.com/package/vovk-examples",className:"link",target:"_blank",children:"vovk-examples"})," ","NPM package."]})]})}},7952:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(3827),o=r(4090),s=r(7019);function l(){let[e,t]=(0,o.useState)(null),[r,l]=(0,o.useState)(null),[i,a]=(0,o.useState)(""),[c,d]=(0,o.useState)(""),[u,h]=(0,o.useState)(!1),p=async e=>{e.preventDefault();try{t(await s.FormController.createUser({body:{name:i,email:c},disableClientValidation:u})),l(null)}catch(e){l(e),t(null)}};return(0,n.jsxs)("form",{onSubmit:p,children:[(0,n.jsx)("input",{type:"text",placeholder:"Name",value:i,onChange:e=>a(e.target.value)}),(0,n.jsx)("input",{type:"text",placeholder:"Email",value:c,onChange:e=>d(e.target.value)}),(0,n.jsxs)("label",{className:"block mb-4",children:[(0,n.jsx)("input",{type:"checkbox",className:"mr-2",checked:u,onChange:e=>h(e.target.checked)}),"Disable client-side validation"]}),(0,n.jsx)("button",{children:"Submit"}),e&&(0,n.jsxs)("div",{className:"text-left",children:[(0,n.jsx)("h3",{children:"Response:"}),(0,n.jsx)("pre",{children:JSON.stringify(e,null,2)})]}),r&&(0,n.jsxs)("div",{children:["❌ ",String(r)]})]})}},5534:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(8048),o=r(8592),s=r(3827),l=r(4090),i=r(7019);function a(){let[e,t]=(0,l.useState)([]),[r,a]=(0,l.useState)(""),[c,d]=(0,l.useState)(null),u=async()=>{if(!r)return;a("");let s={role:"user",content:r};t(e=>[...e,s]);try{try{var l=[],c=(0,o._)(l,await i.OpenAiController.createChatCompletion({body:{messages:[...e,s]}}));for await(let e of(t(e=>[...e,{role:"assistant",content:""}]),c))t(t=>{var r,n,o;let s=t[t.length-1];return[...t.slice(0,-1),{...s,content:s.content+(null!==(o=null===(n=e.choices[0])||void 0===n?void 0:null===(r=n.delta)||void 0===r?void 0:r.content)&&void 0!==o?o:"")}]})}catch(e){var u=e,h=!0}finally{(0,n._)(l,u,h)}}catch(e){d(e)}};return(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),u()},children:[e.map((e,t)=>(0,s.jsxs)("div",{children:["assistant"===e.role?"\uD83E\uDD16":"\uD83D\uDC64"," ",e.content||"..."]},t)),c&&(0,s.jsxs)("div",{children:["❌ ",c.message]}),(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("input",{type:"text",placeholder:"Type a message...",value:r,onChange:e=>a(e.currentTarget.value)}),(0,s.jsx)("button",{disabled:!r,className:"button",children:"Send"})]})]})}},4847:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(3827),o=r(4090),s=r(7019);function l(){let e="undefined"!=typeof document&&"ontouchstart"in document.documentElement,[t,l]=(0,o.useState)(e?"333944026345847228099687":"337751842839865299034216387"),[i,a]=(0,o.useState)(),[c,d]=(0,o.useState)(!1),u=/^-?\d+$/;(0,o.useEffect)(()=>{s.WorkerService.use(new Worker(r.tu(new URL(r.p+r.u(686),r.b))))},[]);let h=async()=>{u.test(t)&&(d(!0),a(await s.WorkerService.factorize(BigInt(t))),d(!1))};return(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h()},children:[(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)("input",{type:"text",placeholder:"Type a large number...",value:t,onChange:e=>l(e.currentTarget.value)}),(0,n.jsx)("button",{disabled:!u.test(t)||c,children:c?"Calculating...":"Factorize"})]}),(0,n.jsx)("div",{className:"break-all max-h-96 overflow-auto text-center",children:null==i?void 0:i.map((e,t)=>(0,n.jsx)("div",{children:e.toString()},t))})]})}},599:function(e,t,r){"use strict";r.r(t),r.d(t,{TopNav:function(){return s}});var n=r(3827),o=r(4090);let s=()=>{let[e,t]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=()=>{let e=localStorage.getItem("theme");return e?"dark"===e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},r=e();document.documentElement.classList.toggle("dark",r),t(r),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{let r=e();document.documentElement.classList.toggle("dark",r),t(r)})},[]);let r=(0,o.useCallback)(()=>{let e=document.documentElement.classList.contains("dark");document.documentElement.classList.toggle("dark",!e),localStorage.setItem("theme",e?"light":"dark"),t(!e)},[]);return(0,n.jsxs)("nav",{className:"flex items-center gap-5",children:[(0,n.jsx)("a",{href:"https://github.com/finom/vovk",target:"_blank",rel:"noopener",children:(0,n.jsx)("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:(0,n.jsx)("path",{d:"M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}),(0,n.jsx)("a",{href:"https://discord.gg/fQWk2rh8",target:"_blank",rel:"noopener",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 127.14 96.36",width:24,children:(0,n.jsx)("path",{fill:"currentColor",d:"M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"})})}),(0,n.jsx)("a",{onClick:r,className:"cursor-pointer",hidden:!0,children:e?(0,n.jsx)("svg",{width:"20px",height:"20px",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",children:(0,n.jsx)("path",{d:"M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,n.jsxs)("svg",{width:"20px",height:"20px",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M22 12L23 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M12 2V1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M12 23V22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M20 20L19 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M20 4L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 20L5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 4L5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M1 12L2 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})};t.default=s},9151:function(e){"use strict";e.exports=JSON.parse('{"HelloController":{"_controllerName":"HelloController","_prefix":"hello","_handlers":{"getHello":{"path":"greeting.json","httpMethod":"GET"}}}}')}},function(e){e.O(0,[429,302,971,69,744],function(){return e(e.s=1299)}),_N_E=e.O()}]);