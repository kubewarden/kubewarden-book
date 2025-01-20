"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[95109],{47233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/writing-policies/rust/create-policy","title":"Creating a policy","description":"Creating a Kubewarden policy using Rust.","source":"@site/versioned_docs/version-1.11/tutorials/writing-policies/rust/02-create-policy.md","sourceDirName":"tutorials/writing-policies/rust","slug":"/tutorials/writing-policies/rust/create-policy","permalink":"/1.11/tutorials/writing-policies/rust/create-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/tutorials/writing-policies/rust/02-create-policy.md","tags":[],"version":"1.11","lastUpdatedAt":1737375296000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Creating a policy","title":"Creating a policy","description":"Creating a Kubewarden policy using Rust.","keywords":["kubewarden","kubernetes","policy creation"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","creating-policies"],"doc-persona":["kubewarden-developer"]},"sidebar":"docs","previous":{"title":"Rust","permalink":"/1.11/tutorials/writing-policies/rust/intro-rust"},"next":{"title":"Defining policy settings","permalink":"/1.11/tutorials/writing-policies/rust/define-policy-settings"}}');var s=t(74848),o=t(28453);const r={sidebar_label:"Creating a policy",title:"Creating a policy",description:"Creating a Kubewarden policy using Rust.",keywords:["kubewarden","kubernetes","policy creation"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","creating-policies"],"doc-persona":["kubewarden-developer"]},a=void 0,c={},l=[{value:"Scaffolding the new policy project",id:"scaffolding-the-new-policy-project",level:2},{value:"Testing",id:"testing",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rust/create-policy"})}),"\n",(0,s.jsx)(n.p,{children:"As an example, you create a simple validation policy that processes Pod creation requests."}),"\n",(0,s.jsxs)(n.p,{children:["The policy looks at the ",(0,s.jsx)(n.code,{children:"metadata.name"})," attribute of the Pod and rejects pods having an invalid name.\nIt's list of invalid names should be configurable by end users of the policy."]}),"\n",(0,s.jsx)(n.p,{children:"The policy settings look something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"invalid_names:\n- bad_name1\n- bad_name2\n"})}),"\n",(0,s.jsx)(n.p,{children:"The policy should accept the creation of a Pod like the following one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n// highlight-next-line\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"It should reject the creation of a Pod like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n// highlight-next-line\n  name: bad_name1\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"scaffolding-the-new-policy-project",children:"Scaffolding the new policy project"}),"\n",(0,s.jsxs)(n.p,{children:["You can create a new policy project by using ",(0,s.jsx)(n.code,{children:"cargo generate"})," with the\n",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/rust-policy-template",children:"template project"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["First, install ",(0,s.jsx)(n.code,{children:"cargo-generate"}),". This requires ",(0,s.jsx)(n.a,{href:"https://pkgs.org/download/openssl-devel",children:"openssl-devel"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cargo install cargo-generate\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now scaffold the project as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cargo generate --git https://github.com/kubewarden/rust-policy-template \\\n               --branch main \\\n               --name demo\n"})}),"\n",(0,s.jsx)(n.p,{children:"The command produces output like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"\ud83d\udd27   Creating project called `demo`...\n\u2728   Done! New project created /<some-path-name>/demo\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This creates the new policy project in the ",(0,s.jsx)(n.code,{children:"demo"})," sub-directory."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you plan to make use of the GitHub container registry functionality in the demo, you need to\n",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry#enabling-the-container-registry-for-your-personal-account",children:"enable improved container support"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.p,{children:"You can try:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"cargo test\n"})}),"\n",(0,s.jsx)(n.p,{children:"This tests the generated scaffolding. If everything is correctly in place you'll see a series of compilation messages ending with output like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"running 4 tests\ntest settings::tests::validate_settings ... ok\ntest tests::accept_request_with_non_pod_resource ... ok\ntest tests::accept_pod_with_valid_name ... ok\ntest tests::reject_pod_with_invalid_name ... ok\n\ntest result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);