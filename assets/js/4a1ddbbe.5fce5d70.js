"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[47568],{61699:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"howtos/policy-servers/production-deployments","title":"Configuring PolicyServers for production","description":"Configuring PolicyServers for production","source":"@site/versioned_docs/version-1.20/howtos/policy-servers/03-production-deployments.md","sourceDirName":"howtos/policy-servers","slug":"/howtos/policy-servers/production-deployments","permalink":"/howtos/policy-servers/production-deployments","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.20/howtos/policy-servers/03-production-deployments.md","tags":[],"version":"1.20","lastUpdatedAt":1736867009000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Production deployments","title":"Configuring PolicyServers for production","description":"Configuring PolicyServers for production","keywords":["kubewarden","kubernetes","policyservers","production","poddisruptionbudget","affinity","limits"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policy-servers","production","poddisruptionbudget","affinity","limits"]},"sidebar":"docs","previous":{"title":"Using private registries","permalink":"/howtos/policy-servers/private-registry"},"next":{"title":"Configuring policies","permalink":"/howtos/policies"}}');var o=i(74848),s=i(28453);const t={sidebar_label:"Production deployments",title:"Configuring PolicyServers for production",description:"Configuring PolicyServers for production",keywords:["kubewarden","kubernetes","policyservers","production","poddisruptionbudget","affinity","limits"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policy-servers","production","poddisruptionbudget","affinity","limits"]},a="PodDistruptionBudgets",c={},l=[{value:"Configuring minAvailable or maxUnavailable",id:"configuring-minavailable-or-maxunavailable",level:2},{value:"Configuring Affinity / Anti-affinity",id:"configuring-affinity--anti-affinity",level:2},{value:"Configuring Limits and Requests",id:"configuring-limits-and-requests",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"PolicyServers are critical to the cluster. Reliability of them is important as\nthey process Admission Requests destined for the Kubernetes API via the Validating and\nMutating Webhooks."}),"\n",(0,o.jsx)(n.p,{children:"As with other Dynamic Admission Controllers, this process happens before\nrequests reach the Kubernetes API server. Latency or service delays by\nthe Dynamic Admission Controller may introduce cluster inconsistency,\nDenial of Service, or deadlock."}),"\n",(0,o.jsx)(n.p,{children:"Kubewarden provides several ways to increase the reliability of PolicyServers.\nProduction deployments can vary a great deal, it is up to the operator to configure the deployment for their needs."}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"poddistruptionbudgets",children:"PodDistruptionBudgets"})}),"\n",(0,o.jsxs)(n.p,{children:["The Kubewarden controller can create a\n",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/",children:"PodDisruptionBudget"}),"\n(PDB) for the policy-server Pods. This controls the range of policy-server\nPod replicas associated with the PolicyServer, ensuring high availability\nand controlled eviction in case of node maintenance, scaling operations or\ncluster upgrades."]}),"\n",(0,o.jsxs)(n.p,{children:["This is achieved by setting ",(0,o.jsx)(n.code,{children:"spec.minAvailable"}),", or ",(0,o.jsx)(n.code,{children:"spec.maxUnavailable"})," of the\nPolicyServer resource:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"minAvailable"}),": specifies the minimum number of policy-server Pods\nthat must be available at all times. Can be an integer or a percentage."]}),"\n",(0,o.jsx)(n.p,{children:"Useful for maintaining the operational integrity of the PolicyServer,\nensuring that policies are continously enforced without interruption."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"maxUnavailable"}),": specifies the maximum number of policy-server Pods that can\nbe unavailable at any given time. Can be an integer or a percentage."]}),"\n",(0,o.jsx)(n.p,{children:"Useful for performing rolling updates or partial maintenance without fully\nhalting the policy enforcement mechanism."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You can specify only one of ",(0,o.jsx)(n.code,{children:"maxUnavailable"})," and ",(0,o.jsx)(n.code,{children:"minAvailable"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-minavailable-or-maxunavailable",children:"Configuring minAvailable or maxUnavailable"}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: your-policy-server\nspec:\n  # Other configuration fields\n  minAvailable: 2 # ensure at least two policy-server Pods are available at all times\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: your-policy-server\nspec:\n  # Other configuration fields\n  maxUnavailable: "30%" # ensure no more than 30% of policy-server Pods are unavailable at all times\n'})}),"\n",(0,o.jsx)(n.h1,{id:"affinity--anti-affinity",children:"Affinity / Anti-affinity"}),"\n",(0,o.jsxs)(n.p,{children:["The Kubewarden controller can set the affinity of policy-server Pods. This\nallows constraint of Pods to specific nodes, or Pods against other Pods. For\nmore information on Affinity, see the ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity",children:"Kubernetes\ndocs"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Kubernetes affinity configuration allows constraining Pods to nodes (via\n",(0,o.jsx)(n.code,{children:"spec.affinity.nodeAffinity"}),") or constraining Pods with regards to other Pods\n(via ",(0,o.jsx)(n.code,{children:"spec.affinity.podAffinity"}),"). Affinity can be set as a soft constraint\n(with ",(0,o.jsx)(n.code,{children:"preferredDuringSchedulingIgnoredDuringExecution"}),") or a hard one (with\n",(0,o.jsx)(n.code,{children:"requiredDuringSchedulingIgnoredDuringExecution"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["Affinity / anti-affinity matches against specific labels, be it nodes' labels\n(e.g: ",(0,o.jsx)(n.code,{children:"topology.kubernetes.io/zone"})," set to ",(0,o.jsx)(n.code,{children:"antarctica-east1"}),") or Pods labels.\nPods created from PolicyServer definitions have a label\n",(0,o.jsx)(n.code,{children:"kubewarden/policy-server"})," set to the name of the PolicyServer. (e.g:\n",(0,o.jsx)(n.code,{children:"kubewarden/policy-server: default"}),")."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Inter-pod affinity/anti-affinity require substantial amounts of processing and\nare not recommended in clusters larger than several hundred nodes."})}),"\n",(0,o.jsxs)(n.p,{children:["To configure affinity for a PolicyServer, set its ",(0,o.jsx)(n.code,{children:"spec.affinity"})," field. This\nfield accepts a YAML object matching the contents of a Pod's ",(0,o.jsx)(n.code,{children:"spec.affinity"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-affinity--anti-affinity",children:"Configuring Affinity / Anti-affinity"}),"\n",(0,o.jsx)(n.p,{children:"Example: Spread the PolicyServer Pods across zones and hostnames"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: your-policy-server\nspec:\n  # Other configuration fields\n  affinity:\n    podAntiAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        - labelSelector:\n            matchExpressions:\n              - key: kubewarden/policy-server\n                operator: In\n                values:\n                  - your-policy-server\n          topologyKey: topology.kubernetes.io/zone\n        - labelSelector:\n            matchExpressions:\n              - key: kubewarden/policy-server\n                operator: In\n                values:\n                  - your-policy-server\n          topologyKey: kubernetes.io/hostname\n"})}),"\n",(0,o.jsx)(n.p,{children:"Example: Only schedule PolicyServer pods in control-plane nodes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: your-policy-server\nspec:\n  # Other configuration fields\n  affinity:\n    podAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        - labelSelector:\n            matchExpressions:\n              - key: kubewarden/policy-server\n                operator: In\n                values:\n                  - your-policy-server\n          topologyKey: node-role.kubernetes.io/control-plane\n"})}),"\n",(0,o.jsx)(n.h1,{id:"limits-and-requests",children:"Limits and Requests"}),"\n",(0,o.jsxs)(n.p,{children:["The Kubewarden controller can set the resource limits and requests of\npolicy-server Pods. This specifies how much of each resource each of the\ncontainers associated with the policy-server Pods needs. For PolicyServers,\nonly ",(0,o.jsx)(n.code,{children:"cpu"})," and ",(0,o.jsx)(n.code,{children:"memory"})," resources are relevant. See the ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes",children:"Kubernetes\ndocs"}),"\non resource units for more information."]}),"\n",(0,o.jsx)(n.p,{children:"This is achieved by setting the following PolicyServer resource fields:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"spec.limits"}),": Limits on resources, enforced by the container runtime.\nDifferent runtimes can have different ways to implement the restrictions."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"spec.requests"}),": Amount of resources to reserve for each container. It is\npossible and allowed for a container to use more resource than it's ",(0,o.jsx)(n.code,{children:"request"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If omitted, it defaults to ",(0,o.jsx)(n.code,{children:"spec.limits"})," if that is set (unless\n",(0,o.jsx)(n.code,{children:"spec.requests"})," of containers is set to some defaults via an admission\nmechanism)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Undercommitting resources of PolicyServers may cause realibility issues in the\ncluster."})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-limits-and-requests",children:"Configuring Limits and Requests"}),"\n",(0,o.jsx)(n.p,{children:"Example: Set hard limits for each policy-server container"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: your-policy-server\nspec:\n  # Other configuration fields\n  limits:\n    cpu: 500m\n    memory: 1Gi\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var r=i(96540);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);