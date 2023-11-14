"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Writing Policies",title:"Writing Kubewarden policies",description:"An introduction to writing Kubewarden policies.",keywords:["kubewarden","kubernetes","writing policies"],"doc-type":"explanation","doc-topic":"writing-policies"},a=void 0,s={unversionedId:"writing-policies/index",id:"version-1.9/writing-policies/index",title:"Writing Kubewarden policies",description:"An introduction to writing Kubewarden policies.",source:"@site/versioned_docs/version-1.9/writing-policies/index.md",sourceDirName:"writing-policies",slug:"/writing-policies/",permalink:"/writing-policies/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/index.md",tags:[],version:"1.9",lastUpdatedAt:1699969709,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{sidebar_label:"Writing Policies",title:"Writing Kubewarden policies",description:"An introduction to writing Kubewarden policies.",keywords:["kubewarden","kubernetes","writing policies"],"doc-type":"explanation","doc-topic":"writing-policies"},sidebar:"docs",previous:{title:"Common tasks",permalink:"/tasks"},next:{title:"Introduction to Rust",permalink:"/writing-policies/rust/intro-rust"}},l={},p=[{value:"Programming language requirements",id:"programming-language-requirements",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section introduces Kubewarden policies using traditional computing analogies."),(0,r.kt)("p",null,"A Kubewarden policy is like a program that does one job.\nIt receives input data, performs computation with that data and returns a result."),(0,r.kt)("p",null,"The input data is Kubernetes admission requests.\nThe result of the computation is a validation response,\nwhich tells Kubernetes whether to accept, reject, or mutate the input data, the admission request."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-server"},"policy-server"),"\ncomponent of Kubewarden performs these operations."),(0,r.kt)("p",null,"The policy server doesn't include any data processing capability.\nYou add processing capabilities at runtime with add-ons.\nThese add-ons are the Kubewarden policies."),(0,r.kt)("p",null,"So, a Kubewarden policy is like a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Plug-in_%28computing%29"},"traditional plug-in"),'\nof the "policy server" program.'),(0,r.kt)("p",null,"To recap:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubewarden policies are plug-ins that expose a set of well-defined\nfunctionalities (validate a Kubernetes request object, validate policy settings provided by the user, and other functions) using a well-defined API"),(0,r.kt)("li",{parentName:"ul"},'Policy server is the "main" program that loads the plug-ins\n(aka policies) and uses their exposed functionalities to accept, reject, or mutate Kubernetes requests')),(0,r.kt)("p",null,"Writing Kubewarden policies consists of writing the validation business logic and then exposing it through a well-defined API."),(0,r.kt)("h2",{id:"programming-language-requirements"},"Programming language requirements"),(0,r.kt)("p",null,"You supply Kubewarden policies as\n",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," binaries."),(0,r.kt)("p",null,"Policy authors can write policies using any programming language that supports WebAssembly as a compilation target.\nThe list of supported language is constantly evolving, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/appcypher/awesome-wasm-langs"},"this page")," provides a nice overview of the WebAssembly landscape."),(0,r.kt)("p",null,"Currently, WebAssembly doesn't have an official way to share complex data types between the host and a WebAssembly guest.\nTo overcome this limitation Kubewarden policies use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wapc"},"waPC")," project, which provides a bi-directional communication channel."),(0,r.kt)("p",null,"So, your programming language of choice must have an available waPC guest SDK.\nIf that's not the case, feel free to reach out.\nThe project team can help you overcome this limitation."))}d.isMDXComponent=!0}}]);