"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[12901],{16985:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"reference/upgrade-path","title":"Upgrade path","description":"Upgrade path for the Kubewarden stack.","source":"@site/versioned_docs/version-1.13/reference/upgrade-path.md","sourceDirName":"reference","slug":"/reference/upgrade-path","permalink":"/1.13/reference/upgrade-path","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.13/reference/upgrade-path.md","tags":[],"version":"1.13","lastUpdatedAt":1738256368000,"sidebarPosition":20,"frontMatter":{"sidebar_label":"Upgrade path","sidebar_position":20,"title":"Upgrade path","description":"Upgrade path for the Kubewarden stack.","keywords":["upgrade path","support"],"doc-persona":["kubewarden-operator"],"doc-type":["reference"],"doc-topic":["operator-manual","upgrade-path"]},"sidebar":"docs","previous":{"title":"Dependency matrix","permalink":"/1.13/reference/dependency-matrix"},"next":{"title":"Metrics Reference","permalink":"/1.13/reference/metrics-reference"}}');var t=r(74848),d=r(28453);const o={sidebar_label:"Upgrade path",sidebar_position:20,title:"Upgrade path",description:"Upgrade path for the Kubewarden stack.",keywords:["upgrade path","support"],"doc-persona":["kubewarden-operator"],"doc-type":["reference"],"doc-topic":["operator-manual","upgrade-path"]},a=void 0,i={},c=[{value:"Kubewarden stack versioning",id:"kubewarden-stack-versioning",level:2},{value:"Stack version compatibility among components",id:"stack-version-compatibility-among-components",level:2},{value:"Helm chart versions",id:"helm-chart-versions",level:2},{value:"Upgrade paths",id:"upgrade-paths",level:2},{value:"Upgrade order",id:"upgrade-order",level:2},{value:"Downgrades",id:"downgrades",level:2},{value:"SDKs, policies",id:"sdks-policies",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/upgrade-path"})}),"\n",(0,t.jsx)(n.h2,{id:"kubewarden-stack-versioning",children:"Kubewarden stack versioning"}),"\n",(0,t.jsxs)(n.p,{children:["The Kubewarden project uses ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic versioning"}),'\nto define the "stack" version of all its components: the version follows the\n',(0,t.jsx)(n.code,{children:"MAJOR.MINOR.PATCH"})," pattern. The supported version is only the latest release."]}),"\n",(0,t.jsx)(n.p,{children:'The Kubewarden components that follow the rules for the "stack" version are:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubewarden-crds"})," chart, in their appVersion field."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubewarden-controller"})," chart, in their appVersion field."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubewarden-defaults"})," chart, in their appVersion field."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"policy-server"})," image tag for manually deployed ones. The resource for the\ndefault one is already managed by the ",(0,t.jsx)(n.code,{children:"kubewarden-defaults"})," chart."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kwctl"})," binary."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stack-version-compatibility-among-components",children:"Stack version compatibility among components"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kubewarden-crds"})," chart, ",(0,t.jsx)(n.code,{children:"kubewarden-controller"})," chart, ",(0,t.jsx)(n.code,{children:"kubewarden-defaults"}),"\nchart, any manually deployed ",(0,t.jsx)(n.code,{children:"policy-server"})," image, and ",(0,t.jsx)(n.code,{children:"kwctl"})," should run the\nsame ",(0,t.jsx)(n.code,{children:"MAJOR"}),"/",(0,t.jsx)(n.code,{children:"MINOR"}),". The ",(0,t.jsx)(n.code,{children:"PATCH"})," version can increase independently though."]}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, if the ",(0,t.jsx)(n.code,{children:"kubewarden-controller"})," version running is ",(0,t.jsx)(n.code,{children:"1.1.x"}),", the\n",(0,t.jsx)(n.code,{children:"policy-server"}),"s and ",(0,t.jsx)(n.code,{children:"kwctl"})," version in use should be ",(0,t.jsx)(n.code,{children:"1.1.x"})," as well."]}),"\n",(0,t.jsx)(n.h2,{id:"helm-chart-versions",children:"Helm chart versions"}),"\n",(0,t.jsxs)(n.p,{children:["Helm charts define the ",(0,t.jsx)(n.code,{children:"version"})," field and the ",(0,t.jsx)(n.code,{children:"appVersion"})," field. The ",(0,t.jsx)(n.code,{children:"appVersion"}),' field informs\nof the Kubewarden "stack" version as talked before. The ',(0,t.jsx)(n.code,{children:"version"})," field also\nfollows ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic versioning"})," and informs of\nbackwards-compatible changes in the chart templates and ",(0,t.jsx)(n.code,{children:"values.yaml"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-paths",children:"Upgrade paths"}),"\n",(0,t.jsxs)(n.p,{children:["When upgrading components, it is allowed to upgrade multiple ",(0,t.jsx)(n.code,{children:"PATCH"})," stack versions\nin a single operation. However, the upgrade of multiple ",(0,t.jsx)(n.code,{children:"MAJOR"})," or ",(0,t.jsx)(n.code,{children:"MINOR"})," stack versions\nin a single upgrade is ",(0,t.jsx)(n.strong,{children:"not"})," supported."]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(n.mermaid,{value:'%%{init: "theme": "neutral"}%%\nflowchart LR;\n  1.0.0(1.0.0)--\x3e1.0.1(1.0.1);\n  1.0.1--\x3e1.0.2(1.0.2);\n  1.0.2--\x3e1.1.0(1.1.0);\n  1.1.0--\x3e1.1.2(1.1.2);\n  1.1.0--\x3e1.1.1;\n  1.1.1--\x3e1.1.2;\n  1.1.2--\x3e|Not recommended|1.2.0(1.2.0);\n  1.0.2--\x3e|Not supported|1.2.0(1.2.0);\n  1.1.2--\x3e1.2.1(1.2.1);\n  1.2.0--\x3e1.2.1;\n  linkStyle 6 color:brown,stroke-width:2px,stroke-dasharray: 3 5\n  linkStyle 7 color:red,stroke-width:2px,stroke-dasharray: 3 5'}),(0,t.jsx)("figcaption",{children:"Upgrade path suppport graph"})]}),"\n",(0,t.jsxs)(n.p,{children:["For example, the user is allowed to upgrade components from version ",(0,t.jsx)(n.code,{children:"1.1.10"})," to\n",(0,t.jsx)(n.code,{children:"1.1.50"})," in a single upgrade. But the upgrade from ",(0,t.jsx)(n.code,{children:"1.1.10"})," to ",(0,t.jsx)(n.code,{children:"1.5.0"})," is not supported.\nIn these cases, the user must upgrade individually to each ",(0,t.jsx)(n.code,{children:"MAJOR"}),"/",(0,t.jsx)(n.code,{children:"MINOR"})," version\nbetween the two versions. Therefore, it's necessary to upgrade ",(0,t.jsx)(n.code,{children:"1.1.10"})," to ",(0,t.jsx)(n.code,{children:"1.2.0"}),"\nthen ",(0,t.jsx)(n.code,{children:"1.3.0"})," then ",(0,t.jsx)(n.code,{children:"1.4.0"})," and finally to ",(0,t.jsx)(n.code,{children:"1.5.0"}),". Users that want to upgrade one\n",(0,t.jsx)(n.code,{children:"MAJOR"})," version to another, also need to follow all the ",(0,t.jsx)(n.code,{children:"MINOR"})," updates between the\ntwo ",(0,t.jsx)(n.code,{children:"MAJOR"})," versions."]}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-order",children:"Upgrade order"}),"\n",(0,t.jsxs)(n.p,{children:["Kuberwarden users should upgrade the stack starting with the ",(0,t.jsx)(n.code,{children:"kubewarden-crds"}),"\nchart, then the ",(0,t.jsx)(n.code,{children:"kubewarden-controller"})," chart. After that, upgrade the\n",(0,t.jsx)(n.code,{children:"policy-server"})," (via ",(0,t.jsx)(n.code,{children:"kubewarden-defaults"})," chart or bumping the images of\ncustom ones) and ",(0,t.jsx)(n.code,{children:"kwctl"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"downgrades",children:"Downgrades"}),"\n",(0,t.jsxs)(n.p,{children:["Downgrades are ",(0,t.jsx)(n.strong,{children:"not"})," supported, and haven't been tested. Nevertheless,\nthere's a reasonable expectation that they should work."]}),"\n",(0,t.jsx)(n.h2,{id:"sdks-policies",children:"SDKs, policies"}),"\n",(0,t.jsx)(n.p,{children:"Policy SDKs for the different languages, and policies maintained by the\nKubewarden team follow their own semantic versioning and are supported on their\nlatest release. There is no need for an upgrade path for them, just a bump to\nthe latest release."}),"\n",(0,t.jsx)(n.p,{children:"Changes to the Kubewarden stack may mean that policies and SDKs receive updates\nto make use of the latest Kubewarden features. Care is taken to perform these updates\nin a backwards-compatible manner."}),"\n",(0,t.jsxs)(n.p,{children:["For example, a Kubewarden minor version adding support for Audit Scanner\n(",(0,t.jsx)(n.code,{children:"v1.7.0"}),") means that policies gained a new ",(0,t.jsx)(n.code,{children:"spec.backgroundAudit"})," field,\noptional, backwards-compatible and set to ",(0,t.jsx)(n.code,{children:"true"})," by default."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},d=s.createContext(t);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);