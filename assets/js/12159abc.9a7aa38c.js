"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4339],{64510:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"reference/spec/host-capabilities/net","title":"Network capabilities","description":"Network capabilities.","source":"@site/versioned_docs/version-1.11/reference/spec/host-capabilities/04-net.md","sourceDirName":"reference/spec/host-capabilities","slug":"/reference/spec/host-capabilities/net","permalink":"/1.11/reference/spec/host-capabilities/net","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/reference/spec/host-capabilities/04-net.md","tags":[],"version":"1.11","lastUpdatedAt":1740656838000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Network capabilities","title":"Network capabilities","description":"Network capabilities.","keywords":["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},"sidebar":"docs","previous":{"title":"Container registry capabilities","permalink":"/1.11/reference/spec/host-capabilities/container-registry"},"next":{"title":"Cryptographic capabilities","permalink":"/1.11/reference/spec/host-capabilities/crypto"}}');var s=t(74848),o=t(28453);const r={sidebar_label:"Network capabilities",title:"Network capabilities",description:"Network capabilities.",keywords:["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},c=void 0,a={},l=[{value:"DNS host lookup",id:"dns-host-lookup",level:2},{value:"Caching",id:"caching",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}];function p(e){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/host-capabilities/net"})}),"\n",(0,s.jsx)(i.p,{children:"Kubewarden policies cannot make network request from within the WebAssembly execution context."}),"\n",(0,s.jsx)(i.p,{children:"Network operations can be done by leveraging a series of capabilities exposed by the host."}),"\n",(0,s.jsx)(i.h2,{id:"dns-host-lookup",children:"DNS host lookup"}),"\n",(0,s.jsx)(i.p,{children:"This function performs a DNS lookup starting from the FQDN given by the policy."}),"\n",(0,s.jsx)(i.h3,{id:"caching",children:"Caching"}),"\n",(0,s.jsx)(i.p,{children:"Lookup results are cached for 1 minute."}),"\n",(0,s.jsx)(i.h3,{id:"communication-protocol",children:"Communication protocol"}),"\n",(0,s.jsx)(i.p,{children:"This is the description of the waPC protocol used to expose this capability:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:" waPC function name "}),(0,s.jsx)("th",{children:" Input payload "}),(0,s.jsx)("th",{children:" Output payload "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"v1/dns_lookup_host"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:"# hostname - JSON encoded string\nstring\n"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:'\n{\n  # list of IPs\n  "ips": [string]\n}\n'})})})]})]}),"\n",(0,s.jsx)(i.p,{children:"All the IP addresses associated with the given FQDN,\nare going to be returned as strings in the response.\nBoth IPv4 and IPv6 entries are returned as part of the same response."}),"\n",(0,s.jsxs)(i.p,{children:["For example, when requesting the manifest digest of the\n",(0,s.jsx)(i.code,{children:"busybox:latest"})," image,\nthe payloads would be:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Input payload: ",(0,s.jsx)(i.code,{children:'"google.com"'})]}),"\n",(0,s.jsxs)(i.li,{children:["Output payload: ",(0,s.jsx)(i.code,{children:'{ "ips": ["127.0.0.1"]}'})]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);