"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[44619],{87383:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(85893),s=t(11151);const r={sidebar_label:"Container registry capabilities",title:"Container registry capabilities",description:"Container registry capabilities.",keywords:["kubewarden","kubernetes","policy specification","registry capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","container-registry"]},o="Container registry capabilities",a={id:"writing-policies/spec/host-capabilities/container-registry",title:"Container registry capabilities",description:"Container registry capabilities.",source:"@site/versioned_docs/version-1.10/writing-policies/spec/host-capabilities/03-container-registry.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/container-registry",permalink:"/writing-policies/spec/host-capabilities/container-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/spec/host-capabilities/03-container-registry.md",tags:[],version:"1.10",lastUpdatedAt:1709719232,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"Container registry capabilities",title:"Container registry capabilities",description:"Container registry capabilities.",keywords:["kubewarden","kubernetes","policy specification","registry capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","container-registry"]},sidebar:"docs",previous:{title:"Signature verifier policies",permalink:"/writing-policies/spec/host-capabilities/signature-verifier-policies"},next:{title:"Network capabilities",permalink:"/writing-policies/spec/host-capabilities/net"}},c={},l=[{value:"Get OCI manifest digest",id:"get-oci-manifest-digest",level:2},{value:"Caching",id:"caching",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"container-registry-capabilities",children:"Container registry capabilities"}),"\n",(0,n.jsx)(i.p,{children:"Container registries can be used to distribute many types of OCI objects, going\nfrom well-known container images to generic OCI Artifacts. OCI Artifacts are used\nto store objects such as Kubewarden Policies, Helm charts, and more."}),"\n",(0,n.jsx)(i.p,{children:"Below documented are the capabilities exposed by the Kubewarden host to interact with\ncontainer registries."}),"\n",(0,n.jsx)(i.h2,{id:"get-oci-manifest-digest",children:"Get OCI manifest digest"}),"\n",(0,n.jsxs)(i.p,{children:["This function computes the digest of an OCI manifest. This information can\nbe used to identify an object stored inside of an OCI registry in an immutable\nway, as opposed to ",(0,n.jsx)(i.code,{children:"tags"})," which are mutable."]}),"\n",(0,n.jsx)(i.h3,{id:"caching",children:"Caching"}),"\n",(0,n.jsx)(i.p,{children:"Computing the digest involves a series of network requests between the Kubewarden\npolicy host and the remote registry. These operation can be time expensive,\nbecause of that the results are going to be cached for 1 minute."}),"\n",(0,n.jsx)(i.h3,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(i.p,{children:"Interactions with private registries require the Kubewarden policy host to\nauthenticate against the remote registry."}),"\n",(0,n.jsx)(i.p,{children:"The policy host will use the same set of credentials used to fetch policies\nfrom the remote registry."}),"\n",(0,n.jsx)(i.h3,{id:"communication-protocol",children:"Communication protocol"}),"\n",(0,n.jsx)(i.p,{children:"This is the description of the waPC protocol used to expose this capability:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:" waPC function name "}),(0,n.jsx)("th",{children:" Input payload "}),(0,n.jsx)("th",{children:" Output payload "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"v1/manifest_digest"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:"# OCI URI - JSON encoded string\nstring\n"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:'{\n  # digest of the OCI object\n  "digest": string\n}\n'})})})]})]}),"\n",(0,n.jsxs)(i.p,{children:["For example, when requesting the manifest digest of the ",(0,n.jsx)(i.code,{children:"busybox:latest"})," image,\nthe payload would be the following ones:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Input payload: ",(0,n.jsx)(i.code,{children:'"busybox:latest"'})]}),"\n",(0,n.jsxs)(i.li,{children:["Output payload: ",(0,n.jsx)(i.code,{children:'{ "digest": "sha256:69e70a79f2d41ab5d637de98c1e0b055206ba40a8145e7bddb55ccc04e13cf8f"}'})]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>o});var n=t(67294);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);