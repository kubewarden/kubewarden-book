"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[53997],{43849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/writing-policies/rego/open-policy-agent/create-policy","title":"Creating a new policy","description":"Creating a new OPA policy for Kubewarden.","source":"@site/versioned_docs/version-1.12/tutorials/writing-policies/rego/open-policy-agent/02-create-policy.md","sourceDirName":"tutorials/writing-policies/rego/open-policy-agent","slug":"/tutorials/writing-policies/rego/open-policy-agent/create-policy","permalink":"/1.12/tutorials/writing-policies/rego/open-policy-agent/create-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.12/tutorials/writing-policies/rego/open-policy-agent/02-create-policy.md","tags":[],"version":"1.12","lastUpdatedAt":1733407329000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Creating a new policy","title":"Creating a new policy","description":"Creating a new OPA policy for Kubewarden.","keywords":["kubewarden","kubernetes","creating a policy","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","create-policy"]},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/1.12/tutorials/writing-policies/rego/open-policy-agent/intro"},"next":{"title":"Build and run","permalink":"/1.12/tutorials/writing-policies/rego/open-policy-agent/build-and-run"}}');var o=t(74848),s=t(28453);const r={sidebar_label:"Creating a new policy",title:"Creating a new policy",description:"Creating a new OPA policy for Kubewarden.",keywords:["kubewarden","kubernetes","creating a policy","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","create-policy"]},a=void 0,c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"The policy",id:"the-policy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rego/open-policy-agent/create-policy"})}),"\n",(0,o.jsx)(n.p,{children:"You can create a sample policy that helps to understand the important concepts."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["There is a ",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/opa-policy-template",children:"kubewarden/opa-policy-template"}),"\nthat you can use to port an existing policy."]})}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"You'll write, compile and execute a policy in this section.\nYou need these tools to complete this tutorial:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/open-policy-agent/opa/releases",children:(0,o.jsx)(n.code,{children:"opa"})}),":\nyou'll use the ",(0,o.jsx)(n.code,{children:"opa"})," CLI to build your policy as a ",(0,o.jsx)(n.code,{children:"wasm"})," target."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases",children:(0,o.jsx)(n.code,{children:"kwctl"})}),":\nyou'll use ",(0,o.jsx)(n.code,{children:"kwctl"})," to execute your built policy."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-policy",children:"The policy"}),"\n",(0,o.jsxs)(n.p,{children:["You're going to create a policy that evaluates any kind of namespaced resource.\nIts goal is to forbid the creation of any resource if the target namespace is ",(0,o.jsx)(n.code,{children:"default"}),". Otherwise, the request is to accepted.\nStart by creating a folder called ",(0,o.jsx)(n.code,{children:"opa-policy"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Create a folder named ",(0,o.jsx)(n.code,{children:"data"})," in the ",(0,o.jsx)(n.code,{children:"opa-policy"})," folder.\nThis folder has the recorded ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," objects from the Kubernetes API server.\nThey're reduced for the sake of simplicity for the exercise,\nso you can focus on the bits that matter."]}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"default-ns.json"})," file with the following contents inside the ",(0,o.jsx)(n.code,{children:"data"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "default",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This simulates a pod operation creation inside the ",(0,o.jsx)(n.code,{children:"default"})," namespace.\nNow, create another request example in ",(0,o.jsx)(n.code,{children:"other-ns.json"})," inside the ",(0,o.jsx)(n.code,{children:"data"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "other",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can see this simulates another pod creation request,\nthis time under a namespace called ",(0,o.jsx)(n.code,{children:"other"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Go back to your ",(0,o.jsx)(n.code,{children:"opa-policy"})," folder and start writing your Rego policy."]}),"\n",(0,o.jsxs)(n.p,{children:["In this folder, create a file named ",(0,o.jsx)(n.code,{children:"request.rego"})," in the ",(0,o.jsx)(n.code,{children:"opa-policy"})," folder.\nThe name could be anything, but you'll use that for this exercise.\nThis is a Rego file that has utility code regarding the request/response itself.\nIn particular,\nit lets you simplify your policy code and reuse this common part across different policies."]}),"\n",(0,o.jsx)(n.p,{children:"The contents are:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rego",children:'package policy\n\nimport data.kubernetes.admission\n\nmain = {\n\t"apiVersion": "admission.k8s.io/v1",\n\t"kind": "AdmissionReview",\n\t"response": response,\n}\n\nresponse = {\n\t"uid": input.request.uid,\n\t"allowed": false,\n\t"status": {"message": reason},\n} {\n\treason = concat(", ", admission.deny)\n\treason != ""\n} else = {\n\t"uid": input.request.uid,\n\t"allowed": true,\n} {\n\ttrue\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You have no need, at this point, to go, in detail, into the Rego code.\nYou can learn about it at its ",(0,o.jsx)(n.a,{href:"https://www.openpolicyagent.org/docs/latest/policy-language/",children:"website"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In this case, it returns either ",(0,o.jsx)(n.code,{children:"allowed: true"})," or ",(0,o.jsx)(n.code,{children:"allowed: false"}),".\nThis depends on whether the other package ,\n",(0,o.jsx)(n.code,{children:"data.kubernetes.admission"}),",\nhas any ",(0,o.jsx)(n.code,{children:"deny"})," statement that evaluates to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If any ",(0,o.jsx)(n.code,{children:"data.kubernetes.admission.deny"})," evaluates to ",(0,o.jsx)(n.code,{children:"true"}),",\nthe ",(0,o.jsx)(n.code,{children:"response"})," here evaluates to the first block.\nOtherwise, it evaluates to the second block, leading to acceptance.\nBecause no ",(0,o.jsx)(n.code,{children:"deny"})," block evaluated to ",(0,o.jsx)(n.code,{children:"true"}),",\nthis means the policy is accepting the request."]}),"\n",(0,o.jsxs)(n.p,{children:["This is just the shell of the policy, the utility.\nNow, you create another file, called, for example,\n",(0,o.jsx)(n.code,{children:"policy.rego"})," inside our ",(0,o.jsx)(n.code,{children:"opa-policy"})," folder with these contents:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rego",children:'package kubernetes.admission\n\ndeny[msg] {\n\tinput.request.object.metadata.namespace == "default"\n\tmsg := "it is forbidden to use the default namespace"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This is the important part of your policy.\nThe ",(0,o.jsx)(n.code,{children:"deny"})," statement evaluates to ",(0,o.jsx)(n.code,{children:"true"})," if all statements within it evaluate to ",(0,o.jsx)(n.code,{children:"true"}),".\nIn this case, there is only one statement, checking if the namespace is ",(0,o.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["By Open Policy Agent design,\n",(0,o.jsx)(n.code,{children:"input"})," has the query-able object with the ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," object,\nso we can inspect it conveniently."]}),"\n",(0,o.jsx)(n.p,{children:"If everything went well, your tree should look like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:".\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u2514\u2500\u2500 request.rego\n\n1 directory, 4 files\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);