"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7756],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={sidebar_label:"Mutating policies",title:"Mutating policies",description:"Explains mutating policies in the context of Kubewarden",keywords:["kubewarden policy mutating kubernetes clusteradmissionpolicy admissionpolicy"]},s=void 0,o={unversionedId:"tasksDir/mutating-policies",id:"version-1.9/tasksDir/mutating-policies",title:"Mutating policies",description:"Explains mutating policies in the context of Kubewarden",source:"@site/versioned_docs/version-1.9/tasksDir/mutating-policies.md",sourceDirName:"tasksDir",slug:"/tasksDir/mutating-policies",permalink:"/tasksDir/mutating-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/tasksDir/mutating-policies.md",tags:[],version:"1.9",lastUpdatedAt:1701438722,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{sidebar_label:"Mutating policies",title:"Mutating policies",description:"Explains mutating policies in the context of Kubewarden",keywords:["kubewarden policy mutating kubernetes clusteradmissionpolicy admissionpolicy"]},sidebar:"docs",previous:{title:"Verifying Kubewarden",permalink:"/security/verifying-kubewarden"},next:{title:"Distributing policies",permalink:"/distributing-policies"}},u={},p=[],l={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A mutating policy will rebuild the requests with\ndefined values that comply with the policy definition.\nIf you want to allow the behavior of mutating requests,\nset the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"However, if you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),",\nthe mutated requests will be rejected.\nFor example, create the following ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," field set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny" \nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group created\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/user-group-psp-policy"},(0,i.kt)("inlineCode",{parentName:"a"},"psp-user-group"))," policy is used to control users and groups in containers and can mutate the requests.\nIn the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAsUser")," field is set and it will be added to the container ",(0,i.kt)("inlineCode",{parentName:"p"},"securityContext")," section."),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the following request will be applied successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\npod/pause-user-group created\n")),(0,i.kt)("p",null,"Once the request is applied, you can see the results of the container's ",(0,i.kt)("inlineCode",{parentName:"p"},"securityContext"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl get pods pause-user-group -o jsonpath='{ .spec.containers[].securityContext }'\n\n# Output\n{\"runAsUser\":1000}\n")),(0,i.kt)("p",null,"Now, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," by setting the field ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny" \nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group configured\n')),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the following request will fail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\nError from server: error when creating ".\\\\pause-user-group.yaml": admission webhook "psp-user-group.kubewarden.admission" denied the request: Request rejected by policy psp-user-group. The policy attempted to mutate the request, but it is currently configured to not allow mutations.\n')),(0,i.kt)("p",null,"In conclusion, you can see Kubewarden replicates the same behavior as the deprecated Kubernetes Pod Security Polices (PSP)."))}d.isMDXComponent=!0}}]);