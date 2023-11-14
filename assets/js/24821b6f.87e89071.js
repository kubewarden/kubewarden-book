"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_label:"Quickstart",title:""},o="Rancher UI Extension",l={unversionedId:"operator-manual/ui-extension/install",id:"version-1.9/operator-manual/ui-extension/install",title:"",description:"This section describes how to install the Kubewarden UI as an extension of Rancher Manager.",source:"@site/versioned_docs/version-1.9/operator-manual/ui-extension/install.md",sourceDirName:"operator-manual/ui-extension",slug:"/operator-manual/ui-extension/install",permalink:"/operator-manual/ui-extension/install",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/operator-manual/ui-extension/install.md",tags:[],version:"1.9",lastUpdatedAt:1699969709,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{sidebar_label:"Quickstart",title:""},sidebar:"docs",previous:{title:"Verification Config",permalink:"/operator-manual/verification-config"},next:{title:"Monitoring",permalink:"/operator-manual/ui-extension/metrics"}},s={},c=[{value:"Install Kubewarden UI Extension",id:"install-kubewarden-ui-extension",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:3},{value:"Post-Installation",id:"post-installation",level:2},{value:"Enabling the default Policy Server and policies",id:"enabling-the-default-policy-server-and-policies",level:3},{value:"Creating Policies",id:"creating-policies",level:3},{value:"Additional Features",id:"additional-features",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rancher-ui-extension"},"Rancher UI Extension"),(0,i.kt)("p",null,"This section describes how to install the Kubewarden UI as an extension of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher Manager"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This requires a running instance of Rancher Manager ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.7.0")," or greater.")),(0,i.kt)("h2",{id:"install-kubewarden-ui-extension"},"Install Kubewarden UI Extension"),(0,i.kt)("p",null,"The Kubewarden UI is installed as a global extension, however, the Kubewarden controller will be installed through the Rancher UI as a cluster scoped resource."),(0,i.kt)("p",null,'Within the Extensions page, click on the "Enable" button and select the option to add the Rancher Extensions Repository, once enabled the "Kubewarden" extension item will appear automatically. Click on this item to install the extension. Once installed, you will then be able to install Kubewarden into your desired Cluster.'),(0,i.kt)("h3",{id:"install-kubewarden"},"Install Kubewarden"),(0,i.kt)("p",null,"Within your cluster a new menu item will appear in the side-menu for Kubewarden, this dashboard page will guide you through the installation process by completing some prerequisites."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'During the "App Install" step of the installation wizard, the "Install Kubewarden" button may remain grayed out. If this is the case, just refresh the page and navigate back to this step. ')),(0,i.kt)("h2",{id:"post-installation"},"Post-Installation"),(0,i.kt)("p",null,"After the installation is complete the dashboard page and side menu will contain new items, namely Policy Servers, Cluster Admission Policies, and Admission Policies. From here you can create Policy Servers and Policies to control behavior within your cluster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Dashboard view")),"\n",(0,i.kt)("img",{alt:"UI Dashboard",src:n(50515).Z,width:"1296",height:"872"})),(0,i.kt)("h3",{id:"enabling-the-default-policy-server-and-policies"},"Enabling the default Policy Server and policies"),(0,i.kt)("p",null,'Within the dashboard page you can follow the "Install Chart" button to install the ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/helm-charts/tree/main/charts/kubewarden-defaults"},(0,i.kt)("inlineCode",{parentName:"a"},"kubewarden-defaults"))," Helm chart, which includes the default Policy Server and a few currated policies."),(0,i.kt)("p",null,"After installing the chart you can view the default Policy Server details with the related policies in a sortable table.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Policy Server detail view")),"\n",(0,i.kt)("img",{alt:"UI PolicyServer Detail",src:n(69614).Z,width:"1297",height:"872"})),(0,i.kt)("h3",{id:"creating-policies"},"Creating Policies"),(0,i.kt)("p",null,'When creating policies you will initially be given a "Custom Policy" option from the Policy Grid. Provide the required information for your policy\'s Name, Module, and Rules.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Creating a custom policy")),"\n",(0,i.kt)("img",{alt:"UI Policy Whitelist",src:n(68170).Z,width:"1064",height:"621"})),(0,i.kt)("p",null,"If you wish to leverage policies from ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?kind=13"},"ArtifactHub")," you will need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacthub.io")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"management.cattle.io.settings/whitelist-domain"),' setting. This allows your Rancher instance to retieve package information from ArtifactHub. Use the "Add ArtifactHub To Whitelist" button to automatically add the domain, the Policy Grid will refresh with the fetched policies.  '),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ArtifactHub whitelist banner")),"\n",(0,i.kt)("img",{alt:"UI Policy Whitelist",src:n(20329).Z,width:"1064",height:"547"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Policy Grid")),"\n",(0,i.kt)("img",{alt:"UI Policy Create",src:n(75379).Z,width:"1044",height:"770"})),(0,i.kt)("h3",{id:"additional-features"},"Additional Features"),(0,i.kt)("p",null,"For installing additional features, follow the instructions in these docs to include ",(0,i.kt)("a",{parentName:"p",href:"/operator-manual/ui-extension/metrics"},"Metrics")," or ",(0,i.kt)("a",{parentName:"p",href:"/operator-manual/ui-extension/tracing"},"Tracing"),"."))}p.isMDXComponent=!0},50515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ui_dashboard-489129d9a23bc2ee68a6599f2b718efc.png"},75379:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ui_policy_create-101744e29dec0f22f4aab58f9fe17eb4.png"},68170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ui_policy_custom-8317c1b00a8abce560225581cfb2756f.png"},20329:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ui_policy_whitelist-66c6307489b7636e59bbbc5348d29d35.png"},69614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ui_policyserver_detail-c8fed6f264fd351f7ca84a0041239bd6.png"}}]);