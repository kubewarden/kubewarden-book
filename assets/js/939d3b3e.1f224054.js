"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[27899],{72186:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"architecture","title":"Architecture","description":"The Kubewarden architecture","source":"@site/versioned_docs/version-1.10/architecture.md","sourceDirName":".","slug":"/architecture","permalink":"/1.10/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/architecture.md","tags":[],"version":"1.10","lastUpdatedAt":1738256368000,"frontMatter":{"sidebar_label":"Architecture","title":"Architecture","description":"The Kubewarden architecture","keywords":["kubewarden","kubernetes","architecture"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["architecture"]},"sidebar":"docs","previous":{"title":"Audit Scanner Installation","permalink":"/1.10/howtos/audit-scanner"},"next":{"title":"Policy communication specification","permalink":"/1.10/writing-policies/spec/intro-spec"}}');var s=i(74848),o=i(28453);const t={sidebar_label:"Architecture",title:"Architecture",description:"The Kubewarden architecture",keywords:["kubewarden","kubernetes","architecture"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["architecture"]},c=void 0,d={},a=[{value:"The journey of a Kubewarden policy",id:"the-journey-of-a-kubewarden-policy",level:2},{value:"Default policy server",id:"default-policy-server",level:3},{value:"Defining the first policy",id:"defining-the-first-policy",level:3},{value:"Reconciliation of <code>policy-server</code>",id:"reconciliation-of-policy-server",level:3},{value:"Making Kubernetes aware of the policy",id:"making-kubernetes-aware-of-the-policy",level:3},{value:"Policy in action",id:"policy-in-action",level:3},{value:"How Kubewarden handles many policy servers and policies",id:"how-kubewarden-handles-many-policy-servers-and-policies",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Kubewarden is a Kubernetes policy engine.\nIt uses policies written in a programming language of your choosing.\nThis language must generate a WebAssembly binary for Kubewarden to use."}),"\n",(0,s.jsx)(n.p,{children:"The Kubewarden stack consists of these components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Kubewarden Custom Resources:\nThese are ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",children:"Kubernetes Custom Resources"}),"\nthat simplify the process of managing policies."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/kubewarden-controller",children:(0,s.jsx)(n.code,{children:"kubewarden-controller"})}),":\nThis is a Kubernetes controller that reconciles Kubewarden's Custom Resources.\nThis controller creates parts of the Kubewarden stack.\nIt also translates Kubewarden configuration into Kubernetes directives."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Kubewarden policies:\nThese are WebAssembly modules holding the validation or mutation logic.\nWebAssembly modules have detailed documentation in the\n",(0,s.jsx)(n.a,{href:"/1.10/writing-policies/",children:"writing policies"})," sections."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/policy-server",children:(0,s.jsx)(n.code,{children:"policy-server"})}),":\nThe ",(0,s.jsx)(n.code,{children:"policy-server"})," receives requests for validation.\nIt validates the requests by executing Kubewarden policies."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/audit-scanner",children:(0,s.jsx)(n.code,{children:"audit-scanner"})}),":\nThe audit scanner inspects the resources already in the cluster. It identifies those violating Kubewarden policies."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden integrates with Kubernetes using\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",children:"Dynamic Admission Control"}),".\nIn particular, Kubewarden operates as a Kubernetes Admission Webhook.\nThe ",(0,s.jsx)(n.code,{children:"policy-server"})," is the Webhook endpoint called by the Kubernetes API server to validate requests."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," registers the needed\n",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," or\n",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"}),"\nobjects with the Kubernetes API server."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/1.10/explanations/audit-scanner/",children:"Audit scanner"}),"\nconstantly checks the resources declared in the cluster,\nflagging the ones that no longer adhere with the deployed Kubewarden policies."]}),"\n",(0,s.jsx)(n.p,{children:"The diagram shows the architecture of a cluster running the Kubewarden stack:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Full architecture",src:i(88242).A+"",width:"1387",height:"632"})}),"\n",(0,s.jsx)(n.h2,{id:"the-journey-of-a-kubewarden-policy",children:"The journey of a Kubewarden policy"}),"\n",(0,s.jsx)(n.p,{children:"The architecture diagram appears complex at first.\nThis section covers it step by step."}),"\n",(0,s.jsx)(n.h3,{id:"default-policy-server",children:"Default policy server"}),"\n",(0,s.jsx)(n.p,{children:"On a new cluster, the Kubewarden components defined are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the Custom Resource Definitions (CRD)"}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," Deployment"]}),"\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.code,{children:"PolicyServer"})," Custom Resource named ",(0,s.jsx)(n.code,{children:"default"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Defining the first ClusterAdmissionPolicy resource",src:i(71924).A+"",width:"1123",height:"635"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," notices the default ",(0,s.jsx)(n.code,{children:"PolicyServer"})," resource,\nit creates a Deployment of the ",(0,s.jsx)(n.code,{children:"policy-server"})," component."]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden works as a Kubernetes Admission Webhook.\nKubernetes specifies using TLS to secure all Webhook endpoints.\nThe ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," sets up this secure communication\nby:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generating a self-signed Certificate Authority"}),"\n",(0,s.jsxs)(n.li,{children:["Use this CA to generate a TLS certificate key for the ",(0,s.jsx)(n.code,{children:"policy-server"})," Service."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These objects are all stored as ",(0,s.jsx)(n.code,{children:"Secret"})," resources in Kubernetes."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," creates the ",(0,s.jsx)(n.code,{children:"policy-server"})," Deployment\nand a Kubernetes ClusterIP Service\nto expose it inside the cluster network."]}),"\n",(0,s.jsx)(n.h3,{id:"defining-the-first-policy",children:"Defining the first policy"}),"\n",(0,s.jsxs)(n.p,{children:["This diagram shows what happens when defining the first policy\nbound to the default ",(0,s.jsx)(n.code,{children:"policy-server"})," in the cluster:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Defining the first ClusterAdmissionPolicy resource",src:i(90831).A+"",width:"1123",height:"635"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"A policy must define which Policy Server it must run on.\nOr, we say it binds to a Policy Server.\nYou can have different policies with the same Wasm module and settings running in many Policy Servers.\nHowever, you can't have a single policy definition that runs in many policy servers."})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," notices the new ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," resource and\nso finds the bound ",(0,s.jsx)(n.code,{children:"PolicyServer"})," and reconciles it."]}),"\n",(0,s.jsxs)(n.h3,{id:"reconciliation-of-policy-server",children:["Reconciliation of ",(0,s.jsx)(n.code,{children:"policy-server"})]}),"\n",(0,s.jsxs)(n.p,{children:["When creating, modifying or deleting a ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"}),",\na reconciliation loop activates in ",(0,s.jsx)(n.code,{children:"kubewarden-controller"}),",\nfor the ",(0,s.jsx)(n.code,{children:"PolicyServer"})," owning the policy.\nThis reconciliation loop creates a ConfigMap with all the polices bound to the ",(0,s.jsx)(n.code,{children:"PolicyServer"}),".\nThen the Deployment rollout of the ",(0,s.jsx)(n.code,{children:"policy-server"})," starts.\nIt results in starting the new ",(0,s.jsx)(n.code,{children:"policy-server"})," instance with the updated configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["At start time, the ",(0,s.jsx)(n.code,{children:"policy-server"})," reads its configuration from the ConfigMap\nand downloads all the Kubewarden policies specified.\nYou can download Kubewarden policies from remote HTTP servers and container registries."]}),"\n",(0,s.jsxs)(n.p,{children:["You use policy settings parameters to tune a policies' behavior.\nAfter startup and policy download the ",(0,s.jsx)(n.code,{children:"policy-server"}),"\nchecks the policy settings provided by the user are valid."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"policy-server"})," validates policy settings by invoking\nthe ",(0,s.jsx)(n.code,{children:"validate_setting"})," function exposed by each policy.\nThere is further documentation in the\n",(0,s.jsx)(n.a,{href:"/1.10/writing-policies/spec/intro-spec",children:"writing policies section"}),"\nof the documentation."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"policy-server"})," exits with an error\nif one or more policies received wrong configuration parameters\nfrom the policy specification provided by the user."]}),"\n",(0,s.jsxs)(n.p,{children:["If all policies are correctly configured,\n",(0,s.jsx)(n.code,{children:"policy-server"}),"\nspawns a pool of worker threads\nto evaluate incoming requests\nusing the Kubewarden policies\nspecified by the user."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, the ",(0,s.jsx)(n.code,{children:"policy-server"})," starts a HTTPS server,\nthe Kubewarden Policy Server,\nlistening to incoming validation requests.\nKubewarden uses the TLS key and certificate\ncreated by ",(0,s.jsx)(n.code,{children:"kubewarden-controller"}),"\nto secure the web server."]}),"\n",(0,s.jsxs)(n.p,{children:["The web server exposes each policy by a dedicated path\nfollowing the naming convention: ",(0,s.jsx)(n.code,{children:"/validate/<policy ID>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This diagram shows the cluster when initialization of ",(0,s.jsx)(n.code,{children:"policy-server"})," is complete:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"policy-server initialized",src:i(51814).A+"",width:"1175",height:"641"})}),"\n",(0,s.jsx)(n.h3,{id:"making-kubernetes-aware-of-the-policy",children:"Making Kubernetes aware of the policy"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"policy-server"})," Pods have a\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",children:(0,s.jsx)(n.code,{children:"Readiness Probe"})}),",\nthat ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," uses to check when\nthe ",(0,s.jsx)(n.code,{children:"policy-server"})," Deployment is ready to evaluate ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-request-and-response",children:(0,s.jsx)(n.code,{children:"AdmissionReview"})}),"s."]}),"\n",(0,s.jsxs)(n.p,{children:["Once the ",(0,s.jsx)(n.code,{children:"policy-server"})," Deployment is marked as ",(0,s.jsx)(n.code,{children:"Ready"}),",\nthe ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," makes the Kubernetes API server\naware of the new policy by creating either a\n",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," or a ",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:["Each policy has a dedicated\n",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," or ",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"}),"\nwhich points to the Webhook endpoint served by ",(0,s.jsx)(n.code,{children:"policy-server"}),".\nThe endpoint is reachable by the ",(0,s.jsx)(n.code,{children:"/validate/<policy ID>"})," URL."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Kubernetes Webhook endpoint configuration",src:i(44889).A+"",width:"1181",height:"624"})}),"\n",(0,s.jsx)(n.h3,{id:"policy-in-action",children:"Policy in action"}),"\n",(0,s.jsxs)(n.p,{children:["Now that all the necessary plumbing is complete,\nKubernetes starts sending Admission Review requests to the right ",(0,s.jsx)(n.code,{children:"policy-server"})," endpoints."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Policy in action",src:i(47984).A+"",width:"1181",height:"624"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"policy-server"})," receives the Admission Request object and,\nbased on the endpoint that received the request,\nuses the correct policy to evaluate it."]}),"\n",(0,s.jsxs)(n.p,{children:["Each policy is evaluated inside its own dedicated WebAssembly sandbox.\nThe communication between ",(0,s.jsx)(n.code,{children:"policy-server"}),' (the "host")\nand the WebAssembly policy (the "guest")\nuses the waPC communication protocol.\nThe protocol description is part of the ',(0,s.jsx)(n.a,{href:"/1.10/writing-policies/",children:"writing policies"})," documentation."]}),"\n",(0,s.jsx)(n.h2,{id:"how-kubewarden-handles-many-policy-servers-and-policies",children:"How Kubewarden handles many policy servers and policies"}),"\n",(0,s.jsx)(n.p,{children:"A cluster can have many policy servers and Kubewarden policies defined.\nThere are benefits of having many policy servers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can isolate noisy namespaces or tenants,\nthose generating many policy evaluations,\nfrom the rest of the cluster so as not to adversely affect other cluster operations."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can run mission-critical policies in a dedicated Policy Server pool,\nmaking your infrastructure more resilient."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"PolicyServer"})," resource defines each ",(0,s.jsx)(n.code,{children:"policy-server"}),"\nand a ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," or ",(0,s.jsx)(n.code,{children:"AdmissionPolicy"})," resource defines each policy."]}),"\n",(0,s.jsx)(n.p,{children:"This leads back to the initial diagram:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Full architecture",src:i(88242).A+"",width:"1387",height:"632"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," is bound to a ",(0,s.jsx)(n.code,{children:"PolicyServer"}),".\nAny ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicies"})," not specifying a ",(0,s.jsx)(n.code,{children:"PolicyServer"}),"\nare bound to the ",(0,s.jsx)(n.code,{children:"default"})," ",(0,s.jsx)(n.code,{children:"PolicyServer"}),".\nIf a ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," references a ",(0,s.jsx)(n.code,{children:"PolicyServer"}),"\nthat doesn't exist, its state is ",(0,s.jsx)(n.code,{children:"unschedulable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"policy-server"})," defines many validation endpoints,\none for each policy defined in its configuration file.\nYou can load the same policy many times,\nwith different configuration parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"})," and ",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," resources\nmake the Kubernetes API server aware of these policies.\nThen ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," keeps the API server\nand configuration resources in synchronization."]}),"\n",(0,s.jsxs)(n.p,{children:["The Kubernetes API server dispatches incoming admission requests\nto the correct validation endpoint exposed by ",(0,s.jsx)(n.code,{children:"policy-server"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},88242:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture-59488ce36b12f13c779fe02a35bb1ffb.png"},71924:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture_sequence_01-4f634ca9150b2d99a07dd0d4a2624b5f.png"},90831:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture_sequence_02-9f94d02c0a9e42b25bccae6aada0a2bd.png"},51814:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture_sequence_03-b601f6352389dcc81dad199af0e0c87a.png"},44889:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture_sequence_04-615e4e3f91682b0a5a52382f45e5803b.png"},47984:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/architecture_sequence_05-c8eae1426a3086cdb921feda111ff30d.png"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var r=i(96540);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);