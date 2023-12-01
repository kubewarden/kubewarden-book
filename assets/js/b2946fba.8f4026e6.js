"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const r={sidebar_label:"Limitations",title:"Audit Scanner - Limitations",description:"The limitation of the audit scanner",keywords:["kubewarden","kubernetes","audit scanner"]},o=void 0,s={unversionedId:"explanations/audit-scanner/limitations",id:"version-1.8/explanations/audit-scanner/limitations",title:"Audit Scanner - Limitations",description:"The limitation of the audit scanner",source:"@site/versioned_docs/version-1.8/explanations/audit-scanner/limitations.md",sourceDirName:"explanations/audit-scanner",slug:"/explanations/audit-scanner/limitations",permalink:"/1.8/explanations/audit-scanner/limitations",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/explanations/audit-scanner/limitations.md",tags:[],version:"1.8",lastUpdatedAt:1701438722,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{sidebar_label:"Limitations",title:"Audit Scanner - Limitations",description:"The limitation of the audit scanner",keywords:["kubewarden","kubernetes","audit scanner"]},sidebar:"docs",previous:{title:"What is the Audit Scanner?",permalink:"/1.8/explanations/audit-scanner/"},next:{title:"Policy Reports",permalink:"/1.8/explanations/audit-scanner/policy-reports"}},l={},c=[{value:"Supported event types",id:"supported-event-types",level:2},{value:"Policies relying on user and user group information",id:"policies-relying-on-user-and-user-group-information",level:2},{value:"Policies relying on external data",id:"policies-relying-on-external-data",level:2},{value:"Usage of <code>*</code> by policies",id:"usage-of--by-policies",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"supported-event-types"},"Supported event types"),(0,a.kt)("p",null,"Policies can inspect ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," events."),(0,a.kt)("p",null,"The audit scanner can not simulate ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE")," events,\nas it doesn't know which part of the resource need to be changed."),(0,a.kt)("p",null,"So, a policy concerned only with ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE")," events is ignored by the audit scanner."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The audit-scanner v1.7.0 release supports only ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," events.\n",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," events will be handled in the near future.")),(0,a.kt)("h2",{id:"policies-relying-on-user-and-user-group-information"},"Policies relying on user and user group information"),(0,a.kt)("p",null,"Each Kubernetes admission request object has information about which user (or ServiceAccount) initiated the event,\nand to which group they belong."),(0,a.kt)("p",null,"All the events simulated by the audit scanner are originated by the same hard coded user and group.\nBecause of that, policies that rely on these values to make their decisions will not produce meaningful results."),(0,a.kt)("p",null,"For these cases, the policy should be configured to be skipped from the audit checks."),(0,a.kt)("h2",{id:"policies-relying-on-external-data"},"Policies relying on external data"),(0,a.kt)("p",null,"Policies can request and use external data when performing an evaluation.\nThese policies can be evaluated by the audit checks,\nbut their outcomes can change depending on the external data."),(0,a.kt)("h2",{id:"usage-of--by-policies"},"Usage of ",(0,a.kt)("inlineCode",{parentName:"h2"},"*")," by policies"),(0,a.kt)("p",null,"Both the ",(0,a.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," custom resources have the following fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["pods"]\n      operations:\n        - CREATE\n        - UPDATE\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"apiGroups"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," attributes can use the wildcard ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),".\nThis wildcard symbol causes the policy to match all the values used in the field.\nThe audit scanner ignores policies that make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," symbol."))}d.isMDXComponent=!0}}]);