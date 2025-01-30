"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[26816],{82874:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"reference/policy-server-cli","title":"Policy Server CLI","description":"Policy Server CLI reference documentation","source":"@site/docs/reference/policy-server-cli.md","sourceDirName":"reference","slug":"/reference/policy-server-cli","permalink":"/next/reference/policy-server-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/reference/policy-server-cli.md","tags":[],"version":"current","lastUpdatedAt":1738229211000,"sidebarPosition":121,"frontMatter":{"sidebar_label":"Policy Server CLI Reference","sidebar_position":121,"title":"Policy Server CLI","description":"Policy Server CLI reference documentation","keywords":["cli","reference","policy-server"],"doc-persona":["kubewarden-operator"],"doc-type":["reference"],"doc-topic":["operator-manual"]},"sidebar":"docs","previous":{"title":"kwctl CLI Reference","permalink":"/next/reference/kwctl-cli"},"next":{"title":"For who?","permalink":"/next/personas"}}');var i=s(74848),c=s(28453);const o={sidebar_label:"Policy Server CLI Reference",sidebar_position:121,title:"Policy Server CLI",description:"Policy Server CLI reference documentation",keywords:["cli","reference","policy-server"],"doc-persona":["kubewarden-operator"],"doc-type":["reference"],"doc-topic":["operator-manual"]},l="Command-Line Help for policy-server",d={},t=[{value:"<code>policy-server</code>",id:"policy-server",level:2},{value:"<strong>Subcommands:</strong>",id:"subcommands",level:6},{value:"<strong>Options:</strong>",id:"options",level:6},{value:"<code>policy-server docs</code>",id:"policy-server-docs",level:2},{value:"<strong>Options:</strong>",id:"options-1",level:6}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h6:"h6",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"command-line-help-for-policy-server",children:["Command-Line Help for ",(0,i.jsx)(n.code,{children:"policy-server"})]})}),"\n",(0,i.jsxs)(n.p,{children:["This document contains the help content for the ",(0,i.jsx)(n.code,{children:"policy-server"})," command-line program."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command Overview:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"#policy-server",children:[(0,i.jsx)(n.code,{children:"policy-server"}),"\u21b4"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"#policy-server-docs",children:[(0,i.jsx)(n.code,{children:"policy-server docs"}),"\u21b4"]})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"policy-server",children:(0,i.jsx)(n.code,{children:"policy-server"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage:"})," ",(0,i.jsx)(n.code,{children:"policy-server [OPTIONS] [COMMAND]"})]}),"\n",(0,i.jsx)(n.h6,{id:"subcommands",children:(0,i.jsx)(n.strong,{children:"Subcommands:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docs"})," \u2014 Generates the markdown documentation for policy-server commands"]}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"options",children:(0,i.jsx)(n.strong,{children:"Options:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--addr <BIND_ADDRESS>"})," \u2014 Bind against ADDRESS"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"0.0.0.0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--always-accept-admission-reviews-on-namespace <NAMESPACE>"})," \u2014 Always accept AdmissionReviews that target the given namespace"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--cert-file <CERT_FILE>"})," \u2014 Path to an X.509 certificate file for HTTPS"]}),"\n",(0,i.jsx)(n.p,{children:"Default value: ``"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--daemon"})," \u2014 If set, runs policy-server in detached mode as a daemon"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--daemon-pid-file <DAEMON-PID-FILE>"})," \u2014 Path to the PID file, used only when running in daemon mode"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"policy-server.pid"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--daemon-stderr-file <DAEMON-STDERR-FILE>"})," \u2014 Path to the file holding stderr, used only when running in daemon mode"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--daemon-stdout-file <DAEMON-STDOUT-FILE>"})," \u2014 Path to the file holding stdout, used only when running in daemon mode"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--disable-timeout-protection"})," \u2014 Disable policy timeout protection"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--docker-config-json-path <DOCKER_CONFIG>"})," \u2014 Path to a Docker config.json-like path. Can be used to indicate registry authentication details"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--enable-metrics"})," \u2014 Enable metrics"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--enable-pprof"})," \u2014 Enable pprof profiling"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--ignore-kubernetes-connection-failure"})," \u2014 Do not exit with an error if the Kubernetes connection fails. This will cause context-aware policies to break when there's no connection with Kubernetes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--key-file <KEY_FILE>"})," \u2014 Path to an X.509 private key file for HTTPS"]}),"\n",(0,i.jsx)(n.p,{children:"Default value: ``"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--log-fmt <LOG_FMT>"})," \u2014 Log output format"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"text"})]}),"\n",(0,i.jsxs)(n.p,{children:["Possible values: ",(0,i.jsx)(n.code,{children:"text"}),", ",(0,i.jsx)(n.code,{children:"json"}),", ",(0,i.jsx)(n.code,{children:"otlp"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--log-level <LOG_LEVEL>"})," \u2014 Log level"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"info"})]}),"\n",(0,i.jsxs)(n.p,{children:["Possible values: ",(0,i.jsx)(n.code,{children:"trace"}),", ",(0,i.jsx)(n.code,{children:"debug"}),", ",(0,i.jsx)(n.code,{children:"info"}),", ",(0,i.jsx)(n.code,{children:"warn"}),", ",(0,i.jsx)(n.code,{children:"error"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--log-no-color"})," \u2014 Disable colored output for logs"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--policies <POLICIES_FILE>"})," \u2014 YAML file holding the policies to be loaded and their settings"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"policies.yml"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--policies-download-dir <POLICIES_DOWNLOAD_DIR>"})," \u2014 Download path for the policies"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"."})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--policy-timeout <MAXIMUM_EXECUTION_TIME_SECONDS>"})," \u2014 Interrupt policy evaluation after the given time"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"2"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--port <PORT>"})," \u2014 Listen on PORT"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"3000"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--sigstore-cache-dir <SIGSTORE_CACHE_DIR>"})," \u2014 Directory used to cache sigstore data"]}),"\n",(0,i.jsxs)(n.p,{children:["Default value: ",(0,i.jsx)(n.code,{children:"sigstore-data"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--sources-path <SOURCES_PATH>"})," \u2014 YAML file holding source information (https, registry insecure hosts, custom CA's...)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--verification-path <VERIFICATION_CONFIG_PATH>"})," \u2014 YAML file holding verification information (URIs, keys, annotations...)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--workers <WORKERS_NUMBER>"})," \u2014 Number of worker threads to create"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"policy-server-docs",children:(0,i.jsx)(n.code,{children:"policy-server docs"})}),"\n",(0,i.jsx)(n.p,{children:"Generates the markdown documentation for policy-server commands"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage:"})," ",(0,i.jsx)(n.code,{children:"policy-server docs --output <FILE>"})]}),"\n",(0,i.jsx)(n.h6,{id:"options-1",children:(0,i.jsx)(n.strong,{children:"Options:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-o"}),", ",(0,i.jsx)(n.code,{children:"--output <FILE>"})," \u2014 path where the documentation file will be stored"]}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)("small",{children:(0,i.jsx)("i",{children:(0,i.jsxs)(n.p,{children:["This document was generated automatically by\n",(0,i.jsx)("a",{href:"https://crates.io/crates/clap-markdown",children:(0,i.jsx)("code",{children:"clap-markdown"})}),"."]})})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const i={},c=r.createContext(i);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);