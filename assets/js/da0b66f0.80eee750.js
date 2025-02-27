"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1742],{36247:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"reference/spec/validating-policies","title":"Validating policies","description":"Validating policies","source":"@site/versioned_docs/version-1.16/reference/spec/03-validating-policies.md","sourceDirName":"reference/spec","slug":"/reference/spec/validating-policies","permalink":"/1.16/reference/spec/validating-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/reference/spec/03-validating-policies.md","tags":[],"version":"1.16","lastUpdatedAt":1740656838000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Validating policies","title":"Validating policies","description":"Validating policies","keywords":["kubewarden","kubernetes","policy specification","policy validation"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","validating-policies"]},"sidebar":"docs","previous":{"title":"Policy settings","permalink":"/1.16/reference/spec/settings"},"next":{"title":"Mutating policies","permalink":"/1.16/reference/spec/mutating-policies"}}');var o=i(74848),t=i(28453);const r={sidebar_label:"Validating policies",title:"Validating policies",description:"Validating policies",keywords:["kubewarden","kubernetes","policy specification","policy validation"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","validating-policies"]},a=void 0,c={},d=[{value:"The <code>ValidationRequest</code> object",id:"the-validationrequest-object",level:2},{value:"An example",id:"an-example",level:2},{value:"The <code>ValidationResponse</code> object",id:"the-validationresponse-object",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:i,Head:s}=n;return i||h("Details",!0),s||h("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/validating-policies"})}),"\n",(0,o.jsx)(n.p,{children:"The Kubewarden policy server receives:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Kubernetes\n",(0,o.jsx)(n.a,{href:"https://godoc.org/k8s.io/api/admission/v1#AdmissionReview",children:(0,o.jsx)(n.code,{children:"AdmissionReview"})}),"\nobjects from the Kubernetes API server.\nIt then forwards the value of its ",(0,o.jsx)(n.code,{children:"request"})," attribute, of type\n",(0,o.jsx)(n.a,{href:"https://godoc.org/k8s.io/api/admission/v1#AdmissionRequest",children:(0,o.jsx)(n.code,{children:"AdmissionRequest"})}),",\nto the policy to be evaluated."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"or:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A JSON ",(0,o.jsx)(n.code,{children:"request"})," attribute containing the free-form request document,\nin case of a raw policy.\nCheck the\n",(0,o.jsx)(n.a,{href:"/1.16/howtos/raw-policies",children:"Raw policies"}),"\nsection for more details."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The policy evaluates the ",(0,o.jsx)(n.code,{children:"request"})," and states whether it should be accepted or not.\nWhen the request is rejected,\nthe policy might provide the explanation message and an error code to be shown to the end user."]}),"\n",(0,o.jsxs)(n.p,{children:["By convention, of the ",(0,o.jsx)(n.code,{children:"policy-server"})," project,\nthe guest has to expose a function named ",(0,o.jsx)(n.code,{children:"validate"}),",\nthrough the waPC guest SDK,\nso that the ",(0,o.jsx)(n.code,{children:"policy-server"})," (waPC host) can invoke it."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"validate"})," function receives a ",(0,o.jsx)(n.code,{children:"ValidationRequest"})," JSON object and returns a ",(0,o.jsx)(n.code,{children:"ValidationResponse"})," JSON object."]}),"\n",(0,o.jsxs)(n.h2,{id:"the-validationrequest-object",children:["The ",(0,o.jsx)(n.code,{children:"ValidationRequest"})," object"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ValidationRequest"})," is a JSON object that is received by the ",(0,o.jsx)(n.code,{children:"validate"})," function.\nIt looks like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'{\n  "request": <AdmissionReview.request data> | <RawReviewRequest.request data>,\n  "settings": {\n    # your policy configuration\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"settings"})," key points to a free-form JSON document holds the policy\nspecific settings.\nThe previous chapter focused on policies and settings."]}),"\n",(0,o.jsx)(n.h2,{id:"an-example",children:"An example"}),"\n",(0,o.jsxs)(n.p,{children:["Given the following Kubernetes ",(0,o.jsx)(n.code,{children:"AdmissionReview"}),":"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsxs)("summary",{children:["Expand to see ",(0,o.jsx)(n.code,{children:"AdmissionReview"})]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    # Random uid uniquely identifying this admission call\n    "uid": "705ab4f5-6393-11e8-b7cc-42010a800002",\n\n    # Fully-qualified group/version/kind of the incoming object\n    "kind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified\n    "resource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    "subResource": "scale",\n\n    # Fully-qualified group/version/kind of the incoming object in the original request to the API server.\n    # This only differs from `kind` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestKind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified in the original request to the API server.\n    # This only differs from `resource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestResource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    # This only differs from `subResource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestSubResource": "scale",\n\n    # Name of the resource being modified\n    "name": "my-deployment",\n    # Namespace of the resource being modified, if the resource is namespaced (or is a Namespace object)\n    "namespace": "my-namespace",\n\n    # operation can be CREATE, UPDATE, DELETE, or CONNECT\n    "operation": "UPDATE",\n\n    "userInfo": {\n      # Username of the authenticated user making the request to the API server\n      "username": "admin",\n      # UID of the authenticated user making the request to the API server\n      "uid": "014fbff9a07c",\n      # Group memberships of the authenticated user making the request to the API server\n      "groups": ["system:authenticated","my-admin-group"],\n      # Arbitrary extra info associated with the user making the request to the API server.\n      # This is populated by the API server authentication layer and should be included\n      # if any SubjectAccessReview checks are performed by the webhook.\n      "extra": {\n        "some-key":["some-value1", "some-value2"]\n      }\n    },\n\n    # object is the new object being admitted.\n    # It is null for DELETE operations.\n    "object": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # oldObject is the existing object.\n    # It is null for CREATE and CONNECT operations.\n    "oldObject": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # options contains the options for the operation being admitted, like meta.k8s.io/v1 CreateOptions, UpdateOptions, or DeleteOptions.\n    # It is null for CONNECT operations.\n    "options": {"apiVersion":"meta.k8s.io/v1","kind":"UpdateOptions",...},\n\n    # dryRun indicates the API request is running in dry run mode and will not be persisted.\n    # Webhooks with side effects should avoid actuating those side effects when dryRun is true.\n    # See http://k8s.io/docs/reference/using-api/api-concepts/#make-a-dry-run-request for more details.\n    "dryRun": false\n  }\n}\n'})})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ValidationRequest"})," object would look like:"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsxs)("summary",{children:["Expand to see the ",(0,o.jsx)(n.code,{children:"ValidationRequest"})]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'{\n  "request": {\n    # Random uid uniquely identifying this admission call\n    "uid": "705ab4f5-6393-11e8-b7cc-42010a800002",\n\n    # Fully-qualified group/version/kind of the incoming object\n    "kind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified\n    "resource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    "subResource": "scale",\n\n    # Fully-qualified group/version/kind of the incoming object in the original request to the API server.\n    # This only differs from `kind` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestKind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified in the original request to the API server.\n    # This only differs from `resource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestResource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    # This only differs from `subResource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestSubResource": "scale",\n\n    # Name of the resource being modified\n    "name": "my-deployment",\n    # Namespace of the resource being modified, if the resource is namespaced (or is a Namespace object)\n    "namespace": "my-namespace",\n\n    # operation can be CREATE, UPDATE, DELETE, or CONNECT\n    "operation": "UPDATE",\n\n    "userInfo": {\n      # Username of the authenticated user making the request to the API server\n      "username": "admin",\n      # UID of the authenticated user making the request to the API server\n      "uid": "014fbff9a07c",\n      # Group memberships of the authenticated user making the request to the API server\n      "groups": ["system:authenticated","my-admin-group"],\n      # Arbitrary extra info associated with the user making the request to the API server.\n      # This is populated by the API server authentication layer and should be included\n      # if any SubjectAccessReview checks are performed by the webhook.\n      "extra": {\n        "some-key":["some-value1", "some-value2"]\n      }\n    },\n\n    # object is the new object being admitted.\n    # It is null for DELETE operations.\n    "object": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # oldObject is the existing object.\n    # It is null for CREATE and CONNECT operations.\n    "oldObject": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # options contains the options for the operation being admitted, like meta.k8s.io/v1 CreateOptions, UpdateOptions, or DeleteOptions.\n    # It is null for CONNECT operations.\n    "options": {"apiVersion":"meta.k8s.io/v1","kind":"UpdateOptions",...},\n\n    # dryRun indicates the API request is running in dry run mode and will not be persisted.\n    # Webhooks with side effects should avoid actuating those side effects when dryRun is true.\n    # See http://k8s.io/docs/reference/using-api/api-concepts/#make-a-dry-run-request for more details.\n    "dryRun": false\n  },\n  "settings": {\n    # policy settings\n  }\n}\n'})})]}),"\n",(0,o.jsxs)(n.h2,{id:"the-validationresponse-object",children:["The ",(0,o.jsx)(n.code,{children:"ValidationResponse"})," object"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"validate"})," function returns the outcome of its validation using a ",(0,o.jsx)(n.code,{children:"ValidationResponse"})," object."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ValidationResponse"})," is structured in the following way:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'{\n  # mandatory\n  "accepted": <boolean>,\n\n  # optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n\n  # optional, ignored if accepted\n  "code": <integer>,\n\n  # optional, used by mutation policies\n  "mutated_object": <string>\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["These ",(0,o.jsx)(n.code,{children:"message"})," and ",(0,o.jsx)(n.code,{children:"code"})," attributes can be specified when the request is not accepted.\nThe ",(0,o.jsx)(n.code,{children:"message"})," is a free-form textual error and ",(0,o.jsx)(n.code,{children:"code"})," represents an HTTP error code."]}),"\n",(0,o.jsxs)(n.p,{children:["If the request is accepted,\nthe ",(0,o.jsx)(n.code,{children:"message"})," and ",(0,o.jsx)(n.code,{children:"code"})," values are ignored by the Kubernetes API server if present."]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"message"})," or ",(0,o.jsx)(n.code,{children:"code"})," are provided,\nand the request is not accepted,\nthen the Kubernetes API server returns this information, as part of the body of the error, to the Kubernetes API client that issued the rejected request."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"mutated_object"})," is an optional field used only by mutating policies.\nThis is the topic of the next chapter."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);