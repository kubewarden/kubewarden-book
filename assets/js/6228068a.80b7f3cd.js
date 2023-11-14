"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"Rancher Fleet",title:"Managing Kubewarden with Rancher Fleet",description:"Managing Kubewarden with Rancher Fleet.",keywords:["kubernetes","kubewarden","rancher fleet"]},i=void 0,l={unversionedId:"operator-manual/Rancher-Fleet",id:"version-1.9/operator-manual/Rancher-Fleet",title:"Managing Kubewarden with Rancher Fleet",description:"Managing Kubewarden with Rancher Fleet.",source:"@site/versioned_docs/version-1.9/operator-manual/Rancher-Fleet.md",sourceDirName:"operator-manual",slug:"/operator-manual/Rancher-Fleet",permalink:"/operator-manual/Rancher-Fleet",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/operator-manual/Rancher-Fleet.md",tags:[],version:"1.9",lastUpdatedAt:1699969709,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{sidebar_label:"Rancher Fleet",title:"Managing Kubewarden with Rancher Fleet",description:"Managing Kubewarden with Rancher Fleet.",keywords:["kubernetes","kubewarden","rancher fleet"]},sidebar:"docs",previous:{title:"Monitor mode",permalink:"/operator-manual/monitor-mode"},next:{title:"Policy evaluation timeout",permalink:"/operator-manual/policy-evaluation-timeout"}},s={},p=[{value:"Installing",id:"installing",level:2},{value:"Removing",id:"removing",level:2},{value:"Example",id:"example",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can manage Kubewarden Helm charts,\nlike other Helm charts, with ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"Rancher Fleet"),".\nRancher Fleet uses Kubernetes CRDs\nto define a GitOps approach to managing Kubernetes clusters.\nIt does this by defining ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/concepts"},"Fleet Bundles"),"."),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)("p",null,"The Kubewarden charts are standard charts,\nthey have dependencies (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"cert-manager"),"),\nand depend transitively on each other"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-crds")," \u2190 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," \u2190 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.kubewarden.io/quick-start"},"Quickstart docs"),")\nfor more information."),(0,a.kt)("p",null,"Using Rancher Fleet, you can code the chart dependencies using\n",(0,a.kt)("inlineCode",{parentName:"p"},"dependsOn")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/ref-fleet-yaml"},(0,a.kt)("inlineCode",{parentName:"a"},"fleet.yaml"))," file."),(0,a.kt)("p",null,"You may see transient errors until the charts are ready, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"ErrApplied(1) [Cluster fleet-local/local: dependent bundle(s) are not ready:\n[kubewarden-example-helm-kubewarden-controller]]\n")),(0,a.kt)("p",null,"These errors don't signify a problem,\nand once the charts have finished deployment,\nthey no longer appear."),(0,a.kt)("h2",{id:"removing"},"Removing"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When removing the GitRepo, all 3 Kubewarden charts get removed at once.\nThis means the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-crds")," chart gets removed."),(0,a.kt)("p",{parentName:"admonition"},"Kubewarden uses a pre-delete helm hook job in ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," chart that deletes the default policy-server.\nThis pre-delete hook is necessary to vacate the webhooks of the policies before deleting the PolicyServer.\nThis is true any Policy Engine.\nIf not, the cluster may have webhooks for policies that don't exist anymore\nso rejecting everything and being in a failed state."),(0,a.kt)("p",{parentName:"admonition"},"Removing the GitRepo, and hence the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-crds")," chart,\nat the same time as the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," chart makes the pre-delete hook job fail.\nIt means the removal is incomplete, leaving 'debris' in the cluster.")),(0,a.kt)("p",null,"Uninstalling CRDs automatically isn't normally supported by any tooling, and\nRancher Fleet is no exception."),(0,a.kt)("p",null,"To perform a correct removal,\nmake sure to first remove the Bundle for ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults")," from the cluster.\nDo this by committing those changes to the repository holding\nthe Fleet configuration and then waiting until it's applied.\nThen remove ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," in the same way,\nand lastly, remove ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-crds"),"."),(0,a.kt)("p",null,"Another option is to add 2 GitRepos, one for the CRDs only,\nand another for the rest of the Kubewarden charts.\nThis lets you remove the Kubewarden charts first and the Kubewarden CRDs last."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"For an example of Fleet bundle definitions see\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/fleet-example"},"github.com/kubewarden/fleet-example"),"."))}u.isMDXComponent=!0}}]);