"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,w=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(w,o(o({ref:t},p),{},{components:n})):a.createElement(w,o({ref:t},p))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_label:"Raw policies",title:"Raw policies"},o="Raw policies",l={unversionedId:"howtos/raw-policies",id:"howtos/raw-policies",title:"Raw policies",description:"From v1.9.0 onwards, Kubewarden supports the ability to write and execute policies",source:"@site/docs/howtos/raw-policies.md",sourceDirName:"howtos",slug:"/howtos/raw-policies",permalink:"/next/howtos/raw-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/howtos/raw-policies.md",tags:[],version:"current",lastUpdatedAt:1701438722,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{sidebar_label:"Raw policies",title:"Raw policies"},sidebar:"docs",previous:{title:"Installation",permalink:"/next/operator-manual/airgap/install"},next:{title:"Audit Scanner Installation",permalink:"/next/howtos/audit-scanner"}},s={},c=[{value:"Running the policy server outside Kubernetes",id:"running-the-policy-server-outside-kubernetes",level:2},{value:"Running a Policy Server inside Kubernetes without the Kubewarden controller",id:"running-a-policy-server-inside-kubernetes-without-the-kubewarden-controller",level:2},{value:"Using the validate_raw endpoint",id:"using-the-validate_raw-endpoint",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3},{value:"Writing raw policies",id:"writing-raw-policies",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raw-policies"},"Raw policies"),(0,i.kt)("p",null,"From ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.9.0")," onwards, Kubewarden supports the ability to write and execute policies\noutside a Kubernetes cluster, as a generic policy evaluation engine.\nThe Policy Server exposes the ",(0,i.kt)("inlineCode",{parentName:"p"},"/validate_raw")," endpoint that can be used to validate\narbitrary JSON documents against a Kubewarden policy."),(0,i.kt)("p",null,"For this guide, we will use the following raw policies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/raw-validation-policy"},"raw-validation-policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/raw-mutation-policy"},"raw-mutation-policy"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please ensure that the policy author has marked the policy as ",(0,i.kt)("inlineCode",{parentName:"p"},"policyType: raw")," in the metadata.\nYou can inspect the metadata by using ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kwctl inpect ghcr.io/kubewarden/tests/raw-mutation-policy:v0.1.0\n"))),(0,i.kt)("h2",{id:"running-the-policy-server-outside-kubernetes"},"Running the policy server outside Kubernetes"),(0,i.kt)("p",null,"The Policy Server can be run outside Kubernetes as a standalone container."),(0,i.kt)("p",null,"First, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"policies.yml")," file with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"raw-validation:\n  url: ghcr.io/kubewarden/tests/raw-validation-policy:v0.1.0\n  settings:\n    validUsers:\n      - alice\n      - bob\n    validActions:\n      - read\n      - write\n    validResources:\n      - orders\n      - products\n\nraw-mutation:\n  url: ghcr.io/kubewarden/tests/raw-mutation-policy:v0.1.0\n  allowedToMutate: true\n  settings:\n    forbiddenResources:\n      - privateResource\n      - secretResource\n    defaultResource: publicResource\n")),(0,i.kt)("p",null,"To start the policy server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a docker volume to store the policies\ndocker volume create --driver local \\\n                --opt type=tmpfs \\\n                --opt device=tmpfs \\\n                --opt o=ui=65533 \\\n                policy-store\n\n# Start the policy server\ndocker run --rm -it \\\n    -p 3000:3000 \\\n    -v $(pwd)/policies.yml:/policies.yml \\\n    -v policy-store:/registry \\\n    ghcr.io/kubewarden/policy-server:1.9.0 \\\n    --ignore-kubernetes-connection-failure=true\n")),(0,i.kt)("p",null,"NOTE: the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-kubernetes-connection-failure=true")," is required to start the policy server without Kubernetes.\nHowever, it is possible to start the Policy Server with/inside Kubernetes and use the raw validation endpoint.\nRaw policies can access context-aware",(0,i.kt)("a",{parentName:"p",href:"/next/explanations/context-aware-policies"}," capabilities")," like standard policies."),(0,i.kt)("h2",{id:"running-a-policy-server-inside-kubernetes-without-the-kubewarden-controller"},"Running a Policy Server inside Kubernetes without the Kubewarden controller"),(0,i.kt)("p",null,"It's not possible to use a Policy Server instance managed by the Kubewarden controller to host raw policies.\nThe controller will not allow the user to change the Policy Server ConfigMap to add a raw policy,\nsince it will try to reconcile it reverting the changes.\nBecause of that, a dedicated Policy Server has to be started."),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"policy-server.yaml")," file with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: policy-server-deployment\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: policy-server\n  template:\n    metadata:\n      labels:\n        app: policy-server\n    spec:\n      containers:\n        - name: policy-server\n          image: ghcr.io/kubewarden/policy-server:v1.9.0\n          ports:\n            - containerPort: 3000\n          volumeMounts:\n            - name: policy-store\n              mountPath: /registry\n            - name: policies-config\n              mountPath: /policies.yml\n              subPath: policies.yml\n      volumes:\n        - name: policy-store\n          emptyDir: {}\n        - name: policies-config\n          configMap:\n            name: policies-configmap\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: policy-server-service\nspec:\n  selector:\n    app: policy-server\n  ports:\n    - protocol: TCP\n      port: 3000\n      targetPort: 3000\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: policies-configmap\ndata:\n  policies.yml: |\n    raw-validation:\n      url: ghcr.io/kubewarden/tests/raw-validation-policy:v0.1.0\n      settings: \n        validUsers:\n          - alice\n          - bob\n        validActions:\n          - read\n          - write\n        validResources:\n          - orders\n          - products\n    raw-mutation:\n      url: ghcr.io/kubewarden/tests/raw-mutation-policy:v0.1.0\n      allowedToMutate: true\n      settings:\n        forbiddenResources:\n          - privateResource\n          - secretResource\n        defaultResource: publicResource\n")),(0,i.kt)("p",null,"Apply the configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f policy-server.yaml\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Policy Server instance deployed will have access to Kubernetes resources that could be leveraged by context aware policies.\nThe access level to the Kubernetes resources is determined by the Service Account used to run the Policy Server workload."),(0,i.kt)("p",{parentName:"admonition"},"In the previous example, no Service Account is defined inside of the Deployment specification; hence the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," Service Account is going to be used.")),(0,i.kt)("h2",{id:"using-the-validate_raw-endpoint"},"Using the validate_raw endpoint"),(0,i.kt)("h3",{id:"validation"},"Validation"),(0,i.kt)("p",null,"The raw validation endpoint is exposed at ",(0,i.kt)("inlineCode",{parentName:"p"},"/validate_raw")," and accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests.\nSince we have deployed a service, we can set a port-forward to access it with\n",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl port-forward service/policy-server-service 3000:3000 -n default"),"."),(0,i.kt)("p",null,"Let's try to validate a JSON document against the ",(0,i.kt)("inlineCode",{parentName:"p"},"raw-validation")," policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  http://localhost:3000/validate_raw/raw-validation \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "customers"\n  }\n}\'\n')),(0,i.kt)("p",null,"The request will be not accepted, since ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," has not been granted access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"customers")," resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "response": {\n    "uid": "",\n    "allowed": false,\n    "auditAnnotations": null,\n    "warnings": null\n  }\n}\n')),(0,i.kt)("p",null,"Let's try again with a valid resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  http://localhost:3000/validate_raw/raw-validation \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "orders"\n  }\n}\'\n')),(0,i.kt)("p",null,"This time, the request will be accepted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "response": {\n    "uid": "",\n    "allowed": true,\n    "auditAnnotations": null,\n    "warnings": null\n  }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," field is provided in the request payload, it will be returned as part of the response.")),(0,i.kt)("h3",{id:"mutation"},"Mutation"),(0,i.kt)("p",null,"Now, let's try to mutate a JSON document against the ",(0,i.kt)("inlineCode",{parentName:"p"},"raw-mutation")," policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  http://localhost:3000/validate_raw/raw-mutation \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "privateResource"\n  }\n}\'\n')),(0,i.kt)("p",null,"The request will be mutated and the response will contain a JSONPatch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "response": {\n    "uid": "",\n    "allowed": true,\n    "patchType": "JSONPatch",\n    "patch": "W3sib3AiOiJyZXBsYWNlIiwicGF0aCI6Ii9yZXNvdXJjZSIsInZhbHVlIjoicHVibGljUmVzb3VyY2UifV0=",\n    "auditAnnotations": null,\n    "warnings": null\n  }\n}\n')),(0,i.kt)("h2",{id:"writing-raw-policies"},"Writing raw policies"),(0,i.kt)("p",null,"Similarly to policies that validate Kubernetes resources, raw policies are written in WebAssembly using Kubewarden SDKs.\nIf you are interested in writing raw policies, please refer to language-specific documentation for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/writing-policies/go/raw-policies"},"Go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/writing-policies/rust/raw-policies"},"Rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/writing-policies/rego/open-policy-agent/raw-policies"},"OPA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/writing-policies/wasi/raw-policies"},"WASI"))))}d.isMDXComponent=!0}}]);