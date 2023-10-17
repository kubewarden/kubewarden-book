"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Distribute",title:""},r="Distribute",l={unversionedId:"writing-policies/rego/open-policy-agent/distribute",id:"version-1.7/writing-policies/rego/open-policy-agent/distribute",title:"",description:"We have written, built and run our Rego policy. Now it's time to",source:"@site/versioned_docs/version-1.7/writing-policies/rego/open-policy-agent/04-distribute.md",sourceDirName:"writing-policies/rego/open-policy-agent",slug:"/writing-policies/rego/open-policy-agent/distribute",permalink:"/1.7/writing-policies/rego/open-policy-agent/distribute",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/rego/open-policy-agent/04-distribute.md",tags:[],version:"1.7",lastUpdatedAt:1697557879,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Distribute",title:""},sidebar:"docs",previous:{title:"Build and Run",permalink:"/1.7/writing-policies/rego/open-policy-agent/build-and-run"},next:{title:"Introduction",permalink:"/1.7/writing-policies/rego/gatekeeper/intro"}},s={},p=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distribute"},"Distribute"),(0,o.kt)("p",null,"We have written, built and run our Rego policy. Now it's time to\ndistribute the policy."),(0,o.kt)("p",null,"Policies have to be annotated in order for them to be executed in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server"),", the component that executes the policies when running\nin a Kubernetes cluster."),(0,o.kt)("h2",{id:"annotating-the-policy"},"Annotating the policy"),(0,o.kt)("p",null,"Annotating a policy is a process that enriches the policy metadata\nwith relevant information like authorship, license, source code\nlocation and other important metadata such as rules, that describes\nwhat kind of resources this policy can understand and evaluate."),(0,o.kt)("p",null,"In order to annotate our policy let's write a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.yaml"),"\nfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n- apiGroups: [""]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["CREATE"]\nmutating: false\ncontextAware: false\nexecutionMode: opa\nannotations:\n  io.kubewarden.policy.title: no-default-namespace\n  io.kubewarden.policy.description: This policy will reject any resource created inside the default namespace\n  io.kubewarden.policy.author: The Kubewarden Authors\n  io.kubewarden.policy.url: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.source: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n      This policy is just an example.\n\n      You can write interesting descriptions about the policy here.\n')),(0,o.kt)("p",null,"In this case, you can see several details:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rules: what resources this policy is targeting"),(0,o.kt)("li",{parentName:"ul"},"Mutating: whether this policy is mutating. In this case, is just\nvalidating."),(0,o.kt)("li",{parentName:"ul"},"Context aware: whether this policy requires context from the\ncluster in order to evaluate the request."),(0,o.kt)("li",{parentName:"ul"},"Execution mode: since this is a Rego policy it is mandatory to\nspecify what execution mode it expects: ",(0,o.kt)("inlineCode",{parentName:"li"},"opa")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"gatekeeper"),". This\npolicy is written in the ",(0,o.kt)("inlineCode",{parentName:"li"},"opa")," style: returning a whole\n",(0,o.kt)("inlineCode",{parentName:"li"},"AdmissionReview")," object."),(0,o.kt)("li",{parentName:"ul"},"Annotations: metadata stored into the policy itself.")),(0,o.kt)("p",null,"Let's go ahead and annotate our policy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl annotate policy.wasm --metadata-path metadata.yaml --output-path annotated-policy.wasm\n")),(0,o.kt)("p",null,"Now you can ",(0,o.kt)("inlineCode",{parentName:"p"},"inspect")," the policy if you will by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl inspect annotated-policy.wasm"),"."),(0,o.kt)("h2",{id:"pushing-the-policy"},"Pushing the policy"),(0,o.kt)("p",null,"Now that the policy is annotated we can push it to an OCI\nregistry. Let's do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl push annotated-policy.wasm registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\nPolicy successfully pushed\n")),(0,o.kt)("p",null,"Now our Rego policy targeting the OPA framework has everything it\nneeds to be deployed in production by creating a\n",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy"),". Let's prepare that too. First, we have to\npull the policy into the ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," local store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl pull registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\npulling policy...\n")),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," out of it. This operation will\ntake into account the metadata it has about the policy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl manifest registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1 --type ClusterAdmissionPolicy\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: generated-policy\nspec:\n  module: "registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - "*"\n      resources:\n        - "*"\n      operations:\n        - CREATE\n  mutating: false\n')),(0,o.kt)("p",null,"You can now use this ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," as a base to target the\nresources that you want, or deploy to Kubernetes as is."))}d.isMDXComponent=!0}}]);