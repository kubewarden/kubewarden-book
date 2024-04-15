"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[17934],{42421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(85893),i=t(11151);const o={sidebar_label:"End-to-end testing",title:""},a="End-to-end testing",l={id:"writing-policies/go/e2e-tests",title:"",description:"So far we have tested the policy using a set of Go unit tests. This section shows",source:"@site/versioned_docs/version-1.9/writing-policies/go/05-e2e-tests.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/e2e-tests",permalink:"/1.9/writing-policies/go/e2e-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/go/05-e2e-tests.md",tags:[],version:"1.9",lastUpdatedAt:1713186334e3,sidebarPosition:5,frontMatter:{sidebar_label:"End-to-end testing",title:""},sidebar:"docs",previous:{title:"Write the Validation Logic",permalink:"/1.9/writing-policies/go/validation"},next:{title:"Logging",permalink:"/1.9/writing-policies/go/logging"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"end-to-end-testing",children:"End-to-end testing"}),"\n",(0,s.jsx)(n.p,{children:"So far we have tested the policy using a set of Go unit tests. This section shows\nhow we can write end-to-end tests that run against the actual WebAssembly\nbinary produced by TinyGo."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"These tools need to be installed on your development machine:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"docker or another container engine: used to build the WebAssembly\npolicy. We will rely on the compiler shipped within the official\nTinyGo container image."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/bats-core/bats-core",children:"bats"}),": used to write the\ntests and automate their execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases",children:"kwctl"}),": CLI tool\nprovided by Kubewarden to run its policies outside of Kubernetes,\namong other actions. This is covered in depth inside of ",(0,s.jsx)(n.a,{href:"/1.9/testing-policies/intro",children:"this section"}),"](/testing-policies/01-intro.md) of the documentation."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"writing-tests",children:"Writing tests"}),"\n",(0,s.jsxs)(n.p,{children:["We are going to use ",(0,s.jsx)(n.a,{href:"https://github.com/bats-core/bats-core",children:"bats"})," to write and\nautomate our tests. Each test will be composed by the following steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the policy using ",(0,s.jsx)(n.code,{children:"kwctl"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Perform some assertions against the output produced by the\n",(0,s.jsx)(n.code,{children:"kwctl"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All the end-to-end tests are located inside a file called ",(0,s.jsx)(n.code,{children:"e2e.bats"}),". The\nscaffolded project already includes such a file. We will just change its\ncontents to reflect how our policy behaves."]}),"\n",(0,s.jsx)(n.p,{children:"As a final note, for the end-to-end tests, we will use the same test fixtures files\nwe previously used inside of the Go unit tests."}),"\n",(0,s.jsx)(n.p,{children:"The first test ensures a request is approved when no settings are provided:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@test "accept when no settings are provided" {\n  run kwctl run -r test_data/pod.json policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request is accepted\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"We can execute the end-to-end tests by using this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"make e2e-tests\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will produce the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"bats e2e.bats\n \u2713 accept when no settings are provided\n\n1 test, 0 failures\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's write a test to ensure a request is approved when a user-defined constraint\nis respected:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@test "accept because label is satisfying a constraint" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"cc-center": "\\\\d+"}}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*true\') -ne 0 ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Next, we can write a test to ensure a request is accepted when none of the\nlabels is on the deny list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@test "accept labels are not on deny list" {\n  run kwctl run \\\n    -r test_data/pod.json \\\n    --settings-json \'{"denied_labels": ["foo", "bar"]}\' \\\n    policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's improve the test coverage by adding a test that rejects a request\nbecause one of the labels is on the deny list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@test "reject because label is on deny list" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"denied_labels": ["foo", "owner"]}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*false\') -ne 0 ]\n  [ $(expr "$output" : ".*Label owner is on the deny list.*") -ne 0 ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following test ensures a request is rejected when one of its labels doesn't\nsatisfy the constraint provided by the user."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@test "reject because label is not satisfying a constraint" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"cc-center": "team-\\\\d+"}}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*false\') -ne 0 ]\n  [ $(expr "$output" : ".*The value of cc-center doesn\'t pass user-defined constraint.*") -ne 0 ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's make sure the validation fails if one of the constrained labels is\nnot found:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@test "reject because constrained label is missing" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"organization": "\\\\d+"}}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*false\') -ne 0 ]\n  [ $(expr "$output" : ".*Constrained label organization not found inside of Pod.*") -ne 0 ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"We want to ensure settings' validation is working properly. This can be done\nwith the following tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@test "fail settings validation because of conflicting labels" {\n  run kwctl run \\\n    -r test_data/pod.json \\\n    --settings-json \'{"denied_labels": ["foo", "cc-center"], "constrained_labels": {"cc-center": "^cc-\\\\d+$"}}\' \\\n    policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # settings validation failed\n  [ $(expr "$output" : \'.*"valid":false.*\') -ne 0 ]\n  [ $(expr "$output" : ".*Provided settings are not valid: These labels cannot be constrained and denied at the same time: Set{cc-center}.*") -ne 0 ]\n}\n\n@test "fail settings validation because of invalid constraint" {\n  run kwctl run \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"cc-center": "^cc-[12$"}}\' \\\n    policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ $(expr "$output" : \'.*"valid":false.*\') -ne 0 ]\n  [ $(expr "$output" : ".*Provided settings are not valid: error parsing regexp.*") -ne 0 ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"We have reached a pretty good level of coverage, let's run all the end-to-end\ntests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ make e2e-tests\nbats e2e.bats\ne2e.bats\n \u2713 accept when no settings are provided\n \u2713 accept because label is satisfying a constraint\n \u2713 accept labels are not on deny list\n \u2713 reject because label is on deny list\n \u2713 reject because label is not satisfying a constraint\n \u2713 reject because constrained label is missing\n \u2713 fail settings validation because of conflicting labels\n \u2713 fail settings validation because of invalid constraint\n\n8 tests, 0 failures\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);