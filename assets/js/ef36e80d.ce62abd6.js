"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[95262],{83097:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(85893),r=t(11151);const i={sidebar_label:"Kubernetes Capabilities",title:""},o="Kubernetes Capabilities",c={id:"writing-policies/spec/host-capabilities/kubernetes",title:"",description:"Kubewarden context aware policies requires access to resources from the Kubernetes",source:"@site/versioned_docs/version-1.7/writing-policies/spec/host-capabilities/06-kubernetes.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/kubernetes",permalink:"/1.7/writing-policies/spec/host-capabilities/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/spec/host-capabilities/06-kubernetes.md",tags:[],version:"1.7",lastUpdatedAt:1709719232,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:6,frontMatter:{sidebar_label:"Kubernetes Capabilities",title:""},sidebar:"docs",previous:{title:"Cryptographic Capabilities",permalink:"/1.7/writing-policies/spec/host-capabilities/crypto"},next:{title:"OCI registry support",permalink:"/1.7/distributing-policies/oci-registries-support"}},a={},l=[{value:"waPC protocol contract",id:"wapc-protocol-contract",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"kubernetes-capabilities",children:"Kubernetes Capabilities"}),"\n",(0,n.jsx)(s.p,{children:"Kubewarden context aware policies requires access to resources from the Kubernetes\ncluster where they are running on. For that, the Kubewarden SDKs expose functions\nthat use the waPC communication protocol to talk with the host system asking for\ndata about the cluster."}),"\n",(0,n.jsx)(s.h2,{id:"wapc-protocol-contract",children:"waPC protocol contract"}),"\n",(0,n.jsx)(s.p,{children:"Under the hood, the SDKs rely on these functions exposed by\nthe policy host environment:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"list_resources_by_namespace"})," : given a resource type and a namespace, list all the resources of that type that are defined inside of it. This cannot be used to list cluster-wide resources, like ",(0,n.jsx)(s.code,{children:"Namespace"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"list_resources_all"}),": given a resource type, list all the resources of that type that are defined inside the whole cluster. This can be used to list cluster-wide resources, like ",(0,n.jsx)(s.code,{children:"Namespace"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"get_resource"}),":  find the exact resource identified by a the given resource type, given name and an optional namespace identifier."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This guest-host intercommunication is performed using the regular waPC\nhost calling mechanism, and so any guest implementing the waPC\nintercommunication mechanism is able to request this information from\nthe host."}),"\n",(0,n.jsx)(s.p,{children:"waPC has the following function arguments when performing a call from\nthe guest to the host:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Binding"}),"\n",(0,n.jsx)(s.li,{children:"Namespace"}),"\n",(0,n.jsx)(s.li,{children:"Operation"}),"\n",(0,n.jsx)(s.li,{children:"Payload"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"By contract, or convention, policies can retrieve the Kubernetes\ncluster information by calling the host in the following ways:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Binding"}),(0,n.jsx)("th",{children:"Namespace"}),(0,n.jsx)("th",{children:"Operation"}),(0,n.jsx)("th",{children:"Input payload"}),(0,n.jsx)("th",{children:"Output payload (JSON format)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"kubewarden"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"kubernetes"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"list_resources_all"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-hcl",children:'{\n\t# API Group version. Use `v1` for the `core` group and `groupName/groupVersion` for all other groups\n\t"api_version": string,\n\t# Resource kind\n\t"kind": string,\n\t# Label selector to filter the resources\n\t"label_selector": string,\n\t# Field selector to filter the resources\n\t"field_selector": string\n}\n'})})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["Return a Kubernetes ",(0,n.jsx)(s.a,{href:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#types-kinds",children:(0,n.jsx)(s.code,{children:"List"})}),", which is a collection of Kubernetes objects of the same type."]}),(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Use this API function to fetch cluster-wide resources (e.g. namespaces)"})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"kubewarden"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"kubernetes"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"list_resources_by_namespace"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-hcl",children:'{\n\t# API Group version. Use `v1` for the `core` group and `groupName/groupVersion` for all other groups\n\t"api_version": string,\n\t# Resource kind\n\t"kind": string,\n\t# Namespace where the requested resource lives in\n\t"namespace": string,\n\t# Label selector to filter the resources\n\t"label_selector": string,\n\t# Field selector to filter the resources\n\t"field_selector": string\n}\n'})})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["Return a Kubernetes ",(0,n.jsx)(s.a,{href:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#types-kinds",children:(0,n.jsx)(s.code,{children:"List"})}),", which is a collection of Kubernetes objects of the same type."]}),(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:["This API function returns an error when used to fetch cluster-wide resources (e.g. namespaces).\nPlease use the ",(0,n.jsx)(s.code,{children:"list_resources_all"})," when dealing with cluster-wide resources."]})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"kubewarden"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"kubernetes"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"get_resource"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-hcl",children:'{\n\t# API Group version. Use `v1` for the `core` group and `groupName/groupVersion` for all other groups\n\t"api_version": string,\n\t# Singular PascalCase name of the resource\n\t"kind": string,\n\t# Namespace scoping the search\n\t"namespace": string,\n\t# The name of the resource\n\t"name": string,\n\t# Disable caching of results obtained from Kubernetes API Server\n\t"disable_cache": bool\n}\n'})})}),(0,n.jsxs)("td",{children:["Result of ",(0,n.jsx)("code",{children:"GET /apis/$api_version/namespaces/$namespace/$kind/$name "})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>o});var n=t(67294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);