"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[68854],{14808:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=i(85893),r=i(11151);const o={sidebar_label:"Architecture",sidebar_position:61,title:"Kubewarden architecture",description:"The Kubewarden architecture",keywords:["kubewarden","kubernetes","architecture"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["architecture"]},t=void 0,c={id:"explanations/architecture",title:"Kubewarden architecture",description:"The Kubewarden architecture",source:"@site/versioned_docs/version-1.15/explanations/architecture.md",sourceDirName:"explanations",slug:"/explanations/architecture",permalink:"/1.15/explanations/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.15/explanations/architecture.md",tags:[],version:"1.15",lastUpdatedAt:1724333903e3,sidebarPosition:61,frontMatter:{sidebar_label:"Architecture",sidebar_position:61,title:"Kubewarden architecture",description:"The Kubewarden architecture",keywords:["kubewarden","kubernetes","architecture"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["architecture"]},sidebar:"docs",previous:{title:"Policy Reports",permalink:"/1.15/explanations/audit-scanner/policy-reports"},next:{title:"Common tasks",permalink:"/1.15/howtos/tasks"}},a={},l=[{value:"What <em>is</em> a policy?",id:"what-is-a-policy",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Making use of core Kubernetes features",id:"making-use-of-core-kubernetes-features",level:3},{value:"Effectively uses Kubernetes architecture",id:"effectively-uses-kubernetes-architecture",level:3},{value:"Extensible policy definition",id:"extensible-policy-definition",level:3},{value:"Direct admission control",id:"direct-admission-control",level:3},{value:"OCI based policy artifacts",id:"oci-based-policy-artifacts",level:3},{value:"Fine-grained policy application",id:"fine-grained-policy-application",level:3},{value:"The Kubewarden stack",id:"the-kubewarden-stack",level:2},{value:"The journey of a Kubewarden policy",id:"the-journey-of-a-kubewarden-policy",level:2},{value:"Default PolicyServer",id:"default-policyserver",level:3},{value:"Defining the first policy",id:"defining-the-first-policy",level:3},{value:"Reconciliation of a <code>policy-server</code>",id:"reconciliation-of-a-policy-server",level:3},{value:"Making Kubernetes aware of the policy",id:"making-kubernetes-aware-of-the-policy",level:3},{value:"Policy in action",id:"policy-in-action",level:3},{value:"How Kubewarden handles many PolicyServer and policies",id:"how-kubewarden-handles-many-policyserver-and-policies",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/architecture"})}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden is a Kubernetes policy engine.\nIt uses policies written in a programming language of your choosing.\nThis language must generate a WebAssembly binary for Kubewarden to use."}),"\n",(0,s.jsxs)(n.h2,{id:"what-is-a-policy",children:["What ",(0,s.jsx)(n.em,{children:"is"})," a policy?"]}),"\n",(0,s.jsxs)(n.p,{children:["A policy is an ",(0,s.jsx)(n.a,{href:"https://opencontainers.org/",children:"Open Container Initiative"})," (OCI)\nartifact containing a WebAssembly module,\nthe policy code, and the metadata required by PolicyServer\nperforming admission request validations and mutations."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In the same manner as\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/contribute/style/style-guide/",children:"Kubernetes"}),",\nKubewarden uses the terms\n'PolicyServer' when discussing the Kubewarden policy server\nand\n",(0,s.jsx)(n.code,{children:"policy-server"})," when discussing Pod or Deployment of a Kubewarden PolicyServer."]})}),"\n",(0,s.jsx)(n.h2,{id:"design-principles",children:"Design principles"}),"\n",(0,s.jsx)(n.h3,{id:"making-use-of-core-kubernetes-features",children:"Making use of core Kubernetes features"}),"\n",(0,s.jsx)(n.p,{children:"The team designed Kubewarden to use core features of Kubernetes,\nwithout reinventing the wheel.\nThe project utilizes a combination of:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Kubernetes Controllers"}),"\n",(0,s.jsx)(n.li,{children:"Custom Resource Definitions (CRDs)"}),"\n",(0,s.jsx)(n.li,{children:"Webhooks (Validation and Mutating)"}),"\n",(0,s.jsx)(n.li,{children:"the Control Plane's event notification system"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"effectively-uses-kubernetes-architecture",children:"Effectively uses Kubernetes architecture"}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden operates seamlessly within the Kubernetes ecosystem.\nAt its core, the Kubewarden controller is a Kubernetes controller,\nmonitoring Kubewarden Custom Resource Definitions (CRDs)\nand configuring Kubernetes resources to execute them.\nThis integration ensures that Kubewarden uses the built-in Kubernetes mechanisms,\nsuch as controllers and CRDs, to watch, manage, and apply security policies efficiently."}),"\n",(0,s.jsx)(n.h3,{id:"extensible-policy-definition",children:"Extensible policy definition"}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden employs CRDs to define and manage Kubewarden resources,\nwhich specify the rules for admission request validations.\nThis design enables users to extend Kubernetes' capabilities with custom admission controls,\nensuring that security and compliance policy enforcement is consistent across the cluster."}),"\n",(0,s.jsx)(n.h3,{id:"direct-admission-control",children:"Direct admission control"}),"\n",(0,s.jsxs)(n.p,{children:["When setup by the Kubewarden controller,\nthe policy-server Service receives admission requests directly from the Kubernetes control plane,\nusing ",(0,s.jsx)(n.code,{children:"ValidationWebhooks"})," and ",(0,s.jsx)(n.code,{children:"MutatingWebhooks"}),".\nThis direct interaction streamlines the admission control process,\nreducing latency and increasing efficiency in policy enforcement."]}),"\n",(0,s.jsx)(n.p,{children:"WebAssembly offers a sand-boxed execution environment,\nensuring policies run in isolation,\nthus enhancing the security and stability of the policy enforcement mechanism.\nThis isolation prevents policies from interfering with each other or with the host system,\nmitigating the risk of malicious code execution.\nWebAssembly is portable and efficient,\nenabling policies to run across different environments without modification.\nThis cross-platform compatibility ensures that Kubewarden policies are versatile,\nand can be distributed and executed in diverse Kubernetes clusters"}),"\n",(0,s.jsx)(n.h3,{id:"oci-based-policy-artifacts",children:"OCI based policy artifacts"}),"\n",(0,s.jsx)(n.p,{children:"Policies in Kubewarden are OCI (Open Container Initiative) artifacts.\nThis standardization makes the distribution and versioning of policies easier,\nPolicies contain both the WebAssembly modules for enforcement logic,\nand metadata necessary for the PolicyServer's operation.\nLeveraging OCI artifacts promotes interoperability and ease of management\nwithin cloud ecosystems."}),"\n",(0,s.jsx)(n.h3,{id:"fine-grained-policy-application",children:"Fine-grained policy application"}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden associates policies with their own 'validation' or 'mutating' webhook,\nallowing for fine-grained application of admission controls.\nThis flexibility enables administrators\nto tailor the enforcement of policies according to specific needs,\nenhancing the security and compliance posture of the Kubernetes cluster."}),"\n",(0,s.jsx)(n.h2,{id:"the-kubewarden-stack",children:"The Kubewarden stack"}),"\n",(0,s.jsx)(n.p,{children:"The Kubewarden consists of these components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Kubewarden Custom Resources are\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",children:"Kubernetes Custom Resources"}),"\nthat simplify the process of managing policies."]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden integrates with Kubernetes using\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",children:"Dynamic Admission Control"}),".\nIn particular, Kubewarden operates as a Kubernetes Admission Webhook.\nThe ",(0,s.jsx)(n.code,{children:"policy-server"})," is the Webhook endpoint called by the Kubernetes API server to validate requests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/kubewarden-controller",children:"Kubewarden controller"}),"\nis a Kubernetes controller that reconciles Kubewarden's Custom Resources.\nThis controller creates parts of the Kubewarden stack.\nIt also translates Kubewarden configuration into Kubernetes directives."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," registers the needed\n",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," or\n",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"}),"\nobjects with the Kubernetes API server."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/1.15/tutorials/writing-policies/",children:"Kubewarden policies"}),"\nare WebAssembly modules holding the validation or mutation logic.\nWebAssembly modules have detailed documentation in the\n",(0,s.jsx)(n.a,{href:"/1.15/tutorials/writing-policies/",children:"writing policies"})," sections."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/policy-server",children:"PolicyServer"}),"\nreceives requests for validation.\nIt validates the requests by executing Kubewarden policies."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/audit-scanner",children:"audit scanner"}),"\ninspects the resources already in the cluster.\nIt identifies those violating Kubewarden policies."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/1.15/explanations/audit-scanner/",children:"Audit scanner"}),"\nconstantly checks the resources declared in the cluster,\nflagging the ones that no longer adhere with the deployed Kubewarden policies."]}),"\n",(0,s.jsx)(n.mermaid,{value:'%%{\n  init: {\n    "flowchart": {\n      "htmlLabels": false,\n    }\n  }\n}%%\ngraph LR\n    subgraph " "\n      direction LR\n      subgraph " "\n        direction LR\n          k8s(("Kubernetes"))\n          registry[("OCI registry")]\n        end\n        subgraph kw["`**Kubewarden**`"]\n          controller("`**KW controller**`")\n          subgraph policy-server["`**policy-server**`"]\n            direction LR\n            kw-policy-1{{"Policy 1"}}\n            kw-policy-2{{"Policy 2"}}\n            kw-policy-3{{"Policy 3"}}\n        end\n        webhooks(["ValidationWebhooks and\\nMutatingWebhooks"])\n        audit-scanner["KW audit scanner"]\n      end\n    end\n    policy-server --\x3e|"downloads\\npolicies from"| registry\n    controller --\x3e|"watches for\\nevents"| k8s\n    controller --\x3e|"creates"| webhooks\n    controller --\x3e|"creates\\npolicy-server\\ninstances"| policy-server\n    k8s -. "sends admission\\nrequests using" .-> webhooks\n    webhooks -. "sent admission\\nrequests from K8s" .-> policy-server\n    audit-scanner --\x3e|"sends audit\\nadmission requests"| policy-server'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"the-journey-of-a-kubewarden-policy",children:"The journey of a Kubewarden policy"}),"\n",(0,s.jsx)(n.h3,{id:"default-policyserver",children:"Default PolicyServer"}),"\n",(0,s.jsx)(n.p,{children:"On a new cluster, the Kubewarden components defined are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Custom Resource Definitions (CRD)"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," Deployment"]}),"\n",(0,s.jsxs)(n.li,{children:["A PolicyServer Custom Resource named ",(0,s.jsx)(n.code,{children:"default"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," notices the default PolicyServer resource,\nit creates a ",(0,s.jsx)(n.code,{children:"policy-server"})," deployment of the PolicyServer component."]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden works as a Kubernetes Admission Webhook.\nKubernetes specifies using\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",children:"Transport Layer Security"}),"\n(TLS) to secure all Webhook endpoints.\nThe ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," sets up this secure communication\nby:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generating a self-signed Certificate Authority"}),"\n",(0,s.jsxs)(n.li,{children:["Use this CA to generate a TLS certificate key for the ",(0,s.jsx)(n.code,{children:"policy-server"})," Service."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These objects are all stored as ",(0,s.jsx)(n.code,{children:"Secret"})," resources in Kubernetes."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," creates the ",(0,s.jsx)(n.code,{children:"policy-server"})," Deployment\nand a Kubernetes ClusterIP Service\nto expose it inside the cluster network."]}),"\n",(0,s.jsx)(n.h3,{id:"defining-the-first-policy",children:"Defining the first policy"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A policy must define which ",(0,s.jsx)(n.code,{children:"policy-server"})," it must run on.\nIt ",(0,s.jsx)(n.strong,{children:"binds"})," to a ",(0,s.jsx)(n.code,{children:"policy-server"})," instance.\nYou can have different policies with the same Wasm module and settings\nrunning in many PolicyServers.\nHowever, you can't have a single policy definition that runs in many PolicyServers."]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," notices the new ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," resource and\nso finds the bound ",(0,s.jsx)(n.code,{children:"policy-server"})," and reconciles it."]}),"\n",(0,s.jsxs)(n.h3,{id:"reconciliation-of-a-policy-server",children:["Reconciliation of a ",(0,s.jsx)(n.code,{children:"policy-server"})]}),"\n",(0,s.jsxs)(n.p,{children:["When creating, modifying or deleting a ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," or ",(0,s.jsx)(n.code,{children:"AdmissionPolicy"}),",\na reconciliation loop activates in ",(0,s.jsx)(n.code,{children:"kubewarden-controller"}),",\nfor the ",(0,s.jsx)(n.code,{children:"policy-server"})," owning the policy.\nThis reconciliation loop creates a ",(0,s.jsx)(n.code,{children:"ConfigMap"})," with all the polices bound to the ",(0,s.jsx)(n.code,{children:"policy-server"}),".\nThen the Deployment rollout of the ",(0,s.jsx)(n.code,{children:"policy-server"})," starts.\nIt results in starting the new ",(0,s.jsx)(n.code,{children:"policy-server"})," instance with the updated configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["At start time, the ",(0,s.jsx)(n.code,{children:"policy-server"})," reads its configuration from the ConfigMap\nand downloads all the Kubewarden policies specified.\nYou can download Kubewarden policies from remote HTTP servers and container registries."]}),"\n",(0,s.jsxs)(n.p,{children:["You use policy settings parameters to tune a policies' behavior.\nAfter startup and policy download the ",(0,s.jsx)(n.code,{children:"policy-server"}),"\nchecks the policy settings provided by the user are valid."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"policy-server"})," validates policy settings by invoking\nthe ",(0,s.jsx)(n.code,{children:"validate_setting"})," function exposed by each policy.\nThere is further documentation in the\n",(0,s.jsx)(n.a,{href:"/1.15/reference/spec/intro-spec",children:"specification reference"}),"\nsection of the documentation."]}),"\n",(0,s.jsx)(n.p,{children:"If one or more policies received wrong configuration parameters,\nfrom the policy specification provided by the user,\nthen any admission requests evaluated by that policy return an error."}),"\n",(0,s.jsxs)(n.p,{children:["When Kubewarden has configured all policies,\nthe ",(0,s.jsx)(n.code,{children:"policy-server"}),"\nspawns a pool of worker threads to evaluate incoming requests\nusing the Kubewarden policies specified by the user."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, the ",(0,s.jsx)(n.code,{children:"policy-server"})," starts a HTTPS server,\nlistening to incoming validation requests.\nKubewarden uses the TLS key and certificate\ncreated by the Kubewarden controller\nto secure the web server."]}),"\n",(0,s.jsxs)(n.p,{children:["The web server exposes each policy by a dedicated path\nfollowing the naming convention: ",(0,s.jsx)(n.code,{children:"/validate/<policy ID>"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"making-kubernetes-aware-of-the-policy",children:"Making Kubernetes aware of the policy"}),"\n",(0,s.jsxs)(n.p,{children:["All ",(0,s.jsx)(n.code,{children:"policy-server"})," instances have a\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",children:(0,s.jsx)(n.code,{children:"Readiness Probe"})}),",\nthat ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," uses to check when\nthe ",(0,s.jsx)(n.code,{children:"policy-server"})," Deployment is ready to evaluate an\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-request-and-response",children:(0,s.jsx)(n.code,{children:"AdmissionReview"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Once Kubewarden marks the ",(0,s.jsx)(n.code,{children:"policy-server"})," deployment as 'uniquely reachable' or ",(0,s.jsx)(n.code,{children:"Ready"}),",\nthe ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," makes the Kubernetes API server aware of the new policy.\nThis is by creating either a ",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," or a ",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"})," object.\nIn this context, 'uniquely reachable',\nmeans that all the PolicyServer instances in the cluster have the latest policy configuration installed.\nThe distinction, is a fine point, but is necessary,\ndue to how roll-out of PolicyServers works.\nIt's possible to have the same policy,\non different PolicyServers with different configurations."]}),"\n",(0,s.jsxs)(n.p,{children:["Each policy has a dedicated\n",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," or ",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"}),"\npointing to the Webhook endpoint served by ",(0,s.jsx)(n.code,{children:"policy-server"}),".\nThe endpoint is reachable at the ",(0,s.jsx)(n.code,{children:"/validate/<policy ID>"})," URL."]}),"\n",(0,s.jsx)(n.h3,{id:"policy-in-action",children:"Policy in action"}),"\n",(0,s.jsxs)(n.p,{children:["Now that all the necessary plumbing is complete,\nKubernetes starts sending Admission Review requests to the right ",(0,s.jsx)(n.code,{children:"policy-server"})," endpoints."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"policy-server"})," receives the Admission Request object and,\nbased on the endpoint that received the request,\nuses the correct policy to evaluate it."]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden evaluates each policy inside its own dedicated WebAssembly sand-box.\nThe communication between a ",(0,s.jsx)(n.code,{children:"policy-server"}),' instance (the "host")\nand the WebAssembly policy (the "guest")\nuses the waPC communication protocol.\nThe protocol description is part of the\n',(0,s.jsx)(n.a,{href:"/1.15/tutorials/writing-policies/",children:"writing policies"})," documentation.\nPolicies can also use the interfaces provided by the\n",(0,s.jsx)(n.a,{href:"/1.15/tutorials/writing-policies/wasi/intro-wasi",children:"Web Assembly System Interface"}),"\n(WASI)."]}),"\n",(0,s.jsx)(n.h2,{id:"how-kubewarden-handles-many-policyserver-and-policies",children:"How Kubewarden handles many PolicyServer and policies"}),"\n",(0,s.jsx)(n.p,{children:"A cluster can have many PolicyServers and Kubewarden policies defined.\nThere are benefits of having many PolicyServers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can isolate noisy namespaces or tenants,\nthose generating many policy evaluations,\nfrom the rest of the cluster so as not to adversely affect other cluster operations."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can run mission-critical policies in a dedicated PolicyServer pool,\nmaking your infrastructure more resilient."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A PolicyServer resource defines each ",(0,s.jsx)(n.code,{children:"policy-server"}),"\nand a ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," or ",(0,s.jsx)(n.code,{children:"AdmissionPolicy"})," resource defines each policy."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," and an ",(0,s.jsx)(n.code,{children:"AdmissionPolicy"})," bind to a ",(0,s.jsx)(n.code,{children:"policy-server"}),".\nAny ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," not specifying a ",(0,s.jsx)(n.code,{children:"policy-server"}),"\nbinds to the default PolicyServer.\nIf a ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," references a ",(0,s.jsx)(n.code,{children:"policy-server"}),"\nthat doesn't exist, its state is ",(0,s.jsx)(n.code,{children:"unschedulable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"policy-server"})," defines many validation endpoints,\none for each policy defined in its configuration file.\nYou can load the same policy many times,\nwith different configuration parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ValidatingWebhookConfiguration"})," and ",(0,s.jsx)(n.code,{children:"MutatingWebhookConfiguration"})," resources\nmake the Kubernetes API server aware of these policies.\nThen ",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," keeps the API server\nand configuration resources in synchronization."]}),"\n",(0,s.jsxs)(n.p,{children:["The Kubernetes API server dispatches incoming admission requests\nto the correct validation endpoint exposed by ",(0,s.jsx)(n.code,{children:"policy-server"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(67294);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);