"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[24872],{98538:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(85893),t=n(11151);const r={sidebar_label:"Raw policies",title:"Writing raw policies",description:"Writing raw OPA policies for Kubewarden.",keywords:["kubewarden","kubernetes","raw policies","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","raw-policies"]},a=void 0,s={id:"tutorials/writing-policies/rego/open-policy-agent/raw-policies",title:"Writing raw policies",description:"Writing raw OPA policies for Kubewarden.",source:"@site/versioned_docs/version-1.11/tutorials/writing-policies/rego/open-policy-agent/05-raw-policies.md",sourceDirName:"tutorials/writing-policies/rego/open-policy-agent",slug:"/tutorials/writing-policies/rego/open-policy-agent/raw-policies",permalink:"/1.11/tutorials/writing-policies/rego/open-policy-agent/raw-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/tutorials/writing-policies/rego/open-policy-agent/05-raw-policies.md",tags:[],version:"1.11",lastUpdatedAt:1726223398e3,sidebarPosition:5,frontMatter:{sidebar_label:"Raw policies",title:"Writing raw policies",description:"Writing raw OPA policies for Kubewarden.",keywords:["kubewarden","kubernetes","raw policies","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","raw-policies"]},sidebar:"docs",previous:{title:"Distribute",permalink:"/1.11/tutorials/writing-policies/rego/open-policy-agent/distribute"},next:{title:"Gatekeeper support",permalink:"/1.11/tutorials/writing-policies/rego/gatekeeper/intro"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Validation",id:"validation",level:3}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rego/open-policy-agent/raw-policies"})}),"\n",(0,o.jsxs)(i.p,{children:["Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the\n",(0,o.jsx)(i.a,{href:"/1.11/howtos/raw-policies",children:"raw policies"})," page."]}),"\n",(0,o.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(i.p,{children:["The following examples should look familiar if you completed the\n",(0,o.jsx)(i.a,{href:"/1.11/tutorials/writing-policies/rego/open-policy-agent/create-policy",children:"validation"})," page of this tutorial."]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:["Remember to mark the policy as ",(0,o.jsx)(i.code,{children:"raw"}),",\nby using the ",(0,o.jsx)(i.code,{children:"policyType"})," field in the ",(0,o.jsx)(i.code,{children:"metadata.yml"})," configuration.\nPlease refer to the\n",(0,o.jsx)(i.a,{href:"/1.11/tutorials/writing-policies/metadata",children:"metadata"}),"\nspecification for more information."]})}),"\n",(0,o.jsx)(i.h3,{id:"validation",children:"Validation"}),"\n",(0,o.jsx)(i.p,{children:"You're going to write a policy that accepts a request in the following format:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-json",children:'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "products"\n  }\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["It validates that only the ",(0,o.jsx)(i.code,{children:"admin"})," user can delete resources."]}),"\n",(0,o.jsxs)(i.p,{children:["Start by scaffolding a policy by using the\n",(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/opa-policy-template",children:"OPA policy template"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["First you need to change the ",(0,o.jsx)(i.code,{children:"policy.rego"})," file to look like this:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-rego",children:'package validation\n\ndeny[msg] {\n    input.request.action == "delete"\n    input.request.user != "admin"\n    msg := sprintf("user %v is not allowed to delete resources", [input.request.user])\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"utility/policy.rego"})," module must needs modification to remove Kubernetes-specific code:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-rego",children:'package policy\n\nimport data.validation\n\nmain = {\n\t"response": response,\n}\n\n// highlight-start\n# OPA policy responses need the uid field to be set.\n# If the request doesn\'t contain a uid, set it to an empty string.\ndefault uid = ""\n\nuid = input.request.uid\n// highlight-end\n\nresponse = {\n\t"uid": uid,\n\t"allowed": false,\n\t"status": {"message": reason},\n} {\n\treason = concat(", ", validation.deny)\n\treason != ""\n} else = {\n\t"uid": uid,\n\t"allowed": true,\n} {\n\ttrue\n}\n'})})]})}function d(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>a});var o=n(67294);const t={},r=o.createContext(t);function a(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);