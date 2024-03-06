"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[50716],{42159:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(85893),s=n(11151);const o={sidebar_label:"Policy settings",title:"Policy settings",description:"Policy settings.",keywords:["kubewarden","kubernetes","policy specification","policy settings"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","settings"]},c=void 0,r={id:"reference/spec/settings",title:"Policy settings",description:"Policy settings.",source:"@site/docs/reference/spec/02-settings.md",sourceDirName:"reference/spec",slug:"/reference/spec/settings",permalink:"/next/reference/spec/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/reference/spec/02-settings.md",tags:[],version:"current",lastUpdatedAt:1709719232,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Policy settings",title:"Policy settings",description:"Policy settings.",keywords:["kubewarden","kubernetes","policy specification","policy settings"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","settings"]},sidebar:"docs",previous:{title:"Policy communication specification",permalink:"/next/reference/spec/intro-spec"},next:{title:"Validating policies",permalink:"/next/reference/spec/validating-policies"}},a={},d=[{value:"Settings validation",id:"settings-validation",level:2},{value:"Example",id:"example",level:2},{value:"Recap",id:"recap",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/settings"})}),"\n",(0,t.jsx)(i.p,{children:"Policy behavior is not rigid,\nit can be configured by providing configuration details to the policy at runtime.\nThe policy author has the freedom to define the structure of policy settings."}),"\n",(0,t.jsx)(i.p,{children:"Kubewarden takes care of serializing the policy settings into JSON and provides them to the policy each time it is invoked."}),"\n",(0,t.jsx)(i.h2,{id:"settings-validation",children:"Settings validation"}),"\n",(0,t.jsx)(i.p,{children:"Policies should validate the settings a user provides to ensure correctness."}),"\n",(0,t.jsxs)(i.p,{children:["Each policy registers a waPC function called ",(0,t.jsx)(i.code,{children:"validate_settings"})," that validates the policy settings."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"validate_settings"})," function receives as input a JSON representation of the settings provided by the user.\nThis function validates them and returns as a response a ",(0,t.jsx)(i.code,{children:"SettingsValidationResponse"})," object."]}),"\n",(0,t.jsxs)(i.p,{children:["The structure of the ",(0,t.jsx)(i.code,{children:"SettingsValidationResponse"})," object is:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:'{\n  # mandatory\n  "valid": <boolean>,\n\n  # optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["If the user provided settings are ",(0,t.jsx)(i.code,{children:"valid"}),", the contents of ",(0,t.jsx)(i.code,{children:"message"})," are ignored.\nOtherwise, the contents of ",(0,t.jsx)(i.code,{children:"message"})," are shown to the user."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Kubewarden's\n",(0,t.jsx)(i.a,{href:"https://github.com/chimera-kube/policy-server",children:"policy-server"}),"\nvalidates all the policy settings provided by users at start time.\nThe policy-server exits immediately with an error if at least one of its policies received wrong configuration parameters."]})}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["Let's take as an example the\n",(0,t.jsx)(i.a,{href:"https://github.com/kubewarden/psp-capabilities",children:"psp-capabilities"}),"\npolicy which has the following configuration format:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"allowed_capabilities:\n- CHOWN\n\nrequired_drop_capabilities:\n- NET_ADMIN\n\ndefault_add_capabilities:\n- KILL\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"validate_settings"})," function receives as input the following JSON\ndocument:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "allowed_capabilities": [\n    "CHOWN"\n  ],\n  "required_drop_capabilities": [\n    "NET_ADMIN"\n  ],\n  "default_add_capabilities": [\n    "KILL"\n  ]\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"recap",children:"Recap"}),"\n",(0,t.jsxs)(i.p,{children:["Each policy must register a waPC function, ",(0,t.jsx)(i.code,{children:"validate_settings"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>c});var t=n(67294);const s={},o=t.createContext(s);function c(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);