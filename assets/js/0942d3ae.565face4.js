"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=n(3117),r=(n(7294),n(3905));const o={sidebar_label:"Introduction",title:""},a="Open Policy Agent",p={unversionedId:"writing-policies/rego/open-policy-agent/intro",id:"writing-policies/rego/open-policy-agent/intro",title:"",description:"Open Policy Agent support has been introduced starting from these releases:",source:"@site/docs/writing-policies/rego/open-policy-agent/01-intro.md",sourceDirName:"writing-policies/rego/open-policy-agent",slug:"/writing-policies/rego/open-policy-agent/intro",permalink:"/writing-policies/rego/open-policy-agent/intro",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/open-policy-agent/01-intro.md",tags:[],version:"current",lastUpdatedAt:1667489441,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",title:""},sidebar:"docs",previous:{title:"Builtin Support",permalink:"/writing-policies/rego/builtin-support"},next:{title:"Create a New Policy",permalink:"/writing-policies/rego/open-policy-agent/create-policy"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Compatibility with existing policies",id:"compatibility-with-existing-policies",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-policy-agent"},"Open Policy Agent"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Open Policy Agent support has been introduced starting from these releases:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"kwctl: v0.2.0"),(0,r.kt)("li",{parentName:"ul"},"policy-server: v0.2.0"))),(0,r.kt)("p",null,"Open Policy Agent is a general purpose policy framework that uses the\nRego language to write policies."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Rego policies work by receiving an input to evaluate, and produce an\noutput as a response. In this sense, Open Policy Agent has no specific\ntooling for targeting writing policies for Kubernetes."),(0,r.kt)("p",null,"Specifically, policies in Open Policy Agent receive a JSON input and\nproduce a JSON output. When the Open Policy Agent server is set up to\nreceive admission review requests from Kubernetes, policies will\nreceive a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," object in JSON format with the\nobject to evaluate, and they have to produce a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"AdmissionReview"),"\nobject in return with the evaluation results."),(0,r.kt)("h2",{id:"compatibility-with-existing-policies"},"Compatibility with existing policies"),(0,r.kt)("p",null,"All policies can be compiled to the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," target (WebAssembly) with\nthe official ",(0,r.kt)("inlineCode",{parentName:"p"},"opa")," CLI tool."),(0,r.kt)("p",null,"In terms of policy execution, you can read more about the ",(0,r.kt)("a",{parentName:"p",href:"/writing-policies/rego/builtin-support"},"Open Policy\nAgent built-in support that is implemented in\nKubewarden"),"."))}u.isMDXComponent=!0}}]);