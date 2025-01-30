"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[39903],{42317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorials/testing-policies/cluster-operators","title":"Testing for cluster operators","description":"An introduction to testing Kubewarden policies for cluster operators.","source":"@site/versioned_docs/version-1.13/tutorials/testing-policies/03-cluster-operators.md","sourceDirName":"tutorials/testing-policies","slug":"/tutorials/testing-policies/cluster-operators","permalink":"/1.13/tutorials/testing-policies/cluster-operators","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.13/tutorials/testing-policies/03-cluster-operators.md","tags":[],"version":"1.13","lastUpdatedAt":1738229211000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Cluster operators","title":"Testing for cluster operators","description":"An introduction to testing Kubewarden policies for cluster operators.","keywords":["kubewarden","kubernetes","cluster operators","testing"],"doc-persona":["kubewarden-developer"],"doc-type":["tutorial"],"doc-topic":["testing-policies","cluster-operators"]},"sidebar":"docs","previous":{"title":"Policy authors","permalink":"/1.13/tutorials/testing-policies/policy-authors"},"next":{"title":"Verifying Kubewarden","permalink":"/1.13/tutorials/verifying-kubewarden"}}');var o=s(74848),i=s(28453);const r={sidebar_label:"Cluster operators",title:"Testing for cluster operators",description:"An introduction to testing Kubewarden policies for cluster operators.",keywords:["kubewarden","kubernetes","cluster operators","testing"],"doc-persona":["kubewarden-developer"],"doc-type":["tutorial"],"doc-topic":["testing-policies","cluster-operators"]},c=void 0,a={},l=[{value:"A testing example",id:"a-testing-example",level:2},{value:"Create <code>AdmissionReview</code> requests",id:"create-admissionreview-requests",level:3},{value:"Test the policy",id:"test-the-policy",level:3},{value:"Automation",id:"automation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s,Head:t}=n;return s||u("Details",!0),t||u("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/testing-policies/cluster-operators"})}),"\n",(0,o.jsx)(n.p,{children:"As a Kubernetes cluster operator, you'll want to perform testing for Kubewarden policies you want to use."}),"\n",(0,o.jsx)(n.p,{children:"You'll have questions like:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"What are the correct policy settings to get the validation/mutation outcome needed?"}),"\n",(0,o.jsxs)(n.li,{children:["How can I be sure everything keeps working as expected when I:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"upgrade the policy to a newer version?"}),"\n",(0,o.jsx)(n.li,{children:"add/change Kubernetes resources?"}),"\n",(0,o.jsx)(n.li,{children:"change the configuration parameters of the policy?"}),"\n",(0,o.jsx)(n.li,{children:"and so forth?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Kubewarden has a utility, ",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl",children:(0,o.jsx)(n.code,{children:"kwctl"})}),",\nthat permits testing of the policies outside of Kubernetes."]}),"\n",(0,o.jsxs)(n.p,{children:["To use ",(0,o.jsx)(n.code,{children:"kwctl"})," you invoke it with following inputs:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A WebAssembly binary file URI of the policy to be run.\nThe Kubewarden policy can load from the:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["local filesystem ",(0,o.jsx)(n.code,{children:"file://"})]}),"\n",(0,o.jsxs)(n.li,{children:["a HTTP(s) server ",(0,o.jsx)(n.code,{children:"https://"})]}),"\n",(0,o.jsxs)(n.li,{children:["an OCI registry ",(0,o.jsx)(n.code,{children:"registry://"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["The admission request object to test.\nYou give it with the ",(0,o.jsx)(n.code,{children:"--request-path"})," argument.\nUse ",(0,o.jsx)(n.code,{children:"stdin"})," by setting ",(0,o.jsx)(n.code,{children:"--request-path"})," to ",(0,o.jsx)(n.code,{children:"-"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The policy settings for runtime as an inline JSON via ",(0,o.jsx)(n.code,{children:"--settings-json"})," flag.\nOr a JSON, or a YAML file, loaded from the file system via ",(0,o.jsx)(n.code,{children:"--settings-path"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After the test ",(0,o.jsx)(n.code,{children:"kwctl"}),", prints the ",(0,o.jsx)(n.code,{children:"ValidationResponse"})," object to the standard output."]}),"\n",(0,o.jsxs)(n.p,{children:["You can download pre-built binaries of ",(0,o.jsx)(n.code,{children:"kwctl"}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"a-testing-example",children:"A testing example"}),"\n",(0,o.jsxs)(n.p,{children:["This section describes how to test the\n",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/psp-apparmor",children:"psp-apparmor"}),"\npolicy with different configurations and validation request objects."]}),"\n",(0,o.jsxs)(n.h3,{id:"create-admissionreview-requests",children:["Create ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," requests"]}),"\n",(0,o.jsxs)(n.p,{children:["You need to create files holding the ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," objects to test the policy."]}),"\n",(0,o.jsxs)(n.p,{children:["You can create a file named ",(0,o.jsx)(n.code,{children:"pod-req-no-specific-apparmor-profile.json"})," with the following contents:"]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("code",{children:"pod-req-no-specific-apparmor-profile.json"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "no-apparmor"\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'})})]}),"\n",(0,o.jsxs)(n.p,{children:["This request tries to create a Pod that doesn't specify any AppArmor profile to use.\nThis is because it doesn't have an ",(0,o.jsx)(n.code,{children:"annotation"})," with the\n",(0,o.jsx)(n.code,{children:"container.apparmor.security.beta.kubernetes.io/<container-name>"})," key."]}),"\n",(0,o.jsxs)(n.p,{children:["You can create a file named ",(0,o.jsx)(n.code,{children:"pod-req-apparmor-unconfined.json"})," with the\nfollowing contents:"]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("code",{children:"pod-req-apparmor-unconfined.json"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "unconfined"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'})})]}),"\n",(0,o.jsxs)(n.p,{children:["This request tries to create a Pod with a container called ",(0,o.jsx)(n.code,{children:"nginx"})," running with the ",(0,o.jsx)(n.code,{children:"unconfined"})," AppArmor profile.\nThis is for tutorial purposes only.\nRunning in ",(0,o.jsx)(n.code,{children:"unconfined"})," mode is a bad security practice."]}),"\n",(0,o.jsxs)(n.p,{children:["Now you can create a file named\n",(0,o.jsx)(n.code,{children:"pod-req-apparmor-custom.json"})," with the following contents:"]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("code",{children:"pod-req-apparmor-custom.json"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "localhost/nginx-custom"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n'})})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["These are all simplified ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," objects.\nOnly the fields relevant to our testing of the policy are used."]})}),"\n",(0,o.jsx)(n.h3,{id:"test-the-policy",children:"Test the policy"}),"\n",(0,o.jsxs)(n.p,{children:["Now you can use ",(0,o.jsx)(n.code,{children:"kwctl"})," to test the creation of a Pod not specifying an AppArmor profile:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n"})}),"\n",(0,o.jsx)(n.p,{children:"The policy accepts the request and produces output like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The policy rejects the creation of a Pod with an ",(0,o.jsx)(n.code,{children:"unconfined"})," AppArmor profile:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'$ kwctl run \\\n    --request-path pod-req-apparmor-unconfined.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"unconfined\\"]"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["On both occasions you ran the policy ",(0,o.jsx)(n.strong,{children:"without"})," providing any kind of setting.\nAs the\n",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/psp-apparmor#configuration",children:"policy's documentation"}),"\nstates, this results in preventing the usage of non-default profiles."]}),"\n",(0,o.jsxs)(n.p,{children:["The Pod using a custom ",(0,o.jsx)(n.code,{children:"nginx"})," profile gets rejected by the policy too:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"localhost/nginx-custom\\"]"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can change the default behavior, allowing chosen AppArmor profiles to be used:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    --settings-json \'{"allowed_profiles": ["runtime/default", "localhost/nginx-custom"]}\' \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 \\\n    | jq\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now the request succeeds:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"automation",children:"Automation"}),"\n",(0,o.jsxs)(n.p,{children:["You can automate all these steps using\n",(0,o.jsx)(n.a,{href:"https://github.com/bats-core/bats-core",children:"bats"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can write a series of tests and integrate their execution inside your existing CI and CD pipelines."}),"\n",(0,o.jsxs)(n.p,{children:['The commands can be "wrapped" into a ',(0,o.jsx)(n.code,{children:"bats"})," test:"]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsxs)("summary",{children:["A ",(0,o.jsx)("code",{children:"bats"}),"test"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'@test "all is good" {\n  run kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request accepted\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n\n@test "reject" {\n  run kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request rejected\n  [ $(expr "$output" : \'.*"allowed":false.*\') -ne 0 ]\n}\n'})})]}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.code,{children:"bats"})," code is in the file ",(0,o.jsx)(n.code,{children:"e2e.bats"}),", you can run the test as:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ bats e2e.bats\n \u2713 all is good\n \u2713 reject\n\n2 tests, 0 failures\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/1.13/tutorials/writing-policies/go/e2e-tests",children:"This"}),"\nsection has more about writing end-to-end tests for your policies."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);