"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Policy Reports",title:"Audit Scanner - Policy Reports",description:"The policy reports that the Audit Scanner produces.",keywords:["kubewarden","kubernetes","audit scanner"]},i=void 0,s={unversionedId:"explanations/audit-scanner/policy-reports",id:"version-1.7/explanations/audit-scanner/policy-reports",title:"Audit Scanner - Policy Reports",description:"The policy reports that the Audit Scanner produces.",source:"@site/versioned_docs/version-1.7/explanations/audit-scanner/policy-reports.md",sourceDirName:"explanations/audit-scanner",slug:"/explanations/audit-scanner/policy-reports",permalink:"/1.7/explanations/audit-scanner/policy-reports",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/explanations/audit-scanner/policy-reports.md",tags:[],version:"1.7",lastUpdatedAt:1697557879,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{sidebar_label:"Policy Reports",title:"Audit Scanner - Policy Reports",description:"The policy reports that the Audit Scanner produces.",keywords:["kubewarden","kubernetes","audit scanner"]},sidebar:"docs",previous:{title:"Limitations",permalink:"/1.7/explanations/audit-scanner/limitations"},next:{title:"PSP migration",permalink:"/1.7/tasksDir/psp-migration"}},p={},l=[{value:"Policy Reporter UI",id:"policy-reporter-ui",level:2},{value:"Cluster-Wide Audit Results example",id:"cluster-wide-audit-results-example",level:2},{value:"Namespace-Specific Audit Results example",id:"namespace-specific-audit-results-example",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When using the Kubewarden Audit Scanner, the results of the policy scans are stored using the\n",(0,a.kt)("a",{parentName:"p",href:"https://htmlpreview.github.io/?https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/045372e558b896695b2daae92e8c7a04d4d40282/policy-report/docs/index.html"},"PolicyReport"),"\nCustom Resource."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The PolicyReport CRDs are under development in the ",(0,a.kt)("inlineCode",{parentName:"p"},"wg-policy")," Kubernetes group.\nTherefore, this documentation will become out of date if a new version of the CRDs is released."),(0,a.kt)("p",{parentName:"admonition"},"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"wg-policy")," group\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/wg-policy-prototypes"},"repository"),"\nfor more information about the CRDs.")),(0,a.kt)("p",null,"These CRDs offer a structured way to store and manage the audit results."),(0,a.kt)("p",null,"Each namespace scanned by the audit scanner has a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"PolicyReport")," resource defined in it."),(0,a.kt)("p",null,"The results of Cluster wide resources are found in a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterPolicyReport")," object.\nThere will be only one ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterPolicyReport")," per cluster."),(0,a.kt)("p",null,"The audit results generated by the scanner include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the policy that was evaluated"),(0,a.kt)("li",{parentName:"ul"},"the resource being scanned"),(0,a.kt)("li",{parentName:"ul"},"the result of the evaluation (pass, fail, or skip)"),(0,a.kt)("li",{parentName:"ul"},"a timestamp indicating when the evaluation took place.")),(0,a.kt)("p",null,"You can also define severity and category annotations for your policies."),(0,a.kt)("p",null,"Operators can access the reports via ordinary ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," commands.\nThey can also use the optional UI provided by the\n",(0,a.kt)("a",{parentName:"p",href:"https://kyverno.github.io/policy-reporter"},"policy-reporter"),"\nopen source project for monitoring and observability of the PolicyReport CRDs."),(0,a.kt)("h2",{id:"policy-reporter-ui"},"Policy Reporter UI"),(0,a.kt)("p",null,"The Policy Reporter is shipped as a subchart of ",(0,a.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),".\nRefer to the ",(0,a.kt)("a",{parentName:"p",href:"../../howtos/audit-scanner"},"Audit Scanner Installation"),"\npage for more information."),(0,a.kt)("p",null,"The Policy Reporter UI provides a dashboard showcasing all violations\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"PolicyReports")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterPolicyReport"),".\nThis is shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Policy Reporter dashboard example",src:n(2264).Z,width:"2543",height:"1327"})),(0,a.kt)("p",null,"As shown below,\nit also provides a tab for PolicyReports, and a tab for ClusterPolicyReports, with expanded information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Policy Reporter PolicyReports example",src:n(4754).Z,width:"1920",height:"1858"})),(0,a.kt)("p",null,"Other features of Policy Reporter include forwarding of results to different clients\n(like Grafana Loki, Elasticsearch, chat applications),\nmetrics endpoints, and so on.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://kyverno.github.io/policy-reporter"},"policy-reporter's community docs"),"\nfor more information."),(0,a.kt)("h2",{id:"cluster-wide-audit-results-example"},"Cluster-Wide Audit Results example"),(0,a.kt)("p",null,"In the next example, the audit scanner has evaluated the ",(0,a.kt)("inlineCode",{parentName:"p"},"cap-testing-cap-policy")," on many namespaces in the cluster.\nThe results indicate that all the namespaces passed the policy validation.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," section summarizes the audit results, showing there were no errors, failures, or warnings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: wgpolicyk8s.io/v1beta1\nkind: ClusterPolicyReport\nmetadata:\n  creationTimestamp: "2023-07-10T19:25:40Z"\n  generation: 1\n  labels:\n    app.kubernetes.io/managed-by: kubewarden\n  ...\nresults:\n- policy: cap-testing-cap-policy\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: v1\n    kind: Namespace\n    name: kube-system\n    ...\n  result: pass\n  rule: testing-cap-policy\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017140\n- policy: cap-testing-cap-policy\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: v1\n    kind: Namespace\n    name: default\n    ...\n  result: pass\n  rule: testing-cap-policy\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017140\n...\nsummary:\n  error: 0\n  fail: 0\n  pass: 6\n  skip: 0\n  warn: 0\n')),(0,a.kt)("h2",{id:"namespace-specific-audit-results-example"},"Namespace-Specific Audit Results example"),(0,a.kt)("p",null,"In this example, the audit scanner evaluated many policies on resources within the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace.\nThe results indicate that certain resources failed the validation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"cap-no-privilege-escalation")," policy.\nOthers passed the validation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"cap-do-not-run-as-root")," policy.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," section shows the number of failures and passes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: wgpolicyk8s.io/v1beta1\nkind: PolicyReport\nmetadata:\n  creationTimestamp: "2023-07-10T19:28:05Z"\n  generation: 4\n  labels:\n    app.kubernetes.io/managed-by: kubewarden\n  ...\nresults:\n- message: one of the containers has privilege escalation enabled\n  policy: cap-no-privilege-escalation\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: nginx-deployment\n    namespace: default\n    ...\n  result: fail\n  rule: no-privilege-escalation\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017383\n- policy: cap-do-not-run-as-root\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: nginx-deployment\n    namespace: default\n    ...\n  result: pass\n  rule: do-not-run-as-root\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017383\n...\nsummary:\n  error: 0\n  fail: 8\n  pass: 10\n  skip: 0\n  warn: 0\n')))}d.isMDXComponent=!0},2264:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy-reporter_dashboard-0af5059c4248e2759e0b61e48bdd2cff.png"},4754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy-reporter_policyreports-d21235dcb3f5dd2d4731703f79239d9b.png"}}]);