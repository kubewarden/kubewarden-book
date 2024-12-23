"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[75853],{12082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"explanations/audit-scanner/audit-scanner","title":"What is the Audit Scanner?","description":"An overview of the Kubewarden Audit Scanner.","source":"@site/versioned_docs/version-1.9/explanations/audit-scanner/audit-scanner.md","sourceDirName":"explanations/audit-scanner","slug":"/explanations/audit-scanner/","permalink":"/1.9/explanations/audit-scanner/","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/explanations/audit-scanner/audit-scanner.md","tags":[],"version":"1.9","lastUpdatedAt":1734954129000,"frontMatter":{"sidebar_label":"What is the Audit Scanner?","title":"What is the Audit Scanner?","description":"An overview of the Kubewarden Audit Scanner.","keywords":["kubewarden","audit scanner","kubernetes"]},"sidebar":"docs","previous":{"title":"Kubewarden vs OPA Gatekeeper","permalink":"/1.9/explanations/opa-comparison"},"next":{"title":"Limitations","permalink":"/1.9/explanations/audit-scanner/limitations"}}');var s=t(74848),a=t(28453);const r={sidebar_label:"What is the Audit Scanner?",title:"What is the Audit Scanner?",description:"An overview of the Kubewarden Audit Scanner.",keywords:["kubewarden","audit scanner","kubernetes"]},o=void 0,c={},d=[{value:"Enable audit scanner",id:"enable-audit-scanner",level:2},{value:"Policies",id:"policies",level:2},{value:"Permissions and ServiceAccounts",id:"permissions-and-serviceaccounts",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/audit-scanner"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The Audit Scanner feature is available starting from Kubewarden 1.7.0 release"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"audit-scanner"})," component constantly checks resources in the cluster.\nIt flags the ones that don't adhere with the Kubewarden policies deployed in the cluster."]}),"\n",(0,s.jsx)(n.p,{children:"Policies evolve over time.\nNew ones are deployed, existing ones are updated.\nVersions and configuration settings change.\nThis can lead to situations where resources already inside the cluster are no longer compliant.\nThe audit scanning feature provides Kubernetes administrators with a tool that constantly verifies the compliance state of their clusters."}),"\n",(0,s.jsx)(n.p,{children:"To explain the use of the audit scanner in Kubewarden, consider the following scenario."}),"\n",(0,s.jsx)(n.p,{children:"Assume Bob is deploying a WordPress Pod in the cluster.\nBob is new to Kubernetes, makes a mistake and deploys the Pod running as a privileged container.\nAt this point there's no policy preventing that so the Pod is\nsuccessfully created in the cluster."}),"\n",(0,s.jsx)(n.p,{children:"Some days later, Alice, the Kubernetes administrator, enforces a Kubewarden policy that prohibits the creation of privileged containers.\nThe Pod deployed by Bob keeps running in the cluster as it already exists."}),"\n",(0,s.jsx)(n.p,{children:"A report generated by the audit scanner lets Alice identify all the workloads that are violating creation policies.\nThis includes the WordPress Pod created by Bob."}),"\n",(0,s.jsx)(n.p,{children:"The audit scanner operates by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"identifying all the resources to audit"}),"\n",(0,s.jsx)(n.li,{children:"for each it builds a synthetic admission request with the resource's data"}),"\n",(0,s.jsx)(n.li,{children:"it sends each admission request to a policy server endpoint which is only for audit requests"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For the policy evaluating the request,\nthere are no differences between real or audit requests.\nThe data received is the same.\nThis auditing policy server endpoint has instrumentation to collect data of the evaluation.\nSo, users can use their monitoring tools analyze audit scanner data."}),"\n",(0,s.jsx)(n.h2,{id:"enable-audit-scanner",children:"Enable audit scanner"}),"\n",(0,s.jsx)(n.p,{children:"You can enable the audit scanner starting from the Kubewarden 1.7.0 release."}),"\n",(0,s.jsxs)(n.p,{children:["Detailed installation instructions are in the\n",(0,s.jsx)(n.a,{href:"../howtos/audit-scanner",children:"audit scanner How-to"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"policies",children:"Policies"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the audit scanner evaluates every policy.\nOperators that want to skip a policy evaluation in the audit scanner must set the ",(0,s.jsx)(n.code,{children:"spec.backgroundAudit"})," field to ",(0,s.jsx)(n.code,{children:"false"})," in the policy definition."]}),"\n",(0,s.jsx)(n.p,{children:"Also, policies in Kubewarden now support two optional annotations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"io.kubewarden.policy.severity"})," annotation lets you specify the severity level of the policy violation, such as ",(0,s.jsx)(n.code,{children:"critical"}),", ",(0,s.jsx)(n.code,{children:"high"}),", ",(0,s.jsx)(n.code,{children:"medium"}),", ",(0,s.jsx)(n.code,{children:"low"})," or ",(0,s.jsx)(n.code,{children:"info"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"io.kubewarden.policy.category"})," annotation lets you categorize the policy based on a specific domain or purpose, such as ",(0,s.jsx)(n.code,{children:"PSP"}),", ",(0,s.jsx)(n.code,{children:"compliance"}),", or ",(0,s.jsx)(n.code,{children:"performance"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See the policy authors ",(0,s.jsx)(n.a,{href:"/1.9/writing-policies/",children:"documentation"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"permissions-and-serviceaccounts",children:"Permissions and ServiceAccounts"}),"\n",(0,s.jsx)(n.p,{children:"The audit scanner in Kubewarden requires specific Role Based Access Control (RBAC) configurations to be able to scan Kubernetes resources and save the results.\nA correct default Service Account with those permissions is created during the installation.\nThe user can create and configure their own ServiceAccount to fine tune access to resources."}),"\n",(0,s.jsxs)(n.p,{children:["The default audit scanner ",(0,s.jsx)(n.code,{children:"ServiceAccount"})," is bound to the ",(0,s.jsx)(n.code,{children:"view"})," ",(0,s.jsx)(n.code,{children:"ClusterRole"})," provided by Kubernetes.\nThis ",(0,s.jsx)(n.code,{children:"ClusterRole"})," allows read-only access to a wide range of Kubernetes resources within a namespace.\nYou can find more details about this role in the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",children:"Kubernetes documentation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Also, the audit scanner is bound to a ",(0,s.jsx)(n.code,{children:"ClusterRole"})," that grants read access to Kubewarden resource types and read-write access to the ",(0,s.jsx)(n.code,{children:"PolicyReport"})," ",(0,s.jsx)(n.a,{href:"/1.9/explanations/audit-scanner/policy-reports",children:"CRDs"}),".\nThese permissions let the scanner fetch resources for conducting audit evaluations and creating policy reports based on the evaluation results."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);