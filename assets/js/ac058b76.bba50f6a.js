"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[69699],{32133:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"reference/spec/host-capabilities/intro-host-capabilities","title":"Host capabilities specification","description":"Host capabilities specification.","source":"@site/docs/reference/spec/host-capabilities/01-intro-host-capabilities.md","sourceDirName":"reference/spec/host-capabilities","slug":"/reference/spec/host-capabilities/intro-host-capabilities","permalink":"/next/reference/spec/host-capabilities/intro-host-capabilities","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/reference/spec/host-capabilities/01-intro-host-capabilities.md","tags":[],"version":"current","lastUpdatedAt":1738055123000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Host capabilities specification","title":"Host capabilities specification","description":"Host capabilities specification.","keywords":["kubewarden","kubernetes","policy specification","host capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","introduction"]},"sidebar":"docs","previous":{"title":"Context aware policies","permalink":"/next/reference/spec/context-aware-policies"},"next":{"title":"Signature verifier policies","permalink":"/next/reference/spec/host-capabilities/signature-verifier-policies"}}');var n=t(74848),o=t(28453);const a={sidebar_label:"Host capabilities specification",title:"Host capabilities specification",description:"Host capabilities specification.",keywords:["kubewarden","kubernetes","policy specification","host capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","introduction"]},c=void 0,r={},l=[];function p(e){const i={a:"a",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/host-capabilities/intro-host-capabilities"})}),"\n",(0,n.jsxs)(i.p,{children:["During evaluation, Kubewarden policies can access extra capabilities offered by the host environment.\nThis mechanism uses an approach similar to traditional\n",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Remote_procedure_call",children:"RPC"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"This is what happens when a request is issued by a Kubewarden policy:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Kubewarden policy:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Invokes the capability offered by the host environment."}),"\n",(0,n.jsx)(i.li,{children:"The invocation is a blocking operation,\nhence the policy code will wait until the host provides an answer."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Host environment:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A capability invocation is received."}),"\n",(0,n.jsx)(i.li,{children:"The host performs the operation."}),"\n",(0,n.jsx)(i.li,{children:"The host provides an answer to the policy, which could be either a success or a failure."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Kubewarden policy:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The code receives the answer from the host and resumes execution."}),"\n",(0,n.jsx)(i.li,{children:"The host response is handled accordingly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The host capabilities feature is implemented using\n",(0,n.jsx)(i.a,{href:"https://wapc.io/",children:"waPC"}),".\nEach capability uses these details:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"waPC function name: The name of the capability exposed by the host."}),"\n",(0,n.jsx)(i.li,{children:"Input payload: The body of the request made by the policy.\nThis is always encoded in JSON format."}),"\n",(0,n.jsx)(i.li,{children:"Output payload: The body of the response coming from the host. This is always encoded in JSON format."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"When something goes wrong, the host replies with an error.\nThis is done using the error type of the programming language used by the policy.\nThe error is a UTF-8 string that holds an explanation message."})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>c});var s=t(96540);const n={},o=s.createContext(n);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);