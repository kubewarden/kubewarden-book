"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Create a New Policy",title:""},i="Creating a new validation policy",l={unversionedId:"writing-policies/go/scaffold",id:"version-1.8/writing-policies/go/scaffold",title:"",description:"We are going to create a policy that validates the labels of Pod",source:"@site/versioned_docs/version-1.8/writing-policies/go/02-scaffold.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/scaffold",permalink:"/writing-policies/go/scaffold",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/go/02-scaffold.md",tags:[],version:"1.8",lastUpdatedAt:1697557879,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Create a New Policy",title:""},sidebar:"docs",previous:{title:"Introduction to Go",permalink:"/writing-policies/go/intro-go"},next:{title:"Define Policy Settings",permalink:"/writing-policies/go/policy-settings"}},s={},c=[{value:"Scaffolding new policy project",id:"scaffolding-new-policy-project",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-new-validation-policy"},"Creating a new validation policy"),(0,r.kt)("p",null,"We are going to create a policy that validates the labels of Pod\nobjects."),(0,r.kt)("p",null,"The policy will reject all the Pods that use one or more labels on the deny list.\nThe policy will also validate certain labels using a regular expression\nprovided by the user."),(0,r.kt)("p",null,"To summarize, the policy settings will look like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# List of labels that cannot be used\ndenied_labels:\n- foo\n- bar\n\n# Labels that are validated with user-defined regular expressions\nconstrained_labels:\n  priority: "[123]"\n  cost-center: "^cc-\\d+"\n')),(0,r.kt)("p",null,"The policy would reject the creation of this Pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    foo: hello world\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n")),(0,r.kt)("p",null,"The policy would also reject the creation of this Pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    cost-center: cc-marketing\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n")),(0,r.kt)("p",null,"Policy's settings can also be used to force certain labels to be specified,\nregardless of their contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Policy's settings\n\nconstrained_labels:\n  mandatory-label: \".*\" # <- this label must be present, we don't care about its value\n")),(0,r.kt)("h2",{id:"scaffolding-new-policy-project"},"Scaffolding new policy project"),(0,r.kt)("p",null,"The creation of a new policy project can be done by using this GitHub\ntemplate repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/go-policy-template"},"kubewarden/go-policy-template"),'.\nJust press the "Use  this template" green button near the top of the page\nand follow GitHub\'s wizard.'),(0,r.kt)("p",null,"Clone the repository locally and then ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," directive inside\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"go.mod")," file looks like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go-mod"},"module <path to your repository>\n")))}u.isMDXComponent=!0}}]);