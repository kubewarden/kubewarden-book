"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[70105],{66357:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"writing-policies/go/intro-go","title":"","description":"Go\'s support for WebAssembly is fast evolving. The contents","source":"@site/versioned_docs/version-1.7/writing-policies/go/01-intro-go.md","sourceDirName":"writing-policies/go","slug":"/writing-policies/go/intro-go","permalink":"/1.7/writing-policies/go/intro-go","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/01-intro-go.md","tags":[],"version":"1.7","lastUpdatedAt":1739260546000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Introduction to Go","title":""},"sidebar":"docs","previous":{"title":"Building & Distributing Policies","permalink":"/1.7/writing-policies/rust/build-and-distribute"},"next":{"title":"Create a New Policy","permalink":"/1.7/writing-policies/go/scaffold"}}');var o=t(74848),s=t(28453);const r={sidebar_label:"Introduction to Go",title:""},a="Go",c={},l=[{value:"Limitations",id:"limitations",level:2},{value:"Tooling",id:"tooling",level:2},{value:"Getting TinyGo dependencies",id:"getting-tinygo-dependencies",level:2}];function d(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"Go's support for WebAssembly is fast evolving. The contents\nof this page were written during June 2023, hence they could be outdated."})}),"\n",(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"go",children:"Go"})}),"\n",(0,o.jsxs)(i.p,{children:["Currently the official Go compiler cannot produce WebAssembly binaries\nthat can be run ",(0,o.jsx)(i.strong,{children:"outside"})," of the browser.\n",(0,o.jsx)(i.a,{href:"https://github.com/golang/go/issues/31105",children:"This upstream issue"})," is tracking\nthe evolution of this topic.\nDue to that, it's not possible to use the Go compiler to write Kubewarden policies."]}),"\n",(0,o.jsxs)(i.p,{children:["Luckily there's another Go compiler that is capable of building WebAssembly\nbinaries that can be used by Kubewarden. This compiler is called ",(0,o.jsx)(i.a,{href:"https://tinygo.org/",children:"TinyGo"}),":"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"TinyGo is a project to bring the Go programming language to microcontrollers\nand modern web browsers by creating a new compiler based on LLVM."}),"\n",(0,o.jsxs)(i.p,{children:["You can compile and run TinyGo programs on many different microcontroller\nboards such as the BBC micro",":bit"," and the Arduino Uno."]}),"\n",(0,o.jsx)(i.p,{children:"TinyGo can also be used to produce WebAssembly (Wasm) code which is very\ncompact in size."}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsxs)(i.p,{children:["TinyGo doesn't yet support all the Go features (see ",(0,o.jsx)(i.a,{href:"https://tinygo.org/lang-support/",children:"here"}),"\nto see the current project status). Currently its biggest limitation\nis the lack of a fully supported ",(0,o.jsx)(i.code,{children:"reflect"})," package. That leads to the inability to compile\nofficial Kubernetes Go API types (e.g.: ",(0,o.jsx)(i.code,{children:"k8s.io/api/core/v1"}),")."]}),"\n",(0,o.jsx)(i.p,{children:"Kubewarden policies need to process JSON data like the policy settings and\nthe actual request received by Kubernetes."}),"\n",(0,o.jsx)(i.p,{children:"Despite TinyGo's current limitations, it's still easy and doable to write\nKubewarden validation policies with it."}),"\n",(0,o.jsx)(i.h2,{id:"tooling",children:"Tooling"}),"\n",(0,o.jsxs)(i.p,{children:["Writing Kubewarden policies requires a version of TinyGo greater than ",(0,o.jsx)(i.code,{children:"v0.28.1"}),"."]}),"\n",(0,o.jsx)(i.admonition,{type:"warning",children:(0,o.jsx)(i.p,{children:"Using an older version of TinyGo will result in runtime errors due to the limited support for Go reflection."})}),"\n",(0,o.jsx)(i.p,{children:"These Go libraries are extremely useful when writing a Kubewarden policy:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/policy-sdk-go",children:"Kubewarden Go SDK"}),": provides a series of\nstructures and functions that reduce the amount of code to write. It also provides test helpers."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/k8s-objects",children:"Kubernetes Go types"}),": The\n",(0,o.jsx)(i.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/staging/src/k8s.io",children:"official Kubernetes Go Types"}),"\ncannot be used with TinyGo. This module provides all the\nKubernetes Types in a TinyGo-friendly way."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/tidwall/gjson",children:"gjson"}),": It provides a powerful query language that allows\nquick navigation of JSON documents and data retrieval. This library doesn't use the\n",(0,o.jsx)(i.code,{children:"encoding/json"})," package provided by Go's stdlib, hence it's usable with TinyGo."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/deckarep/golang-set",children:"mapset"}),": provides a Go implementation of the\n",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",children:"Set"}),"\ndata structure. This library significantly reduces the amount of code to be written,\nthat's because operations like Set ",(0,o.jsx)(i.code,{children:"union"}),", ",(0,o.jsx)(i.code,{children:"intersection"}),", ",(0,o.jsx)(i.code,{children:"difference"})," are pretty frequent inside\nof policies."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Last but not least, the Kubewarden project provides a\n",(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/go-policy-template",children:"template Go policy project"}),"\nthat can be used to quickly create Kubewarden policies written in Go."]}),"\n",(0,o.jsx)(i.h2,{id:"getting-tinygo-dependencies",children:"Getting TinyGo dependencies"}),"\n",(0,o.jsxs)(i.p,{children:["The easiest way to get TinyGo is by using the upstream container images.\nOfficial releases can be found ",(0,o.jsx)(i.a,{href:"https://hub.docker.com/r/tinygo/tinygo",children:"here"}),", while\nbuilds from the development branch are automatically pushed\n",(0,o.jsx)(i.a,{href:"https://hub.docker.com/r/tinygo/tinygo-dev",children:"here"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["If needed, checkout TinyGo's ",(0,o.jsx)(i.a,{href:"https://tinygo.org/getting-started/",children:"getting started"})," page for\nmore information."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(96540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);