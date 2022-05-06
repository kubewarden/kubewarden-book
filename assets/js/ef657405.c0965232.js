"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6452],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={sidebar_label:"PSP Migration",title:""},p="PSP Migration",l={unversionedId:"tasksDir/psp-migration",id:"tasksDir/psp-migration",title:"",description:"With the removal of PodSecurityPolicy",source:"@site/docs/tasksDir/psp-migration.md",sourceDirName:"tasksDir",slug:"/tasksDir/psp-migration",permalink:"/tasksDir/psp-migration",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/tasksDir/psp-migration.md",tags:[],version:"current",lastUpdatedAt:1651834243,formattedLastUpdatedAt:"5/6/2022",frontMatter:{sidebar_label:"PSP Migration",title:""},sidebar:"docs",previous:{title:"Mutating Policies",permalink:"/tasksDir/mutating-policies"},next:{title:"Architecture",permalink:"/architecture"}},c={},u=[{value:"Mapping Kuberwarden policies to PSP fields",id:"mapping-kuberwarden-policies-to-psp-fields",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"psp-migration"},"PSP Migration"),(0,o.kt)("p",null,"With the removal of ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/"},"PodSecurityPolicy"),"\nin Kubernetes v1.25, you can leverage Kubewarden for admission control on your Kubernetes clusters.\nContrasting with the PSPs, Kubewarden has separate policies to achieve the same goal. Therefore, each Kubewarden policy could be likened to a different\nconfiguration within the spec of a PSP. A mapping of the PSP configuration fields to their respective policies can be found below\nin the ",(0,o.kt)("a",{parentName:"p",href:"#mapping-kuberwarden-policies-to-psp-fields"},"mapping table"),". Therefore, the operators have more granular control\nof the configuration they want to apply in their clusters. If they want to apply part of the PSP security checks it\nis not necessary to define the configurations related to the other fields."),(0,o.kt)("p",null,"Once you have the Kubewarden instance running, it's time to deploy some policies to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy")," object. Start by listing\nthe PSPs in use. For the sake of this example, the following enforcements have been considered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a PSP disabling privileged escalation"),(0,o.kt)("li",{parentName:"ul"},"privileged containers"),(0,o.kt)("li",{parentName:"ul"},"blocking pods running as root"),(0,o.kt)("li",{parentName:"ul"},"forcing a particular user group"),(0,o.kt)("li",{parentName:"ul"},"blocking host namespaces"),(0,o.kt)("li",{parentName:"ul"},"allowing pod to use the port 443 only")),(0,o.kt)("p",null,"The yaml definition of the aforementioned PSP would look like the below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted\nspec:\n  allowPrivilegeEscalation: false\n  runAsUser:\n    rule: MustRunAsNonRoot\n  supplementalGroups:\n    rule: MustRunAs\n    ranges:\n      - min: 1000\n        max: 65535\n  privileged: false\n  hostNetwork: false\n  hostIPC: false\n  hostPID: false\n  hostPorts:\n    - min: 443\n      max: 443\n")),(0,o.kt)("p",null,"Let's create Kubewarden policies to achieve the same goal. One thing that you need to know about Kubewarden policies is that every rule will be enforced by a separate policy. In our example, individual policies will be required for the enforcement of user and group configuration, host namespaces,  privileged escalation, and for the privileged container configuration."),(0,o.kt)("p",null,"Let's start with blocking container escalation. For that you can deploy a policy as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-allowprivilegeescalation\nspec:\n  module: registry://ghcr.io/kubewarden/policies/allow-privilege-escalation-psp:v0.1.11\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    default_allow_privilege_escalation: false\nEOF\n')),(0,o.kt)("p",null,"If you notice, we have specified ",(0,o.kt)("inlineCode",{parentName:"p"},"default_allow_privilege_escalation")," to assume a value ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Once this policy starts running, it will restrict pods trying to run with more privileges than the parent container by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      allowPrivilegeEscalation: true\n  - name: sidecar\n    image: sidecar\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-allowprivilegeescalation.kubewarden.admission" denied the request: one of the containers has privilege escalation enabled\n')),(0,o.kt)("p",null,"Now, to enforce the user and groups configuration, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/user-group-psp-policy"},"user-group-psp policy")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-usergroup\nspec:\n  module: registry://ghcr.io/kubewarden/policies/user-group-psp:v0.2.0\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: MustRunAsNonRoot\n    supplemental_groups:\n      rule: MustRunAs\n      ranges:\n        - min: 1000\n          max: 65535\nEOF\n')),(0,o.kt)("p",null,"Notice the policy is configured as ",(0,o.kt)("inlineCode",{parentName:"p"},"mutation: true"),". This is required because the policy will add ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups"},"supplementalGroups")," when the user does not define them."),(0,o.kt)("p",null,"So, now users cannot deploy pods running as root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      runAsNonRoot: false\n      runAsUser: 0\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-usergroup-fb836.kubewarden.admission" denied the request: RunAsNonRoot should be set to true\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      runAsNonRoot: true\n      runAsUser: 0\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-usergroup-fb836.kubewarden.admission" denied the request: Invalid user ID: cannot run container with root ID (0)\n')),(0,o.kt)("p",null,"Also, the example below also demonstrates the addition of a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups"},"Supplemental group"),", despite it not being defined by us."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\nEOF\npod/nginx created\n$ kubectl get pods -o json nginx | jq ".spec.securityContext"\n{\n  "supplementalGroups": [\n    10000\n  ]\n}\n\n')),(0,o.kt)("p",null,"To replace the PSP configuration that blocks privileged containers, it's necessary to deploy the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/pod-privileged-policy"},"pod-privileged policy"),". This policy does not require any settings. Once running, it will block privileged pods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-privileged\nspec:\n  module: registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.10\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings: null\nEOF\n')),(0,o.kt)("p",null,"To test the policy, we can try running a pod with privileged configuration enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n    securityContext:\n      privileged: true\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-privileged.kubewarden.admission" denied the request: User \'system:admin\' cannot schedule privileged containers\n')),(0,o.kt)("p",null,"To complete the PSP migration exercise, it's necessary to disable host namespace sharing.\nTo do that, we shall be using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/host-namespaces-psp-policy"},(0,o.kt)("inlineCode",{parentName:"a"},"host-namespace-psp")," policy"),".\nIt allows the cluster administrator to block IPC, PID, and network namespaces individually and set the ports\nthat the pods can be exposed on the host IP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-hostnamespaces\nspec:\n  module: registry://ghcr.io/kubewarden/policies/host-namespaces-psp:v0.1.2\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    allow_host_ipc: false\n    allow_host_pid: false\n    allow_host_ports:\n      - min: 443\n        max: 443\n    allow_host_network: false\nEOF\n')),(0,o.kt)("p",null,"Again, let's validate the policy. The pod should not be able to share host namespaces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  hostIPC: true\n  hostNetwork: false\n  hostPID: false\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\n\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod has IPC enabled, but this is not allowed\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  hostIPC: false\n  hostNetwork: true\n  hostPID: false\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod has host network enabled, but this is not allowed\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  hostIPC: false\n  hostNetwork: false\n  hostPID: true\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod has host PID enabled, but this is not allowed\n')),(0,o.kt)("p",null,"The pod should be only able to expose the port 443 and should throw an error when other port numbers are configured against the hostPort section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n    ports:\n      - containerPort: 80\n        hostPort: 80\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod is using unallowed host ports in containers\n')),(0,o.kt)("h2",{id:"mapping-kuberwarden-policies-to-psp-fields"},"Mapping Kuberwarden policies to PSP fields"),(0,o.kt)("p",null,"The following table show which Kubewarden policy can be used to replace each PSP configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"PSP field"),(0,o.kt)("th",{parentName:"tr",align:null},"Kubewarden equivalent policy"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged"},"privileged")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/pod-privileged-policy"},"pod-privileged-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces"},"hostPID")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/host-namespaces-psp-policy"},"host-namespaces-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces"},"hostIPC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/host-namespaces-psp-policy"},"host-namespaces-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces"},"hostNetwork")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/host-namespaces-psp-policy"},"host-namespaces-psp-polic"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces"},"hostPorts")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/host-namespaces-psp-policy"},"host-namespaces-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems"},"volumes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/volumes-psp-policy"},"volumes-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems"},"allowedHostPaths")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/hostpaths-psp-policy"},"hostpaths-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems"},"readOnlyRootFilesystem")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/readonly-root-filesystem-psp-policy"},"readonly-root-filesystem-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems"},"fsgroup")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/allowed-fsgroups-psp-policy"},"allowed-fsgroups-psp-policy "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#flexvolume-drivers"},"allowedFlexVolumes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/flexvolume-drivers-psp-policy"},"flexvolume-drivers-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups"},"runAsUser")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/user-group-psp-policy"},"user-group-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups"},"runAsGroup")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/user-group-psp-policy"},"user-group-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups"},"supplementalGroups")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/user-group-psp-policy"},"user-group-psp-policy "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#privilege-escalation"},"allowPrivilegeEscalation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/allow-privilege-escalation-psp-policy"},"allow-privilege-escalation-psp-policy "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#privilege-escalation"},"defaultAllowPrivilegeEscalation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/allow-privilege-escalation-psp-policy"},"allow-privilege-escalation-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#capabilities"},"allowedCapabilities")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/capabilities-psp-policy"},"capabilities-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#capabilities"},"defaultAddCapabilities")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/capabilities-psp-policy"},"capabilities-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#capabilities"},"requiredDropCapabilities")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/capabilities-psp-policy"},"capabilities-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#selinux"},"seLinux")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/selinux-psp-policy"},"selinux-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#allowedprocmounttypes"},"allowedProcMountTypes")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/allowed-proc-mount-types-psp-policy"},"allowed-proc-mount-types-psp-policy"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor"},"apparmor")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/apparmor-psp-policy"},"apparmor-psp-policy "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor"},"seccomp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/seccomp-psp-policy"},"seccomp-psp-policy "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor"},"forbiddenSysctls")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/sysctl-psp-policy"},"sysctl-psp-policy "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor"},"allowedUnsafeSysctls")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubewarden/sysctl-psp-policy"},"sysctl-psp-policy "))))))}m.isMDXComponent=!0}}]);