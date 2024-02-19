"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[50716],{42159:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(85893),s=i(11151);const o={sidebar_label:"Policy settings",title:"Policy settings",description:"Policy settings.",keywords:["kubewarden","kubernetes","policy specification","policy settings"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","settings"]},c=void 0,r={id:"reference/spec/settings",title:"Policy settings",description:"Policy settings.",source:"@site/docs/reference/spec/02-settings.md",sourceDirName:"reference/spec",slug:"/reference/spec/settings",permalink:"/next/reference/spec/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/reference/spec/02-settings.md",tags:[],version:"current",lastUpdatedAt:1708332674,formattedLastUpdatedAt:"Feb 19, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Policy settings",title:"Policy settings",description:"Policy settings.",keywords:["kubewarden","kubernetes","policy specification","policy settings"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","settings"]},sidebar:"docs",previous:{title:"Policy communication specification",permalink:"/next/reference/spec/intro-spec"},next:{title:"Validating policies",permalink:"/next/reference/spec/validating-policies"}},a={},l=[{value:"Settings validation",id:"settings-validation",level:2},{value:"Example",id:"example",level:2},{value:"Recap",id:"recap",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/settings"})}),"\n",(0,n.jsx)(t.p,{children:"Policy behavior is not set in stone, it can be configured by providing configuration\ndetails to the policy at runtime. The policy author has full freedom to define\nthe structure of the policy settings."}),"\n",(0,n.jsx)(t.p,{children:"Kubewarden takes care of serializing the policy settings into JSON and provide\nthem to the policy every time it is invoked."}),"\n",(0,n.jsx)(t.h2,{id:"settings-validation",children:"Settings validation"}),"\n",(0,n.jsx)(t.p,{children:"Some policies might want to validate the settings a user provides to ensure\nthey are correct."}),"\n",(0,n.jsxs)(t.p,{children:["Each policy must register a waPC function called ",(0,n.jsx)(t.code,{children:"validate_settings"})," that\ntakes care of validating the policy settings."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"validate_settings"})," function receives as input a JSON representation of\nthe settings provided by the user. The function validates them and returns\nas a response a ",(0,n.jsx)(t.code,{children:"SettingsValidationResponse"})," object."]}),"\n",(0,n.jsxs)(t.p,{children:["The structure of the ",(0,n.jsx)(t.code,{children:"SettingsValidationResponse"})," object is the following one:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'{\n  # mandatory\n  "valid": <boolean>,\n\n  # optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If the user provided settings are ",(0,n.jsx)(t.code,{children:"valid"}),", the contents of ",(0,n.jsx)(t.code,{children:"message"})," are ignored.\nOtherwise the contents of ",(0,n.jsx)(t.code,{children:"message"})," are shown to the user."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Kubewarden's ",(0,n.jsx)(t.a,{href:"https://github.com/chimera-kube/policy-server",children:"policy-server"}),"\nvalidates all the policy settings provided by users at start time.\nThe policy-server exits immediately with an error if at least one of its\npolicies received wrong configuration parameters."]})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["Let's take as an example the ",(0,n.jsx)(t.a,{href:"https://github.com/kubewarden/psp-capabilities",children:"psp-capabilities"}),"\npolicy which has the following configuration format:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"allowed_capabilities:\n- CHOWN\n\nrequired_drop_capabilities:\n- NET_ADMIN\n\ndefault_add_capabilities:\n- KILL\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"validate_settings"})," function will receive as input the following JSON\ndocument:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "allowed_capabilities": [\n    "CHOWN"\n  ],\n  "required_drop_capabilities": [\n    "NET_ADMIN"\n  ],\n  "default_add_capabilities": [\n    "KILL"\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"recap",children:"Recap"}),"\n",(0,n.jsxs)(t.p,{children:["Each policy must register a waPC function called ",(0,n.jsx)(t.code,{children:"validate_settings"})," that has\nthe following API:"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>c});var n=i(67294);const s={},o=n.createContext(s);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);