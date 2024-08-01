"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[67211],{61196:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=i(85893),n=i(11151);const r={sidebar_label:"Typescript",title:"Typescript",description:"Writing Kubewarden policies with Typescript",keywords:["at least one"],"doc-type":["one of how-to","explanation","tutorial","reference"],"doc-topic":["root-branch"],"doc-persona":["default"]},o=void 0,c={id:"writing-policies/typescript",title:"Typescript",description:"Writing Kubewarden policies with Typescript",source:"@site/versioned_docs/version-1.10/writing-policies/typescript.md",sourceDirName:"writing-policies",slug:"/writing-policies/typescript",permalink:"/1.10/writing-policies/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/typescript.md",tags:[],version:"1.10",lastUpdatedAt:1722507954e3,frontMatter:{sidebar_label:"Typescript",title:"Typescript",description:"Writing Kubewarden policies with Typescript",keywords:["at least one"],"doc-type":["one of how-to","explanation","tutorial","reference"],"doc-topic":["root-branch"],"doc-persona":["default"]},sidebar:"docs",previous:{title:"Swift",permalink:"/1.10/writing-policies/swift"},next:{title:"Other languages",permalink:"/1.10/writing-policies/other-languages"}},a={},l=[{value:"Current state",id:"current-state",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["As stated on the ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"official website"}),":"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"TypeScript extends JavaScript by adding types."}),"\n",(0,s.jsx)(t.p,{children:"By understanding JavaScript, TypeScript saves you time catching errors and\nproviding fixes before you run code."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["TypeScript can't target WebAssembly, however\n",(0,s.jsx)(t.a,{href:"https://www.assemblyscript.org/",children:"AssemblyScript"}),"\nis a ",(0,s.jsx)(t.strong,{children:"subset"})," of TypeScript designed for WebAssembly."]}),"\n",(0,s.jsx)(t.h2,{id:"current-state",children:"Current state"}),"\n",(0,s.jsx)(t.p,{children:"Currently, there's no Kubewarden SDK for AssemblyScript.\nResources permitting, we hope to have on in the near future."}),"\n",(0,s.jsx)(t.p,{children:"However, there are limitations affecting AssemblyScript:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["There's no built-in way to serialize and deserialize Classes to\nand from JSON.\nSee ",(0,s.jsx)(t.a,{href:"https://github.com/AssemblyScript/assemblyscript/issues/292",children:"this issue"})]}),"\n",(0,s.jsxs)(t.li,{children:["It ",(0,s.jsx)(t.em,{children:"seems"})," there's no JSON path library for AssemblyScript"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/kubewarden/pod-privileged-policy/tree/assemblyscript-implementation",children:"This GitHub repository branch "}),"\nhas a Kubewarden Policy written in AssemblyScript."]}),"\n",(0,s.jsx)(t.p,{children:"This repository has a series of GitHub Actions that automate the following tasks:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Run unit tests and code linting on pull requests and after code is merged into the main branch"}),"\n",(0,s.jsxs)(t.li,{children:["Build the policy in ",(0,s.jsx)(t.code,{children:"release"})," mode and push it to an OCI registry as an artifact"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>o});var s=i(67294);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);