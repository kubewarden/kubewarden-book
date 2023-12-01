"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(g,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_label:"Logging",title:""},a="Logging",l={unversionedId:"writing-policies/go/logging",id:"version-1.9/writing-policies/go/logging",title:"",description:"The Go SDK integrates with the onelog project almost out",source:"@site/versioned_docs/version-1.9/writing-policies/go/06-logging.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/logging",permalink:"/writing-policies/go/logging",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/go/06-logging.md",tags:[],version:"1.9",lastUpdatedAt:1701438722,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Logging",title:""},sidebar:"docs",previous:{title:"End-to-end testing",permalink:"/writing-policies/go/e2e-tests"},next:{title:"GitHub Action Integration",permalink:"/writing-policies/go/automate"}},g={},p=[{value:"Initialize logger",id:"initialize-logger",level:2},{value:"Consuming the logger",id:"consuming-the-logger",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging"},"Logging"),(0,o.kt)("p",null,"The Go SDK integrates with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/francoispqt/onelog"},(0,o.kt)("inlineCode",{parentName:"a"},"onelog"))," project almost out\nof the box. The reasons why this library has been chosen are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It works with WebAssembly binaries. Other popular logging solutions cannot even be built to\nWebAssembly.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It provides ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/francoispqt/onelog#benchmarks"},"good performance"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It supports structured logging."))),(0,o.kt)("h2",{id:"initialize-logger"},"Initialize logger"),(0,o.kt)("p",null,"You first have to initialize a logger structure. By performing this initialization in a global\nvariable, you can easily log from the two main policy entry points: ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"validate_settings"),". Let's initialize this structure in our main package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var (\n    logWriter = kubewarden.KubewardenLogWriter{}\n    logger    = onelog.New(\n        &logWriter,\n        onelog.ALL, // shortcut for onelog.DEBUG|onelog.INFO|onelog.WARN|onelog.ERROR|onelog.FATAL\n    )\n)\n")),(0,o.kt)("h2",{id:"consuming-the-logger"},"Consuming the logger"),(0,o.kt)("p",null,"Now, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"logger")," object to log from wherever we need in our policy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func validate(payload []byte) ([]byte, error) {\n    // ...\n    logger.Info("validating request")\n    // ...\n}\n')),(0,o.kt)("p",null,"Let's add some structured logging:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func validate(payload []byte) ([]byte, error) {\n    // ...\n    logger.WarnWithFields("logging something important", func(e onelog.Entry) {\n        e.String("one_field", "a value")\n        e.String("another_field", "another value")\n    })\n    // ...\n}\n')),(0,o.kt)("p",null,"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/francoispqt/onelog?utm_source=godoc"},(0,o.kt)("inlineCode",{parentName:"a"},"onelog"),"\ndocumentation")," for more\ninformation."),(0,o.kt)("p",null,"The logging produced by the policy will be sent to the policy evaluator (",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server"),"\nfor example), and they will log on behalf of the policy using mechanisms that are easily pluggable\nto other components that enable distributed tracing, such as Jaeger."))}u.isMDXComponent=!0}}]);