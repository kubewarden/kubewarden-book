"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9043],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7114:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],s={sidebar_label:"Mutating Policies",title:""},u="Mutating policies",p={unversionedId:"tasksDir/mutating-policies",id:"tasksDir/mutating-policies",title:"",description:"A mutating policy will rebuild the requests with definied values that are conformant with the policy definition. If you want allow the behavior of mutating requests, you need to set the ClusterAdmissionPolicy.mutating filed to true.",source:"@site/docs/tasksDir/mutating-policies.md",sourceDirName:"tasksDir",slug:"/tasksDir/mutating-policies",permalink:"/tasksDir/mutating-policies",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/tasksDir/mutating-policies.md",tags:[],version:"current",lastUpdatedAt:1651834243,formattedLastUpdatedAt:"5/6/2022",frontMatter:{sidebar_label:"Mutating Policies",title:""},sidebar:"docs",previous:{title:"Common Tasks",permalink:"/tasks"},next:{title:"PSP Migration",permalink:"/tasksDir/psp-migration"}},l={},c=[],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mutating-policies"},"Mutating policies"),(0,a.kt)("p",null,"A mutating policy will rebuild the requests with definied values that are conformant with the policy definition. If you want allow the behavior of mutating requests, you need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," filed to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"However, if you set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy.mutating")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the mutated requests will be rejected. For example, create the following ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"mutating")," field set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny" \nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group created\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/user-group-psp-policy"},(0,a.kt)("inlineCode",{parentName:"a"},"psp-user-group"))," policy is used to control users and groups in containers and can mutate the requests. In the example above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"runAsUser")," field is set and it will be added to the container ",(0,a.kt)("inlineCode",{parentName:"p"},"securityContext")," section. "),(0,a.kt)("p",null,"As the ",(0,a.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the following request will be applied successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: k8s.gcr.io/pause\nEOF\n\n# Output\npod/pause-user-group created\n")),(0,a.kt)("p",null,"Once the request is applied, you can see the results of the container's ",(0,a.kt)("inlineCode",{parentName:"p"},"securityContext"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Command\nkubectl get pods pause-user-group -o jsonpath='{ .spec.containers[].securityContext }'\n\n# Output\n{\"runAsUser\":1000}\n")),(0,a.kt)("p",null,"Now, modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," by setting the field ",(0,a.kt)("inlineCode",{parentName:"p"},"mutating")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny" \nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group configured\n')),(0,a.kt)("p",null,"As the ",(0,a.kt)("inlineCode",{parentName:"p"},"mutating")," field is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the following request will fail:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: k8s.gcr.io/pause\nEOF\n\n# Output\nError from server: error when creating ".\\\\pause-user-group.yaml": admission webhook "psp-user-group.kubewarden.admission" denied the request: Request rejected by policy psp-user-group. The policy attempted to mutate the request, but it is currently configured to not allow mutations.\n')),(0,a.kt)("p",null,"As a conclusion, you can see that Kubewarden allows you to replicate the exact same behavior as the deprecated Kubernetes Pod Security Polices (PSP)."))}m.isMDXComponent=!0}}]);