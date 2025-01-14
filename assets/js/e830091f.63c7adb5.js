"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[24013],{55981:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"howtos/ui-extension/tracing","title":"Tracing","description":"Tracing for Kubewarden.","source":"@site/docs/howtos/ui-extension/03-tracing.md","sourceDirName":"howtos/ui-extension","slug":"/howtos/ui-extension/tracing","permalink":"/next/howtos/ui-extension/tracing","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/howtos/ui-extension/03-tracing.md","tags":[],"version":"current","lastUpdatedAt":1736867009000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Tracing","title":"Tracing","description":"Tracing for Kubewarden.","keywords":["kubewarden","kubernetes","tracing"],"doc-type":["hosto"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-topic":["operator-manual","ui-extension","tracing"]},"sidebar":"docs","previous":{"title":"Monitoring","permalink":"/next/howtos/ui-extension/metrics"},"next":{"title":"Verify Images","permalink":"/next/howtos/application-collection/verify-images"}}');var o=r(74848),i=r(28453);const s={sidebar_label:"Tracing",title:"Tracing",description:"Tracing for Kubewarden.",keywords:["kubewarden","kubernetes","tracing"],"doc-type":["hosto"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-topic":["operator-manual","ui-extension","tracing"]},a=void 0,c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Jaeger",id:"install-jaeger",level:2},{value:"Update <code>rancher-kubewarden-controller</code> with Jaeger endpoint",id:"update-rancher-kubewarden-controller-with-jaeger-endpoint",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/ui-extension/tracing"})}),"\n",(0,o.jsx)(n.p,{children:"Tracing allows collection of fine-grained details about policy evaluations.\nIt's a useful tool for debugging issues in your Kubewarden deployment and policies."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"})," is used to receive, store, and visualize trace events."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"Policy tracing logs"})}),"\n",(0,o.jsx)(n.img,{alt:"UI Policy Tracing Logs",src:r(88939).A+"",width:"1075",height:"1061"})]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["Cert-Manager and OpenTelemetry are required.\nFollow\n",(0,o.jsx)(n.a,{href:"/next/howtos/telemetry/opentelemetry-qs#install-opentelemetry",children:"these instructions"}),"\nto install Cert Manager and the OpenTelemetry Operator."]}),"\n",(0,o.jsx)(n.h2,{id:"install-jaeger",children:"Install Jaeger"}),"\n",(0,o.jsxs)(n.p,{children:["Apply the installation steps from the\n",(0,o.jsx)(n.a,{href:"/next/howtos/telemetry/tracing-qs#install-jaeger",children:"tracing quickstart"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Once all the resources are created by the Jaeger operator,\nthere is a Service under\n",(0,o.jsx)(n.code,{children:"my-open-telemetry-collector.jaeger.svc.cluster.local"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The Jaeger Query UI is reachable at the following address:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"https://<CLUSTER_IP>/api/v1/namespaces/jaeger/services/http:my-open-telemetry-query:16686/proxy/search\n"})}),"\n",(0,o.jsx)(n.p,{children:"This endpoint may be unique depending on your configuration.\nYou can find the endpoint listed for your Jaeger resource under the Services page."}),"\n",(0,o.jsxs)(n.h3,{id:"update-rancher-kubewarden-controller-with-jaeger-endpoint",children:["Update ",(0,o.jsx)(n.code,{children:"rancher-kubewarden-controller"})," with Jaeger endpoint"]}),"\n",(0,o.jsxs)(n.p,{children:["You'll need to edit the ",(0,o.jsx)(n.code,{children:"rancher-kubewarden-controller"}),' resource to add the Jaeger endpoint "my-open-telemetry-collector.jaeger.svc.cluster.local:4317".']}),"\n",(0,o.jsx)(n.p,{children:"For instance:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'telemetry:\n  tracing:\n    enabled: True\n    jaeger:\n      endpoint: "my-open-telemetry-collector.jaeger.svc.cluster.local:4317"\n      tls:\n        insecure: true\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"my-open-telemetry-collector"})," is the service we installed under the ",(0,o.jsx)(n.code,{children:"jaeger"})," namespace."]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsx)(n.p,{children:"For simplicity,\nwe're not encrypting the communication between the OpenTelemetry collector and the Jaeger endpoint."}),(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(n.strong,{children:"not suitable for production deployment"}),".\nWe recommend you read Jaeger's\n",(0,o.jsx)(n.a,{href:"https://www.jaegertracing.io/docs/latest/operator/",children:"documentation"}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:"You should now be able to view any failed requests for policies tied to a specific Policy Server,\nor the detail view for any given policy.\nYou can get a more in-depth view of the traces by using the Jaeger UI."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},88939:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/ui_policy_tracing-8ed4d8fe989286a671f867e04131aedc.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);