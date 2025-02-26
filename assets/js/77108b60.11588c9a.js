"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[75545],{46422:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tutorials/writing-policies/swift","title":"Swift","description":"Kubewarden policies with Swift","source":"@site/docs/tutorials/writing-policies/swift.md","sourceDirName":"tutorials/writing-policies","slug":"/tutorials/writing-policies/swift","permalink":"/next/tutorials/writing-policies/swift","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/tutorials/writing-policies/swift.md","tags":[],"version":"current","lastUpdatedAt":1740584771000,"sidebarPosition":50,"frontMatter":{"sidebar_label":"Swift","sidebar_position":50,"title":"Swift","description":"Kubewarden policies with Swift","keywords":["kubewarden","kubernetes","writing policies","swift"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","swift"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"C#","permalink":"/next/tutorials/writing-policies/dotnet"},"next":{"title":"Typescript","permalink":"/next/tutorials/writing-policies/typescript"}}');var o=i(74848),n=i(28453);const r={sidebar_label:"Swift",sidebar_position:50,title:"Swift",description:"Kubewarden policies with Swift",keywords:["kubewarden","kubernetes","writing policies","swift"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","swift"],"doc-persona":["kubewarden-policy-developer"]},a=void 0,c={},l=[{value:"Current State",id:"current-state",level:2},{value:"More examples",id:"more-examples",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/swift"})}),"\n",(0,o.jsxs)(t.p,{children:["As stated on the ",(0,o.jsx)(t.a,{href:"https://swift.org/",children:"official website"}),":"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Swift is a general-purpose programming language that\u2019s approachable for newcomers and powerful for experts.\nIt is fast, modern, safe, and a joy to write."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The swift compiler doesn't yet have WebAssembly support, however the\n",(0,o.jsx)(t.a,{href:"https://swiftwasm.org/",children:"SwiftWasm"})," project provides a patched compiler with this\ncapability."]}),"\n",(0,o.jsx)(t.p,{children:"The SwiftWasm team is working to merge these changes into the Swift project.\nIn the meantime, you can use the tool chain provided by the SwiftWasm project to build Kubewarden policies."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"You don't need an Apple system to write or run Swift code. Everything\ncan be done also on a Linux machine or on Windows (by using Docker for Windows)."})}),"\n",(0,o.jsx)(t.h2,{id:"current-state",children:"Current State"}),"\n",(0,o.jsx)(t.p,{children:"Policy authors can use the following resources:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/policy-sdk-swift",children:"Kubewarden Swift SDK"}),": this provides a set of ",(0,o.jsx)(t.code,{children:"struct"}),"s and functions that simplify the process of writing policies."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/swift-policy-template",children:"Kubewarden Swift template project"}),": use this template to scaffold a Swift-based policy.\nThe template comes with a working policy and a set of GitHub Actions to automate its lifecycle."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"There are no severe limitations with Swift, only some minor issues:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["It's critical to perform some post-build optimizations before using the\npolicy ",(0,o.jsx)(t.em,{children:'"in production"'}),":","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Strip the Wasm module via ",(0,o.jsx)(t.code,{children:"wasm-strip"})," to reduce its size"]}),"\n",(0,o.jsxs)(t.li,{children:["Optimize the Wasm module via ",(0,o.jsx)(t.code,{children:"wasm-opt"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The GitHub Action provided by the template repository already takes care of that."}),"\n",(0,o.jsx)(t.h2,{id:"more-examples",children:"More examples"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/pod-runtime-class-policy/tree/swift-implementation",children:"This GitHub repository branch"}),"\nhas a Kubewarden Policy written in Swift."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(96540);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);