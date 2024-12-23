"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[77388],{5503:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"writing-policies/wasi","title":"","description":"Regular policy authors should never use plain WASI system interfaces","source":"@site/versioned_docs/version-1.7/writing-policies/wasi.md","sourceDirName":"writing-policies","slug":"/writing-policies/wasi","permalink":"/1.7/writing-policies/wasi","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/wasi.md","tags":[],"version":"1.7","lastUpdatedAt":1734954129000,"frontMatter":{"sidebar_label":"WASI","title":""},"sidebar":"docs","previous":{"title":"TypeScript","permalink":"/1.7/writing-policies/typescript"},"next":{"title":"Policy metadata","permalink":"/1.7/writing-policies/metadata"}}');var s=t(74848),o=t(28453);const a={sidebar_label:"WASI",title:""},c="WASI",r={},l=[{value:"Limitations",id:"limitations",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Communication protocol",id:"communication-protocol",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3},{value:"Settings validation",id:"settings-validation",level:3},{value:"Policy metadata",id:"policy-metadata",level:2},{value:"Template project",id:"template-project",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"wasi",children:"WASI"})}),"\n",(0,s.jsxs)(i.admonition,{type:"caution",children:[(0,s.jsx)(i.p,{children:"Regular policy authors should never use plain WASI system interfaces\nto write policies."}),(0,s.jsx)(i.p,{children:"This page is meant to be used by Kubewarden maintainers/low level\npolicy authors who want to experiment with bleeding edge WASM platforms."})]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Kubewarden WASI policies are supported starting from Kubewarden 1.7.0 release"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://wasi.dev/",children:"WASI"})," is a WebAssembly standard that provides a set of\ninterfaces that allow the execution of WebAssembly outside of the browser."]}),"\n",(0,s.jsx)(i.p,{children:"Thanks to WASI, it's possible to have a WebAssembly module that interacts\nwith system primitives like STDOUT, STDERR, STDIN, environment variables and\nmore."}),"\n",(0,s.jsxs)(i.p,{children:["Actually, many of the compilers used to compile Kubewarden policies\nproduce WebAssembly modules that targets the WASI interfaces.\nHowever, Kubewarden policies leverage the ",(0,s.jsx)(i.a,{href:"https://github.com/wapc",children:"waPC"}),"\nproject to implement a bi-directional communication between the\npolicy and the policy runtime (",(0,s.jsx)(i.code,{children:"kwctl"})," or ",(0,s.jsx)(i.code,{children:"policy-server"}),"); this communication\nprotocol is described ",(0,s.jsx)(i.a,{href:"/1.7/writing-policies/spec/intro-spec",children:"here"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"There are however some special cases when the waPC project cannot be\nused yet. In these limited circumstances it's possible to write a policy\njust by using the interfaces provided by WASI."}),"\n",(0,s.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(i.p,{children:"WASI policies should not be used under regular circumstances because\nthey suffer from the following limitations:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["No bi-directional communication, hence\n",(0,s.jsx)(i.a,{href:"/1.7/writing-policies/spec/host-capabilities/intro-host-capabilities",children:"host capabilities"}),"\nare not available"]}),"\n",(0,s.jsxs)(i.li,{children:["No ",(0,s.jsx)(i.a,{href:"/1.7/explanations/context-aware-policies",children:"context-aware"})," capabilities"]}),"\n",(0,s.jsx)(i.li,{children:"Inferior performance at evaluation time compared to waPC/Rego based policies"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,s.jsx)(i.p,{children:'The only reason to write a "plain WASI" policy is when the waPC communication\nmechanism cannot be leveraged.'}),"\n",(0,s.jsx)(i.p,{children:"Currently (as of June 2023), the only good reason to do that is when using the\nofficial Go compiler to produce a WebAssembly module."}),"\n",(0,s.jsxs)(i.p,{children:["Starting from the 1.21 release, the official Go compiler is able to produce WebAssembly\nmodules targeting the WASI interface. However, these modules cannot yet\nexport functions to the WebAssembly runtime. This limitation, tracked by\n",(0,s.jsx)(i.a,{href:"https://github.com/golang/go/issues/42372",children:"this dedicated issue"}),", prevents\nthe adoption of the waPC protocol."]}),"\n",(0,s.jsxs)(i.p,{children:["Generally speaking, we advice to write Kubewarden Go policies using the TinyGo\ncompiler, as described ",(0,s.jsx)(i.a,{href:"/1.7/writing-policies/go/intro-go",children:"here"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["However, some complex Go code bases cannot be compiled using the TinyGo compiler.\nThis includes, for example, code bases like ",(0,s.jsx)(i.a,{href:"https://github.com/google/cel-go",children:"CEL-go"}),"\nor ",(0,s.jsx)(i.a,{href:"https://github.com/kyverno/kyverno/",children:"kyverno"}),". In these circumstances, the\nusage of the official Go compiler can be beneficial."]}),"\n",(0,s.jsx)(i.h2,{id:"communication-protocol",children:"Communication protocol"}),"\n",(0,s.jsx)(i.p,{children:"This section describes how to write a plain WASI policy."}),"\n",(0,s.jsx)(i.p,{children:"The code has to be written as a regular CLI program. The program must take\nthe following subcommands:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"validate"}),": this command is invoked by the policy engine to evaluate\nan admission request"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"validate-settings"}),": this command is invoked by the policy engine to\nvalidate the policy settings"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In both cases, the data to be validated is provided via the STDIN. The policy\nmust provide the answer via the STDOUT.\nThe STDERR can be used to provide debug or error messages."}),"\n",(0,s.jsx)(i.h3,{id:"validation",children:"Validation"}),"\n",(0,s.jsxs)(i.p,{children:["The validation of a request is done when the policy CLI program is invoked using\nthe ",(0,s.jsx)(i.code,{children:"validate"})," subcommand."]}),"\n",(0,s.jsxs)(i.p,{children:["The STDIN must contain a JSON document describing a ",(0,s.jsx)(i.code,{children:"ValidationRequest"})," object.\nThe policy must to write to the STDOUT a JSON document that contains a\n",(0,s.jsx)(i.code,{children:"ValidationResponse"})," object."]}),"\n",(0,s.jsxs)(i.p,{children:["Both the ",(0,s.jsx)(i.code,{children:"ValidationRequest"})," and ",(0,s.jsx)(i.code,{children:"ValidationResponse"})," objects are described\n",(0,s.jsx)(i.a,{href:"/1.7/writing-policies/spec/validating-policies",children:"here"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"mutation",children:"Mutation"}),"\n",(0,s.jsxs)(i.p,{children:["Mutating policies work in the same way as validating ones. The policy CLI program\nis invoked using the ",(0,s.jsx)(i.code,{children:"validate"})," subcommand."]}),"\n",(0,s.jsxs)(i.p,{children:["The STDIN must contain a JSON document describing a ",(0,s.jsx)(i.code,{children:"ValidationRequest"})," object.\nThe policy must to write to the STDOUT a JSON document that contains a\n",(0,s.jsx)(i.code,{children:"ValidationResponse"})," object."]}),"\n",(0,s.jsxs)(i.p,{children:["Both the ",(0,s.jsx)(i.code,{children:"ValidationRequest"})," and ",(0,s.jsx)(i.code,{children:"ValidationResponse"})," objects are described\n",(0,s.jsx)(i.a,{href:"/1.7/writing-policies/spec/validating-policies",children:"here"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["When a mutation has to be done, the ",(0,s.jsx)(i.code,{children:"ValidationResponse"})," object must have a\nkey ",(0,s.jsx)(i.code,{children:"mutated_object"})," that contains the object that has to be created.\nThis is described ",(0,s.jsx)(i.a,{href:"/1.7/writing-policies/spec/mutating-policies",children:"here"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"settings-validation",children:"Settings validation"}),"\n",(0,s.jsxs)(i.p,{children:["The policy must provide a subcommand named ",(0,s.jsx)(i.code,{children:"validate-settings"}),". This command\nis used to validate the settings that have been provided by the user."]}),"\n",(0,s.jsxs)(i.p,{children:["The program must receive on the STDIN a JSON object that holds the settings\nprovided by the user.\nIt will then validate them and write a ",(0,s.jsx)(i.code,{children:"SettingsValidationResponse"})," object\nto the STDOUT."]}),"\n",(0,s.jsxs)(i.p,{children:["The format of the ",(0,s.jsx)(i.code,{children:"SettingsValidationResponse"})," and the settings validation\nprocess is described ",(0,s.jsx)(i.a,{href:"/1.7/writing-policies/spec/settings",children:"here"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"policy-metadata",children:"Policy metadata"}),"\n",(0,s.jsxs)(i.p,{children:["Each Kubewarden policy must be annotated via the ",(0,s.jsx)(i.code,{children:"kwctl annotate"})," command.\nThe policy metadata of a plain WASI policy must provide this value:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"executionMode: wasi\n"})}),"\n",(0,s.jsx)(i.h2,{id:"template-project",children:"Template project"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/kubewarden/go-wasi-policy-template",children:"This GitHub repository"}),"\ncontains a template of a Go-based policy that leverages the WASI protocol."]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>c});var n=t(96540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);