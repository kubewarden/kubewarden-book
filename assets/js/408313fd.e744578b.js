"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9102],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(k,s(s({ref:n},u),{},{components:t})):a.createElement(k,s({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_label:"Pod Security Admission with KW",title:" Using Pod Security Admission with Kubewarden",description:"Using Pod Security Admission with Kubewarden, since the Kubernetes 1.25 release.",keywords:["kubewarden","pod security admission","pod security policy","kubernetes"]},s=void 0,o={unversionedId:"tasksDir/pod-security-admission-with-kubewarden",id:"version-1.8/tasksDir/pod-security-admission-with-kubewarden",title:" Using Pod Security Admission with Kubewarden",description:"Using Pod Security Admission with Kubewarden, since the Kubernetes 1.25 release.",source:"@site/versioned_docs/version-1.8/tasksDir/pod-security-admission-with-kubewarden.md",sourceDirName:"tasksDir",slug:"/tasksDir/pod-security-admission-with-kubewarden",permalink:"/1.8/tasksDir/pod-security-admission-with-kubewarden",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/tasksDir/pod-security-admission-with-kubewarden.md",tags:[],version:"1.8",lastUpdatedAt:1699969709,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{sidebar_label:"Pod Security Admission with KW",title:" Using Pod Security Admission with Kubewarden",description:"Using Pod Security Admission with Kubewarden, since the Kubernetes 1.25 release.",keywords:["kubewarden","pod security admission","pod security policy","kubernetes"]},sidebar:"docs",previous:{title:"PSP migration",permalink:"/1.8/tasksDir/psp-migration"},next:{title:"Secure supply chain",permalink:"/1.8/distributing-policies/secure-supply-chain"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pod Security Policies (PSP) are removed since the Kubernetes 1.25 release.\nThey're replaced by the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admission")," (PSA)."),(0,i.kt)("p",null,"PSA simplifies securing the Pods in Kubernetes clusters."),(0,i.kt)("p",null,"PSA has three profiles (described ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"in Pod Security Standards"),") for namespaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"privileged"),", providing the widest range of permissions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"baseline"),", to prevent new privilege escalations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"restricted"),", restricted to harden Pods")),(0,i.kt)("p",null,"A PSA controller performs actions on violation detection.\nThe actions are: ",(0,i.kt)("inlineCode",{parentName:"p"},"enforce"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"audit"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),".\nThey can be configured."),(0,i.kt)("p",null,"At the time of writing, with Kubernetes 1.28, the PSA controller has  the following limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No mutation capabilities"),(0,i.kt)("li",{parentName:"ul"},"Higher level objects (like ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Job"),") are evaluated only when the ",(0,i.kt)("inlineCode",{parentName:"li"},"audit")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"warn")," modes are enabled")),(0,i.kt)("p",null,"Kubewarden can be used to ",(0,i.kt)("strong",{parentName:"p"},"integrate")," a PSA profile to avoid these limitations."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You could use Kubewarden to replace the old PSP configuration as shown in ",(0,i.kt)("a",{parentName:"p",href:"/1.8/tasksDir/psp-migration"},"PSP migration"),".\nHowever, the goal of this article is to show how Kubewarden can complement the new PSA.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In this example we're creating a namespace and applying restrictive PSA policies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: my-namespace\n  labels:\n    pod-security.kubernetes.io/enforce: restricted\n    pod-security.kubernetes.io/enforce-version: v1.25\nEOF\n")),(0,i.kt)("p",null,"This PSA profile doesn't allow creating containers that run their application as the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user.\nWhen defining this container:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"runAsNonRoot")," attribute must be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"runAsUser")," one can't be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,i.kt)("p",null,"So, the following resource won't reach its desired state:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"kubectl")," command configuring a resource with the highlighted ",(0,i.kt)("code",null,"runAsUser: 0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n// highlight-next-line\n          runAsUser: 0\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n        ports:\n        - containerPort: 80\nEOF\n'))),(0,i.kt)("p",null,"If we check the deployment, we can see the PSA prevents the pod creation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get deploy -n my-namespace nginx-deployment -o json | jq ".status.conditions[] | select(.reason == \\"FailedCreate\\")"\n{\n  "lastTransitionTime": "2022-10-28T19:09:56Z",\n  "lastUpdateTime": "2022-10-28T19:09:56Z",\n  "message": "pods \\"nginx-deployment-5f98b4db8c-2m96l\\" is forbidden: violates PodSecurity \\"restricted:v1.25\\": runAsUser=0 (container \\"nginx\\" must not set runAsUser=0)",\n  "reason": "FailedCreate",\n  "status": "True",\n  "type": "ReplicaFailure"\n}\n')),(0,i.kt)("p",null,"You can fix this by removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser: 0")," from the container definition:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"kubectl")," command configuring a resource without ",(0,i.kt)("code",null,"runAsUser: 0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n\n        ports:\n        - containerPort: 80\nEOF\n'))),(0,i.kt)("p",null,"Now PSA allows an attempt at pod creation but it still fails."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n my-namespace\nNAME                                READY   STATUS                       RESTARTS   AGE\nnginx-deployment-57d8568bbb-h4bx7   0/1     CreateContainerConfigError   0          47s\n\n")),(0,i.kt)("p",null,"It's because the container definition didn't specify a user to be used when starting a program inside the container.\nThe default is to run as the root user if this is the case.\nThat's not allowed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsNonRoot")," directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get pods -n my-namespace nginx-deployment-57d8568bbb-h4bx7 -o json | jq ".status.containerStatuses"\n[\n  {\n    "image": "nginx:1.14.2",\n    "imageID": "",\n    "lastState": {},\n    "name": "nginx",\n    "ready": false,\n    "restartCount": 0,\n    "started": false,\n    "state": {\n      "waiting": {\n        "message": "container has runAsNonRoot and image will run as root (pod: \\"nginx-deployment-57d8568bbb-8mvkc_my-namespace(add7bcc5-3d23-43d0-94e9-6e78f887a53f)\\", container: nginx)",\n        "reason": "CreateContainerConfigError"\n      }\n    }\n  }\n]\n')),(0,i.kt)("p",null,"This is where Kubewarden can help.\nYou can use the ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/kubewarden/user-group-psp/user-group-psp"},(0,i.kt)("inlineCode",{parentName:"a"},"user-group-policy"))," policy to mutate the Deployment definition.\nThis configures a default user for containers omitting that information."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You need the Kubewarden stack in the Kubernetes cluster for this example.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"/1.8/quick-start"},"QuickStart")," for more details.")),(0,i.kt)("p",null,"It's possible to enforce a user ID range, for example, 1000\u20142000 and 4000\u20145000:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"kubectl")," command enforcing a user id range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: user-group-psp\nspec:\n  policyServer: default\n  module: registry://ghcr.io/kubewarden/policies/user-group-psp:latest\n  rules:\n  - apiGroups: ["", "apps"]\n    apiVersions: ["v1"]\n    resources: ["pods", "deployments"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      overwrite: false\n// highlight-start\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 4000\n          max: 5000\n// highlight-end\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny"\nEOF\n'))),(0,i.kt)("p",null,"Check the policy is active before continuing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get clusteradmissionpolicy.policies.kubewarden.io/user-group-psp\n")),(0,i.kt)("p",null,"When the policy is active, re-create the deployment:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"kubectl")," command recreating the deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl delete deployment -n my-namespace nginx-deployment && \\\nkubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n\n        ports:\n        - containerPort: 80\nEOF\n'))),(0,i.kt)("p",null,"Now the deployment is mutated by Kubewarden's policy which allows the Pod to be started.\nThe container defined inside the Pod has a default ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get pods -n my-namespace nginx-deployment-57d8568bbb-nv8fj -o json | jq ".spec.containers[].securityContext"\n{\n  "allowPrivilegeEscalation": false,\n  "capabilities": {\n    "drop": [\n      "ALL"\n    ]\n  },\n  "runAsNonRoot": true,\n  "runAsUser": 1000,\n  "seccompProfile": {\n    "type": "RuntimeDefault"\n  }\n}\n')),(0,i.kt)("p",null,"The Kubewarden integration can do more in this scenario.\nIt can check the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," provided."),(0,i.kt)("p",null,"This resource is rejected by the Kubewarden policy from earlier:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"kubectl")," command to show resource rejection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment2\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n// highlight-next-line\n          runAsUser: 7000\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n        ports:\n        - containerPort: 80\nEOF\n'))),(0,i.kt)("p",null,"It's rejected because the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"7000"),", which is outside the ranges allowed by the policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get deploy -n my-namespace nginx-deployment -o json | jq ".status.conditions[] | select(.reason == \\"FailedCreate\\")"\n{\n  "lastTransitionTime": "2022-10-28T19:22:04Z",\n  "lastUpdateTime": "2022-10-28T19:22:04Z",\n  "message": "admission webhook \\"clusterwide-user-group-psp.kubewarden.admission\\" denied the request: User ID outside defined ranges",\n  "reason": "FailedCreate",\n  "status": "True",\n  "type": "ReplicaFailure"\n}\n')),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"PSA provides an easy way to secure Kubernetes clusters.\nThe main goal of PSA is simplicity and it doesn't have the power and flexibility of the earlier PSP."),(0,i.kt)("p",null,"Using Kubewarden together with PSA helps fill this gap."))}d.isMDXComponent=!0}}]);