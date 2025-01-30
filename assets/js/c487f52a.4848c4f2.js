"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[89173],{58591:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"writing-policies/spec/context-aware-policies","title":"Context aware policies","description":"Context aware policies.","source":"@site/versioned_docs/version-1.10/writing-policies/spec/05-context-aware-policies.md","sourceDirName":"writing-policies/spec","slug":"/writing-policies/spec/context-aware-policies","permalink":"/1.10/writing-policies/spec/context-aware-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/spec/05-context-aware-policies.md","tags":[],"version":"1.10","lastUpdatedAt":1738227033000,"sidebarPosition":5,"frontMatter":{"sidebar_label":"Context aware policies","title":"Context aware policies","description":"Context aware policies.","keywords":["kubewarden","kubernetes","policy specification","context aware policies"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","context-aware-policies"]},"sidebar":"docs","previous":{"title":"Mutating policies","permalink":"/1.10/writing-policies/spec/mutating-policies"},"next":{"title":"Host capabilities specification","permalink":"/1.10/writing-policies/spec/host-capabilities/intro-host-capabilities"}}');var n=t(74848),o=t(28453);const r={sidebar_label:"Context aware policies",title:"Context aware policies",description:"Context aware policies.",keywords:["kubewarden","kubernetes","policy specification","context aware policies"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","context-aware-policies"]},c=void 0,l={},a=[{value:"Support Matrix",id:"support-matrix",level:2},{value:"ClusterAdmissionPolicies",id:"clusteradmissionpolicies",level:2},{value:"Testing context aware policies locally",id:"testing-context-aware-policies-locally",level:3},{value:"Language SDKs",id:"language-sdks",level:2},{value:"Rust",id:"rust",level:3},{value:"Go",id:"go",level:3},{value:"Rego policies",id:"rego-policies",level:2},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Open Policy Agent",id:"open-policy-agent",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"policy-server"})," has capabilities to expose cluster information to\npolicies, so that they can take decisions based on other existing\nresources, and not only based on the details provided by the admission request."]}),"\n",(0,n.jsx)(i.p,{children:"The retrieval of Kubernetes resources is performed by the Policy Server hosting the policy.\nAccess to Kubernetes is regulated by RBAC rules applied to the Service Account used by the Policy Server."}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"default"})," Policy Server deployed by Kubewarden helm charts has access to the following Kubernetes resources:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Namespaces"}),"\n",(0,n.jsx)(i.li,{children:"Services"}),"\n",(0,n.jsx)(i.li,{children:"Ingresses"}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsx)(i.p,{children:"The policy server performs caching of the results obtained from the Kubernetes API server to reduce the amount of load on this core part of Kubernetes.\nThat means some information might be stale or missing."})}),"\n",(0,n.jsx)(i.h2,{id:"support-matrix",children:"Support Matrix"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Policy type"}),(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"Support"}),(0,n.jsx)(i.th,{children:"Notes"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Traditional programming languages"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(i.td,{children:"-"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Rego"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(i.td,{children:"Since Kubewarden 1.9 release"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"WASI"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(i.td,{children:"Since Kubewarden 1.10.0 release, only for Go SDK"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"clusteradmissionpolicies",children:"ClusterAdmissionPolicies"}),"\n",(0,n.jsxs)(i.p,{children:["ClusterAdmissionPolicies have the field ",(0,n.jsx)(i.a,{href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller/policies.kubewarden.io/ClusterAdmissionPolicy/v1#spec-contextAwareResources",children:"spec.contextAwareResources"}),". This field provides a list a ",(0,n.jsx)(i.code,{children:"GroupVersionKind"}),' resources that the policy needs to access. This allows policy writers to ship the "permissions" that the policy needs together with the policy. Moreover, this allows policy operators to review the "permissions" needed by the policy at deployment time.']}),"\n",(0,n.jsx)(i.h3,{id:"testing-context-aware-policies-locally",children:"Testing context aware policies locally"}),"\n",(0,n.jsxs)(i.p,{children:["Apart from running policies in cluster for end-to-end tests, one can use our ",(0,n.jsx)(i.code,{children:"kwctl"})," CLI utility to run policies and mock requests against the cluster."]}),"\n",(0,n.jsxs)(i.p,{children:["For that, ",(0,n.jsx)(i.code,{children:"kwctl run"})," can first record all the interactions with the cluster into a file:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --record-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,n.jsxs)(i.p,{children:["which creates the following ",(0,n.jsx)(i.code,{children:"replay-session.yml"})," file:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:'# replay-session.yml\n---\n- type: Exchange\n  request: |\n    !KubernetesGetResource\n    api_version: /v1\n    kind: Pod\n    name: p-testing\n    namespace: local\n    disable_cache: true\n  response:\n    type: Success\n    payload: \'{"apiVersion":"","kind":"Pod", <snipped> }\'\n'})}),"\n",(0,n.jsx)(i.p,{children:"With the replay session, one can now mock the cluster interactions without the need\nof a cluster, perfect for CI and end-to-end tests:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --replay-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,n.jsx)(i.h2,{id:"language-sdks",children:"Language SDKs"}),"\n",(0,n.jsx)(i.p,{children:"Language SDK's that support cluster context at this time will expose\nfunctions that allow policies to retrieve the current state of the\ncluster."}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["If you want more information about the waPC function used by the SDKs, check the ",(0,n.jsx)(i.a,{href:"/1.10/writing-policies/spec/host-capabilities/kubernetes",children:"Kubernetes capabilities"})," reference documentation."]})}),"\n",(0,n.jsx)(i.h3,{id:"rust",children:"Rust"}),"\n",(0,n.jsxs)(i.p,{children:["See the functions exposing this functionality at the ",(0,n.jsx)(i.a,{href:"https://docs.rs/kubewarden-policy-sdk/0.8.7/kubewarden_policy_sdk",children:"Rust SDK reference docs"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"go",children:"Go"}),"\n",(0,n.jsxs)(i.p,{children:["See the functions exposing this functionality at the ",(0,n.jsx)(i.a,{href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go",children:"Go SDK reference docs"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"rego-policies",children:"Rego policies"}),"\n",(0,n.jsx)(i.h3,{id:"gatekeeper",children:"Gatekeeper"}),"\n",(0,n.jsxs)(i.p,{children:["The context aware information is exposed under the ",(0,n.jsx)(i.code,{children:"data.inventory"})," key, like Gatekeeper does."]}),"\n",(0,n.jsxs)(i.p,{children:["The inventory is populated with the resources the policy has been granted access to via the ",(0,n.jsx)(i.code,{children:"spec.contextAwareResources"})," field."]}),"\n",(0,n.jsx)(i.h3,{id:"open-policy-agent",children:"Open Policy Agent"}),"\n",(0,n.jsxs)(i.p,{children:["The context aware information is exposed under the ",(0,n.jsx)(i.code,{children:"data.kubernetes"})," key, like\n",(0,n.jsx)(i.a,{href:"https://github.com/open-policy-agent/kube-mgmt",children:(0,n.jsx)(i.code,{children:"kube-mgmt"})})," does by default."]}),"\n",(0,n.jsxs)(i.p,{children:["The inventory is populated with the resources the policy has been granted access to via the ",(0,n.jsx)(i.code,{children:"spec.contextAwareResources"})," field."]})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var s=t(96540);const n={},o=s.createContext(n);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);