"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[51505],{89227:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(85893),o=i(11151);const r={sidebar_label:"Create a New Policy",title:"Creating a new Gatekeeper Rego policy",description:"Creating a new Gatekeeper rego policy.",keywords:["kubewarden","kubernetes","gatekeeper rego policy"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","gatekeeper","create-policy"]},s=void 0,a={id:"writing-policies/rego/gatekeeper/create-policy",title:"Creating a new Gatekeeper Rego policy",description:"Creating a new Gatekeeper rego policy.",source:"@site/versioned_docs/version-1.10/writing-policies/rego/gatekeeper/02-create-policy.md",sourceDirName:"writing-policies/rego/gatekeeper",slug:"/writing-policies/rego/gatekeeper/create-policy",permalink:"/writing-policies/rego/gatekeeper/create-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rego/gatekeeper/02-create-policy.md",tags:[],version:"1.10",lastUpdatedAt:1706778996,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Create a New Policy",title:"Creating a new Gatekeeper Rego policy",description:"Creating a new Gatekeeper rego policy.",keywords:["kubewarden","kubernetes","gatekeeper rego policy"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","gatekeeper","create-policy"]},sidebar:"docs",previous:{title:"Gatekeeper support",permalink:"/writing-policies/rego/gatekeeper/intro"},next:{title:"Build and run",permalink:"/writing-policies/rego/gatekeeper/build-and-run"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"The policy",id:"the-policy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Let's implement the same policy that ",(0,t.jsx)(n.a,{href:"../open-policy-agent/create-policy",children:"we wrote with Open Policy\nAgent"}),": a policy that\nrejects a resource if it's targeting the ",(0,t.jsx)(n.code,{children:"default"})," namespace."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"We also provide a GitHub repository template\nthat you can use to quickly port an existing policy."}),(0,t.jsxs)(n.p,{children:["Check it out: ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/gatekeeper-policy-template",children:"kubewarden/gatekeeper-policy-template"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"As in the previous section, we will require the following tools:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"opa"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"kwctl"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-policy",children:"The policy"}),"\n",(0,t.jsx)(n.p,{children:"Gatekeeper policies must return none or more violation objects. If no\nviolations are reported, the request will be accepted. If one, or more\nviolations are reported, the request will be rejected."}),"\n",(0,t.jsxs)(n.p,{children:["We create a new folder, named ",(0,t.jsx)(n.code,{children:"rego-policy"}),". Inside of it, we create a\n",(0,t.jsx)(n.code,{children:"policy.rego"})," file with contents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rego",children:'package policy\n\nviolation[{"msg": msg}] {\n        input.review.object.metadata.namespace == "default"\n        msg := "it is forbidden to use the default namespace"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, our entrypoint is ",(0,t.jsx)(n.code,{children:"policy/violation"}),", and because of how\nRego works, the policy can have the following outcomes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"return 1 violation: the object being reviewed is targeting the\ndefault namespace."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"return 0 violations: the object being reviewed is compliant with the\npolicy."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Take a moment to compare this policy with the one we wrote in the Open\nPolicy Agent section. That one had to build the whole\n",(0,t.jsx)(n.code,{children:"AdmissionReview"})," response, and the inputs were slightly\ndifferent. In the Gatekeeper mode, the ",(0,t.jsx)(n.code,{children:"AdmissionRequest"})," object is\nprovided at the ",(0,t.jsx)(n.code,{children:"input.review"})," attribute. All attributes of the\n",(0,t.jsx)(n.code,{children:"AdmissionRequest"})," are readable along with ",(0,t.jsx)(n.code,{children:"object"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Now, let's create the requests that we are going to evaluate in the\nnext section."}),"\n",(0,t.jsxs)(n.p,{children:["Let us first create a ",(0,t.jsx)(n.code,{children:"default-ns.json"})," file with the following\ncontents inside the ",(0,t.jsx)(n.code,{children:"data"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "default",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's create another ",(0,t.jsx)(n.code,{children:"AdmissionReview"})," object that this time is\ntargeting a namespace different than the ",(0,t.jsx)(n.code,{children:"default"})," one. Let us name\nthis file ",(0,t.jsx)(n.code,{children:"other-ns.json"}),". It has the following contents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "other",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, this simulates another pod creation request, this time\nunder a namespace called ",(0,t.jsx)(n.code,{children:"other"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(67294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);