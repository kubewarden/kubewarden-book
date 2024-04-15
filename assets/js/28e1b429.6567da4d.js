"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[40753],{80432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=n(85893),d=n(11151);const s={sidebar_label:"Dependency matrix",title:"Dependency matrix",description:"Dependency matrix of Kubewarden.",keywords:["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},c=void 0,i={id:"operator-manual/dependency-matrix",title:"Dependency matrix",description:"Dependency matrix of Kubewarden.",source:"@site/versioned_docs/version-1.10/operator-manual/dependency-matrix.md",sourceDirName:"operator-manual",slug:"/operator-manual/dependency-matrix",permalink:"/1.10/operator-manual/dependency-matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/operator-manual/dependency-matrix.md",tags:[],version:"1.10",lastUpdatedAt:171317112e4,frontMatter:{sidebar_label:"Dependency matrix",title:"Dependency matrix",description:"Dependency matrix of Kubewarden.",keywords:["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},sidebar:"docs",previous:{title:"Upgrade path",permalink:"/1.10/operator-manual/upgrade-path"},next:{title:"Metrics reference",permalink:"/1.10/operator-manual/telemetry/metrics/reference"}},l={},a=[{value:"Opentelemetry, metrics and tracing dependencies",id:"opentelemetry-metrics-and-tracing-dependencies",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This page lists the dependencies of Kubewarden, with their relevant\nversion constraints. Versions outside of the provided ranges may work but are\nnot tested."}),"\n",(0,r.jsx)(t.h3,{id:"opentelemetry-metrics-and-tracing-dependencies",children:"Opentelemetry, metrics and tracing dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["At the time of writing, the ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io",children:"Opentelemetry"})," stack\nkeeps improving. Still, is not yet stable, and unannounced\nbackwards-incompatible changes still happen. Kubewarden devs do their best to\ntrack Opentelemetry stack changes and adjust to them. Kubewarden is tested against a known working\nrange of Opentelemetry, metrics and tracing stack."]}),"\n",(0,r.jsx)(t.h1,{id:"hard-dependencies",children:"Hard dependencies"}),"\n",(0,r.jsx)(t.p,{children:"Needed for Kubewarden deployments."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Chart dependency"}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,r.jsx)(t.code,{children:"appVersion"})]}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,r.jsx)(t.code,{children:"version"})]}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Comments"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"jetstack/cert-manager"})," chart"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:">= 1.13 < 2"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,r.jsx)(t.code,{children:"v1.13.2"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Plans to make optional"})]})})]}),"\n",(0,r.jsx)(t.h1,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,r.jsx)(t.p,{children:"Needed for specific features."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Chart dependency"}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,r.jsx)(t.code,{children:"appVersion"})]}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,r.jsx)(t.code,{children:"version"})]}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"open-telemetry/opentelemetry-operator"})," chart"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:">= 0.85"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,r.jsx)(t.code,{children:"0.39.2"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"OTLM"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"prometheus-community/kube-prometheus-stack"})," chart"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:">= v0.69"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,r.jsx)(t.code,{children:"51.5.3"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Metrics"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"jaegertracing/jaeger-operator"})," chart"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:">= 1.49 < 2"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,r.jsx)(t.code,{children:"2.49.0"})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Tracing"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"kyverno/policy-reporter"})," chart"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:">= 2 < 3"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["In ",(0,r.jsx)(t.code,{children:"kubewarden-controller"})," chart as subchart"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Policy Reports UI"})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"CRD dependency"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Version"}),(0,r.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,r.jsx)(t.code,{children:"version"})]}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"policyreports.wgpolicyk8s.io"})," CRDs"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"v1alpha1"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["In ",(0,r.jsx)(t.code,{children:"kubewarden-defaults"})," chart or manually installed"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Audit Scanner"})]})})]}),"\n",(0,r.jsx)(t.h1,{id:"rancher",children:"Rancher"}),"\n",(0,r.jsx)(t.p,{children:"For downstream consumers such as Rancher, Kubewarden is tested against the\nmonitoring and tracing Helm charts provided in the Rancher charts repository."})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(67294);const d={},s=r.createContext(d);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);