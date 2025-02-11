"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[37775],{2333:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"writing-policies/rego/open-policy-agent/create-policy","title":"Creating a new policy","description":"Creating a new OPA policy for Kubewarden.","source":"@site/versioned_docs/version-1.10/writing-policies/rego/open-policy-agent/02-create-policy.md","sourceDirName":"writing-policies/rego/open-policy-agent","slug":"/writing-policies/rego/open-policy-agent/create-policy","permalink":"/1.10/writing-policies/rego/open-policy-agent/create-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rego/open-policy-agent/02-create-policy.md","tags":[],"version":"1.10","lastUpdatedAt":1739260546000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Creating a new policy","title":"Creating a new policy","description":"Creating a new OPA policy for Kubewarden.","keywords":["kubewarden","kubernetes","creating a policy","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","create-policy"]},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/1.10/writing-policies/rego/open-policy-agent/intro"},"next":{"title":"Build and run","permalink":"/1.10/writing-policies/rego/open-policy-agent/build-and-run"}}');var o=i(74848),s=i(28453);const r={sidebar_label:"Creating a new policy",title:"Creating a new policy",description:"Creating a new OPA policy for Kubewarden.",keywords:["kubewarden","kubernetes","creating a policy","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","create-policy"]},a=void 0,c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"The policy",id:"the-policy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Let's create a sample policy that will help us go through some\nimportant concepts. Let's start!"}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"We also provide a GitHub repository template\nthat you can use to quickly port an existing policy."}),(0,o.jsxs)(n.p,{children:["Check it out: ",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/opa-policy-template",children:"kubewarden/opa-policy-template"})]})]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"We will write, compile and execute the policy on this section. You\nneed some tools in order to complete this tutorial:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/open-policy-agent/opa/releases",children:(0,o.jsx)(n.code,{children:"opa"})}),": we\nwill use the ",(0,o.jsx)(n.code,{children:"opa"})," CLI to build our policy to a ",(0,o.jsx)(n.code,{children:"wasm"})," target."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases",children:(0,o.jsx)(n.code,{children:"kwctl"})}),": we will use\n",(0,o.jsx)(n.code,{children:"kwctl"})," to execute our built policy."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-policy",children:"The policy"}),"\n",(0,o.jsxs)(n.p,{children:["We are going to create a policy that evaluates any kind of namespaced\nresource. Its goal is to forbid the creation of any resource if the\ntarget namespace is ",(0,o.jsx)(n.code,{children:"default"}),". Otherwise, the request will be\naccepted. Let's start by creating a folder called ",(0,o.jsx)(n.code,{children:"opa-policy"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We are going to create a folder named ",(0,o.jsx)(n.code,{children:"data"})," inside of the\n",(0,o.jsx)(n.code,{children:"opa-policy"})," folder. This folder will contain the recorded\n",(0,o.jsx)(n.code,{children:"AdmissionReview"})," objects from the Kubernetes API server. I reduced\nthem greatly for the sake of simplicity for the exercise, so we can\nfocus on the bits that matter."]}),"\n",(0,o.jsxs)(n.p,{children:["Let us first create a ",(0,o.jsx)(n.code,{children:"default-ns.json"})," file with the following\ncontents inside the ",(0,o.jsx)(n.code,{children:"data"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "default",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This simulates a pod operation creation inside the ",(0,o.jsx)(n.code,{children:"default"}),"\nnamespace. Now, let's create another request example in\n",(0,o.jsx)(n.code,{children:"other-ns.json"})," inside the ",(0,o.jsx)(n.code,{children:"data"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "other",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, this simulates another pod creation request, this time\nunder a namespace called ",(0,o.jsx)(n.code,{children:"other"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Let's go back to our ",(0,o.jsx)(n.code,{children:"opa-policy"})," folder and start writing our Rego policy."]}),"\n",(0,o.jsxs)(n.p,{children:["Inside this folder, we create a file named ",(0,o.jsx)(n.code,{children:"request.rego"})," inside the\n",(0,o.jsx)(n.code,{children:"opa-policy"})," folder. The name can be anything, but we'll use that one\nfor this exercise. As the name suggests, this is a Rego file that has\nsome utility code regarding the request/response itself: in\nparticular, it allows us to simplify our policy code itself and reuse\nthis common bit across different policies if desired. The contents\nare:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rego",children:'package policy\n\nimport data.kubernetes.admission\n\nmain = {\n\t"apiVersion": "admission.k8s.io/v1",\n\t"kind": "AdmissionReview",\n\t"response": response,\n}\n\nresponse = {\n\t"uid": input.request.uid,\n\t"allowed": false,\n\t"status": {"message": reason},\n} {\n\treason = concat(", ", admission.deny)\n\treason != ""\n} else = {\n\t"uid": input.request.uid,\n\t"allowed": true,\n} {\n\ttrue\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["We will not go too deep into the Rego code itself. You can learn about\nit in ",(0,o.jsx)(n.a,{href:"https://www.openpolicyagent.org/docs/latest/policy-language/",children:"its\nwebsite"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Suffice to say that in this case, it will return either ",(0,o.jsx)(n.code,{children:"allowed: true"})," or ",(0,o.jsx)(n.code,{children:"allowed: false"})," depending on whether other package\n(",(0,o.jsx)(n.code,{children:"data.kubernetes.admission"}),") has any ",(0,o.jsx)(n.code,{children:"deny"})," statement that evaluates\nto ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If any ",(0,o.jsx)(n.code,{children:"data.kubernetes.admission.deny"})," evaluates to ",(0,o.jsx)(n.code,{children:"true"}),", the\n",(0,o.jsx)(n.code,{children:"response"})," here will evaluate to the first block. Otherwise, it will\nevaluate to the second block -- leading to acceptance, because no\n",(0,o.jsx)(n.code,{children:"deny"})," block evaluated to ",(0,o.jsx)(n.code,{children:"true"}),", this means we are accepting the\nrequest."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, this is just the shell of the policy, the utility. Now, we create\nanother file, called, for example ",(0,o.jsx)(n.code,{children:"policy.rego"})," inside our\n",(0,o.jsx)(n.code,{children:"opa-policy"})," folder with the following contents:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rego",children:'package kubernetes.admission\n\ndeny[msg] {\n\tinput.request.object.metadata.namespace == "default"\n\tmsg := "it is forbidden to use the default namespace"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This is our policy. The important part. ",(0,o.jsx)(n.code,{children:"deny"})," will evaluate to true\nif all statements within it evaluate to true. In this case, is only\none statement: checking if the namespace is ",(0,o.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["By Open Policy Agent design, ",(0,o.jsx)(n.code,{children:"input"})," contains the queriable object\nwith the ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," object, so we can inspect it quite easily."]}),"\n",(0,o.jsx)(n.p,{children:"If everything went well, our tree should look like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u2514\u2500\u2500 request.rego\n\n1 directory, 4 files\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);