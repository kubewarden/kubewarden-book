"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[58190],{89390:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=t(85893),s=t(11151);const o={sidebar_label:"Network capabilities",title:"Network capabilities",description:"Network capabilities.",keywords:["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},c=void 0,r={id:"writing-policies/spec/host-capabilities/net",title:"Network capabilities",description:"Network capabilities.",source:"@site/versioned_docs/version-1.10/writing-policies/spec/host-capabilities/04-net.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/net",permalink:"/1.10/writing-policies/spec/host-capabilities/net",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/spec/host-capabilities/04-net.md",tags:[],version:"1.10",lastUpdatedAt:1713186334e3,sidebarPosition:4,frontMatter:{sidebar_label:"Network capabilities",title:"Network capabilities",description:"Network capabilities.",keywords:["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},sidebar:"docs",previous:{title:"Container registry capabilities",permalink:"/1.10/writing-policies/spec/host-capabilities/container-registry"},next:{title:"Cryptographic capabilities",permalink:"/1.10/writing-policies/spec/host-capabilities/crypto"}},a={},l=[{value:"DNS host lookup",id:"dns-host-lookup",level:2},{value:"Caching",id:"caching",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}];function p(e){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Kubewarden policies cannot make network request from within the WebAssembly\nexecution context."}),"\n",(0,n.jsx)(i.p,{children:"Network operations can be done by leveraging a series of capabilities exposed\nby the host."}),"\n",(0,n.jsx)(i.h2,{id:"dns-host-lookup",children:"DNS host lookup"}),"\n",(0,n.jsx)(i.p,{children:"This function performs a DNS lookup starting from the FQDN given by the policy."}),"\n",(0,n.jsx)(i.h3,{id:"caching",children:"Caching"}),"\n",(0,n.jsx)(i.p,{children:"Lookup results are cached for 1 minute."}),"\n",(0,n.jsx)(i.h3,{id:"communication-protocol",children:"Communication protocol"}),"\n",(0,n.jsx)(i.p,{children:"This is the description of the waPC protocol used to expose this capability:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:" waPC function name "}),(0,n.jsx)("th",{children:" Input payload "}),(0,n.jsx)("th",{children:" Output payload "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"v1/dns_lookup_host"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:"# hostname - JSON encoded string\nstring\n"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:'\n{\n  # list of IPs\n  "ips": [string]\n}\n'})})})]})]}),"\n",(0,n.jsx)(i.p,{children:"All the IPs associated with the given FQDN, are going to be returned as strings\ninside of the response. Both IPv4 and IPv6 entries are going to be returned as\npart of the same response."}),"\n",(0,n.jsxs)(i.p,{children:["For example, when requesting the manifest digest of the ",(0,n.jsx)(i.code,{children:"busybox:latest"})," image,\nthe payload would be the following ones:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Input payload: ",(0,n.jsx)(i.code,{children:'"google.com"'})]}),"\n",(0,n.jsxs)(i.li,{children:["Output payload: ",(0,n.jsx)(i.code,{children:'{ "ips": ["127.0.0.1"]}'})]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>c});var n=t(67294);const s={},o=n.createContext(s);function c(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);