"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[46543],{74956:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=i(85893),t=i(11151);const r={sidebar_label:"Logging",title:"Logging",description:"How to use logging functionality when writing a Kubewarden policy in Rust.",keywords:["Kubewarden","kubernetes","logging"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","logging"],"doc-persona":["kubewarden-policy-developer"]},s=void 0,l={id:"tutorials/writing-policies/rust/logging",title:"Logging",description:"How to use logging functionality when writing a Kubewarden policy in Rust.",source:"@site/versioned_docs/version-1.17/tutorials/writing-policies/rust/06-logging.md",sourceDirName:"tutorials/writing-policies/rust",slug:"/tutorials/writing-policies/rust/logging",permalink:"/tutorials/writing-policies/rust/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.17/tutorials/writing-policies/rust/06-logging.md",tags:[],version:"1.17",lastUpdatedAt:1729259144e3,sidebarPosition:6,frontMatter:{sidebar_label:"Logging",title:"Logging",description:"How to use logging functionality when writing a Kubewarden policy in Rust.",keywords:["Kubewarden","kubernetes","logging"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","logging"],"doc-persona":["kubewarden-policy-developer"]},sidebar:"docs",previous:{title:"Creating a new mutation policy",permalink:"/tutorials/writing-policies/rust/mutation-policy"},next:{title:"Building and distributing policies",permalink:"/tutorials/writing-policies/rust/build-and-distribute"}},a={},c=[{value:"Initialize logger",id:"initialize-logger",level:2},{value:"Consuming the logger",id:"consuming-the-logger",level:2}];function g(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rust/logging"})}),"\n",(0,o.jsxs)(n.p,{children:["You can have your policy perform logging.\nThe ",(0,o.jsx)(n.code,{children:"policy-server"})," or ",(0,o.jsx)(n.code,{children:"kwctl"})," forwards those log entries with the appropriate information."]}),"\n",(0,o.jsxs)(n.p,{children:["The logging library chosen for the Rust SDK is\n",(0,o.jsx)(n.a,{href:"https://github.com/slog-rs/slog",children:(0,o.jsx)(n.code,{children:"slog"})}),".\nIt's a popular, well known crate and integrates cleanly with Kubewarden."]}),"\n",(0,o.jsx)(n.h2,{id:"initialize-logger",children:"Initialize logger"}),"\n",(0,o.jsxs)(n.p,{children:["The project recommends you create a global sink you can log to, from where needed in your policy.\nFor this, use the ",(0,o.jsx)(n.code,{children:"lazy_static"})," crate:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'use slog::{o, Logger};\n\nlazy_static! {\n    static ref LOG_DRAIN: Logger = Logger::root(\n        logging::KubewardenDrain::new(),\n        o!("policy" => "sample-policy")\n    );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"consuming-the-logger",children:"Consuming the logger"}),"\n",(0,o.jsxs)(n.p,{children:["Now, from within the ",(0,o.jsx)(n.code,{children:"validate"}),", or ",(0,o.jsx)(n.code,{children:"validate_settings"})," functions,\nyou can log using the macros exported by ",(0,o.jsx)(n.code,{children:"slog"})," that match each supported logging level:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'use slog::{info, o, warn, Logger};\n\nfn validate(payload: &[u8]) -> CallResult {\n    // ...\n    info!(LOG_DRAIN, "starting validation");\n    // ...\n    warn!(\n        LOG_DRAIN, "structured log";\n        "some_resource_name" => &some_resource_name\n    );\n    // ...\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"slog"})," library sends all logs to the drain initialized in the global variable.\nThis synchronizes to the policy evaluator executing the policy.\nThis is either ",(0,o.jsx)(n.code,{children:"kwctl"})," or the ",(0,o.jsx)(n.code,{children:"policy-server"}),".\nThen the policy evaluator logs this information,\nadding further known contextual information,\nsuch as the Kubernetes request ",(0,o.jsx)(n.code,{children:"uid"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["More information about the\n",(0,o.jsx)(n.a,{href:"https://docs.rs/slog/2.7.0/slog/macro.log.html",children:"logging macros"}),"\noffered by slog are in its\n",(0,o.jsx)(n.a,{href:"https://docs.rs/slog/2.7.0/slog/index.html",children:"documentation"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var o=i(67294);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);