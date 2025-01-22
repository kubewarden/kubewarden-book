"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[15244],{5778:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"writing-policies/rego/builtin-support","title":"Builtin support","description":"The Kubewarden provided support for executing wasm binaries.","source":"@site/versioned_docs/version-1.10/writing-policies/rego/02-builtin-support.md","sourceDirName":"writing-policies/rego","slug":"/writing-policies/rego/builtin-support","permalink":"/1.10/writing-policies/rego/builtin-support","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rego/02-builtin-support.md","tags":[],"version":"1.10","lastUpdatedAt":1737554979000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Builtin Support","title":"Builtin support","description":"The Kubewarden provided support for executing wasm binaries.","keywords":["kubewarden","kubernetes","builtin wasm support"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","built-in-support"]},"sidebar":"docs","previous":{"title":"Rego","permalink":"/1.10/writing-policies/rego/intro-rego"},"next":{"title":"Introduction","permalink":"/1.10/writing-policies/rego/open-policy-agent/intro"}}');var o=t(74848),s=t(28453);const r={sidebar_label:"Builtin Support",title:"Builtin support",description:"The Kubewarden provided support for executing wasm binaries.",keywords:["kubewarden","kubernetes","builtin wasm support"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","built-in-support"]},l="Builtin support",p={},u=[{value:"Executing policies with missing built-ins",id:"executing-policies-with-missing-built-ins",level:2}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"builtin-support",children:"Builtin support"})}),"\n",(0,o.jsxs)(i.p,{children:["Building a policy for the ",(0,o.jsx)(i.code,{children:"wasm"})," target is only half of the problem,\nit needs to be executed."]}),"\n",(0,o.jsxs)(i.p,{children:["The Open Policy Agent team has a dedicated page you can check in order\nto ",(0,o.jsx)(i.a,{href:"https://www.openpolicyagent.org/docs/latest/policy-reference/#built-in-functions",children:"find out the built-in support\nlevel"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"When building a Rego policy into a WebAssembly module, some of these\nbuilt-in functions are going to be implemented inside of the Wasm file\nitself (the built-ins marked with a green check in the previously\nlinked table) -- regardless of the runtime; while others have to be\nprovided at execution time by the WebAssembly runtime evaluating the\nmodule."}),"\n",(0,o.jsxs)(i.p,{children:["The built-ins marked as ",(0,o.jsx)(i.code,{children:"SDK-dependent"})," are the ones that the host has\nto implement -- in this case, Kubewarden. Open Policy Agent and\nGatekeeper may use them depending on the needs of the policy. In any\ncase, this built-ins are exposed to the policy and any new or existing\npolicy could depend on them."]}),"\n",(0,o.jsx)(i.p,{children:"There are still some built-ins that are not yet provided by us,\nhowever, based on the policies we have seen in the open, the ones we\nalready support should be enough for the majority of Kubernetes users."}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/policy-evaluator/issues/56",children:"This GitHub issue"}),"\nkeeps track of the Rego built-ins we have still to implement. Feel free to\ncomment over there to prioritize our work."]}),"\n",(0,o.jsx)(i.h2,{id:"executing-policies-with-missing-built-ins",children:"Executing policies with missing built-ins"}),"\n",(0,o.jsxs)(i.p,{children:["When a policy is instantiated with ",(0,o.jsx)(i.code,{children:"kwctl"})," or with ",(0,o.jsx)(i.code,{children:"policy-server"}),",\nthe list of built-ins used by the policy will be inspected, and if any\nof the used built-ins is missing, the program will abort execution\nlogging a fatal error reporting what are the missing built-ins."]})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var n=t(96540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);