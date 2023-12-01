"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Tracing",l={unversionedId:"operator-manual/ui-extension/tracing",id:"version-1.7/operator-manual/ui-extension/tracing",title:"Tracing",description:"Tracing allows to collect fine grained details about policy evaluations. It can be a useful tool for debugging issues inside of your Kubewarden deployment and policies.",source:"@site/versioned_docs/version-1.7/operator-manual/ui-extension/tracing.md",sourceDirName:"operator-manual/ui-extension",slug:"/operator-manual/ui-extension/tracing",permalink:"/1.7/operator-manual/ui-extension/tracing",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/operator-manual/ui-extension/tracing.md",tags:[],version:"1.7",lastUpdatedAt:1701438722,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Monitoring",permalink:"/1.7/operator-manual/ui-extension/metrics"},next:{title:"Requirements",permalink:"/1.7/operator-manual/airgap/requirements"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Jaeger",id:"install-jaeger",level:2},{value:"Update <code>rancher-kubewarden-controller</code> with Jaeger endpoint",id:"update-rancher-kubewarden-controller-with-jaeger-endpoint",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Tracing allows to collect fine grained details about policy evaluations. It can be a useful tool for debugging issues inside of your Kubewarden deployment and policies."),(0,a.kt)("p",null,"We will use ",(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger")," to receive, store and visualize trace events."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Policy tracing logs")),"\n",(0,a.kt)("img",{alt:"UI Policy Tracing Logs",src:r(11506).Z,width:"1075",height:"1061"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Cert-Manager and OpenTelemetry are required.\nFollow ",(0,a.kt)("a",{parentName:"p",href:"/1.7/operator-manual/telemetry/opentelemetry/quickstart#install-opentelemetry"},"these instructions")," to install Cert Manager and the OpenTelemetry Operator."),(0,a.kt)("h2",{id:"install-jaeger"},"Install Jaeger"),(0,a.kt)("p",null,"Apply the installation steps from the ",(0,a.kt)("a",{parentName:"p",href:"/1.7/operator-manual/telemetry/tracing/quickstart#install-jaeger"},"tracing quickstart"),"."),(0,a.kt)("p",null,"Once all the resources have been created by the Jaeger operator, we will have a\nService under ",(0,a.kt)("inlineCode",{parentName:"p"},"my-open-telemetry-collector.jaeger.svc.cluster.local"),"."),(0,a.kt)("p",null,"The Jaeger Query UI will be reachable at the following address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"https://<CLUSTER_IP>/api/v1/namespaces/jaeger/services/http:my-open-telemetry-query:16686/proxy/search\n")),(0,a.kt)("p",null,"This endpoint may be unique depending on your configuration. You can find the endpoint listed for your Jaeger resource under the Services page."),(0,a.kt)("h3",{id:"update-rancher-kubewarden-controller-with-jaeger-endpoint"},"Update ",(0,a.kt)("inlineCode",{parentName:"h3"},"rancher-kubewarden-controller")," with Jaeger endpoint"),(0,a.kt)("p",null,"You will need to edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-kubewarden-controller"),' resource to add the Jaeger endpoint "my-open-telemetry-collector.jaeger.svc.cluster.local:14250".'),(0,a.kt)("p",null,"For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'telemetry:\n  enabled: True\n  tracing:\n    jaeger:\n      endpoint: "my-open-telemetry-collector.jaeger.svc.cluster.local:14250"\n      tls:\n        insecure: true\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"my-open-telemetry-collector")," is the service we installed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"jaeger")," namespace."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To keep things simple, we are not going to encrypt the communication between the\nOpenTelemetry collector and the Jaeger endpoint."),(0,a.kt)("p",{parentName:"admonition"},"This is ",(0,a.kt)("strong",{parentName:"p"},"not meant to be a production deployment"),".\nWe strongly recommend\nto read Jaeger's ",(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/latest/operator/"},"official documentation"),".")),(0,a.kt)("p",null,"You should now be able to view any failed requests for policies tied to a specific Policy Server or the detail view for any given policy. You can get a more in-depth view into the traces from the Jaeger UI."))}d.isMDXComponent=!0},11506:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ui_policy_tracing-8ed4d8fe989286a671f867e04131aedc.png"}}]);