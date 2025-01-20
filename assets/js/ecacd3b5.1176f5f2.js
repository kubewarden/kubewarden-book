"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1695],{4696:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"writing-policies/rust/intro-rust","title":"","description":"Rust is the most mature programming language that","source":"@site/versioned_docs/version-1.9/writing-policies/rust/01-intro-rust.md","sourceDirName":"writing-policies/rust","slug":"/writing-policies/rust/intro-rust","permalink":"/1.9/writing-policies/rust/intro-rust","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/rust/01-intro-rust.md","tags":[],"version":"1.9","lastUpdatedAt":1737375296000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Introduction to Rust","title":""},"sidebar":"docs","previous":{"title":"Writing Policies","permalink":"/1.9/writing-policies/"},"next":{"title":"Creating a new validation policy","permalink":"/1.9/writing-policies/rust/create-policy"}}');var i=s(74848),r=s(28453);const o={sidebar_label:"Introduction to Rust",title:""},c="Rust",a={},l=[{value:"Getting Rust dependencies",id:"getting-rust-dependencies",level:2},{value:"OSX specific dependencies",id:"osx-specific-dependencies",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"rust",children:"Rust"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," is the most mature programming language that\ncan generate WebAssembly modules: WebAssembly is a first-class citizen\nin the Rust world. That means many of the tools and crates of the Rust\necosystem work out of the box."]}),"\n",(0,i.jsxs)(t.p,{children:["Kubewarden provides a ",(0,i.jsx)(t.a,{href:"https://crates.io/crates/kubewarden-policy-sdk",children:"Rust SDK"}),"\nthat simplifies the process of writing policies, plus a\n",(0,i.jsx)(t.a,{href:"https://github.com/kubewarden/rust-policy-template",children:"template project"})," to\nquickly scaffold a policy project using the\n",(0,i.jsx)(t.a,{href:"https://github.com/cargo-generate/cargo-generate",children:(0,i.jsx)(t.code,{children:"cargo-generate"})})," utility."]}),"\n",(0,i.jsx)(t.p,{children:"This document illustrates how to take advantage of these projects to write\nKubewarden policies using the Rust programming language."}),"\n",(0,i.jsxs)(t.p,{children:["Note well, we won't cover the details of Kubewarden's Rust SDK inside of this\npage. These can be found inside of the\n",(0,i.jsx)(t.a,{href:"https://docs.rs/kubewarden-policy-sdk/0.1.0",children:"official crate documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-rust-dependencies",children:"Getting Rust dependencies"}),"\n",(0,i.jsx)(t.p,{children:"This section guides you through the process of installing the Rust compiler and\nits dependencies."}),"\n",(0,i.jsxs)(t.p,{children:["As a first step install the Rust compiler and its tools, this can be easily done\nusing ",(0,i.jsx)(t.a,{href:"https://github.com/rust-lang/rustup",children:"rustup"}),". Please follow\n",(0,i.jsx)(t.a,{href:"https://rust-lang.github.io/rustup/installation/index.html",children:"rustup's install documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once ",(0,i.jsx)(t.code,{children:"rustup"})," is installed add the WASI target:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"rustup target add wasm32-wasi\n"})}),"\n",(0,i.jsx)(t.h2,{id:"osx-specific-dependencies",children:"OSX specific dependencies"}),"\n",(0,i.jsxs)(t.p,{children:["In order to use ",(0,i.jsx)(t.code,{children:"cargo-generate"})," you will need to add the Xcode tool set. If it isn't installed through Xcode the following command will give you the dependencies needed:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"xcode-select --install\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);