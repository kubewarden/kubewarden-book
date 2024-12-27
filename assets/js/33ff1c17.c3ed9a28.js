"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[15501],{27621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"writing-policies/wasi/raw-policies","title":"Raw policies","description":"Raw policies are policies that can evaluate arbitrary JSON documents.","source":"@site/versioned_docs/version-1.9/writing-policies/wasi/02-raw-policies.md","sourceDirName":"writing-policies/wasi","slug":"/writing-policies/wasi/raw-policies","permalink":"/1.9/writing-policies/wasi/raw-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/wasi/02-raw-policies.md","tags":[],"version":"1.9","lastUpdatedAt":1735308490000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Raw policies","title":"Raw policies"},"sidebar":"docs","previous":{"title":"Introduction to WASI","permalink":"/1.9/writing-policies/wasi/intro-wasi"},"next":{"title":"Policy metadata","permalink":"/1.9/writing-policies/metadata"}}');var i=n(74848),a=n(28453);const r={sidebar_label:"Raw policies",title:"Raw policies"},o="Writing raw policies",l={},c=[{value:"Examples",id:"examples",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"writing-raw-policies",children:"Writing raw policies"})}),"\n",(0,i.jsxs)(t.p,{children:["Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the ",(0,i.jsx)(t.a,{href:"/1.9/howtos/raw-policies",children:"raw policies"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["Please refer to ",(0,i.jsx)(t.a,{href:"/1.9/writing-policies/wasi/intro-wasi",children:"Introduction to WASI"})," for an overview of the WASI execution mode."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Remember to mark the policy as ",(0,i.jsx)(t.code,{children:"raw"})," by using the ",(0,i.jsx)(t.code,{children:"policyType"})," field in the ",(0,i.jsx)(t.code,{children:"metadata.yml"})," configuration.\nPlease refer to the ",(0,i.jsx)(t.a,{href:"/1.9/writing-policies/metadata",children:"metadata"})," specification for more information."]})}),"\n",(0,i.jsx)(t.h3,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)(t.p,{children:"Let's write a policy that accepts a request in the following format:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "request": {\n    "user": "alice",\n    "action": "delete",\n    "resource": "products"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"and validates that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"user"})," is in the list of valid users"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"action"})," is in the list of valid actions"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"resource"})," is in the list of valid resources"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Start by scaffolding the policy by using the ",(0,i.jsx)(t.a,{href:"https://github.com/kubewarden/go-wasi-policy-template",children:"go WASI policy template"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"First, we need to define the types that represent the payload of the request."}),"\n",(0,i.jsxs)(t.p,{children:["We will declare a custom ",(0,i.jsx)(t.code,{children:"RawValidationRequest"})," type that contains the ",(0,i.jsx)(t.code,{children:"Request"})," and the ",(0,i.jsx)(t.code,{children:"Settings"}),",\ninstead of using the ",(0,i.jsx)(t.code,{children:"ValidationRequest"})," type that is provided by the ",(0,i.jsx)(t.code,{children:"kw_sdk.go"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// RawValidationRequest represents the request that is sent to the validate function by the Policy Server.\ntype RawValidationRequest struct {\n\tRequest Request `json:"request"`\n\t// Raw policies can have settings.\n\tSettings Settings `json:"settings"`\n}\n\n// Request represents the payload of the request.\ntype Request struct {\n\tUser     string `json:"user"`\n\tAction   string `json:"action"`\n\tResource string `json:"resource"`\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Then we need to define the ",(0,i.jsx)(t.code,{children:"Settings"})," type and the ",(0,i.jsx)(t.code,{children:"validateSettings"})," function in the ",(0,i.jsx)(t.code,{children:"settings.go"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Settings represents the settings of the policy.\ntype Settings struct {\n\tValidUsers     []string `json:"validUsers"`\n\tValidActions   []string `json:"validActions"`\n\tValidResources []string `json:"validResources"`\n}\n\nfunc validateSettings(input []byte) []byte {\n\tvar response SettingsValidationResponse\n\n\tsettings := &Settings{}\n\tif err := json.Unmarshal(input, &settings); err != nil {\n\t\tresponse = RejectSettings(Message(fmt.Sprintf("cannot unmarshal settings: %v", err)))\n\t} else {\n\t\tresponse = validateCliSettings(settings)\n\t}\n\n\tresponseBytes, err := json.Marshal(&response)\n\tif err != nil {\n\t\tlog.Fatalf("canno marshal validation response: %v", err)\n\t}\n\treturn responseBytes\n}\n\nfunc validateCliSettings(settings *Settings) SettingsValidationResponse {\n\tif len(settings.ValidUsers) == 0 {\n\t\treturn RejectSettings(Message(\n\t\t\t"At least one valid user must be specified"))\n\t}\n\n\tif len(settings.ValidActions) == 0 {\n\t\treturn RejectSettings(Message(\n\t\t\t"At least one valid action must be specified"))\n\t}\n\n\tif len(settings.ValidResources) == 0 {\n\t\treturn RejectSettings(Message(\n\t\t\t"At least one valid resource must be specified"))\n\t}\n\n\treturn AcceptSettings()\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Finally, we update the validation logic in ",(0,i.jsx)(t.code,{children:"validate.go"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func validate(input []byte) []byte {\n\tvar validationRequest RawValidationRequest\n\tvalidationRequest.Settings = Settings{}\n\tdecoder := json.NewDecoder(strings.NewReader(string(input)))\n\tdecoder.DisallowUnknownFields()\n\terr := decoder.Decode(&validationRequest)\n\tif err != nil {\n\t\treturn marshalValidationResponseOrFail(\n\t\t\tRejectRequest(\n\t\t\t\tMessage(fmt.Sprintf("Error deserializing validation request: %v", err)),\n\t\t\t\tCode(400)))\n\t}\n\n\treturn marshalValidationResponseOrFail(\n\t\tvalidateRequest(validationRequest.Settings, validationRequest.Request))\n}\n\nfunc marshalValidationResponseOrFail(response ValidationResponse) []byte {\n\tresponseBytes, err := json.Marshal(&response)\n\tif err != nil {\n\t\tlog.Fatalf("cannot marshal validation response: %v", err)\n\t}\n\treturn responseBytes\n}\n\nfunc validateRequest(settings Settings, request Request) ValidationResponse {\n\tif slices.Contains(settings.ValidUsers, request.User) &&\n\t\tslices.Contains(settings.ValidActions, request.Action) &&\n\t\tslices.Contains(settings.ValidResources, request.Resource) {\n\t\treturn AcceptRequest()\n\t}\n\n\treturn RejectRequest(\n\t\tMessage("The request cannot be accepted."),\n\t\tCode(403))\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"mutation",children:"Mutation"}),"\n",(0,i.jsxs)(t.p,{children:["Let's modify the previous example to mutate the request instead of rejecting it.\nIn this case, the settings will contain the ",(0,i.jsx)(t.code,{children:"defaultUser"}),", ",(0,i.jsx)(t.code,{children:"defaultAction"})," and ",(0,i.jsx)(t.code,{children:"defaultRequest"})," that will be used to mutate the request if the user, the action or the resource is not valid."]}),"\n",(0,i.jsxs)(t.p,{children:["We need to update the ",(0,i.jsx)(t.code,{children:"Settings"})," type with the new fields:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Settings represents the settings of the policy.\ntype Settings struct {\n    ValidUsers []string `json:"validUsers"`\n    ValidActions []string `json:"validActions"`\n    ValidResources []string `json:"validResources"`\n    DefaultUser string `json:"defaultUser"`\n    DefaultAction string `json:"defaultAction"`\n    DefaultResource string `json:"defaultResource"`\n}\n\nfunc validateCliSettings(settings *Settings) SettingsValidationResponse {\n\tif len(settings.ValidUsers) == 0 {\n\t\treturn RejectSettings(Message(\n\t\t\t"At least one valid user must be specified"))\n\t}\n\n\tif len(settings.ValidActions) == 0 {\n\t\treturn RejectSettings(Message(\n\t\t\t"At least one valid action must be specified"))\n\t}\n\n\tif len(settings.ValidResources) == 0 {\n\t\treturn RejectSettings(Message(\n\t\t\t"At least one valid resource must be specified"))\n\t}\n\n    if settings.DefaultUser == "" {\n        return RejectSettings(Message(\n            "Default user must be specified"))\n    }\n\n    if settings.DefaultAction == "" {\n        return RejectSettings(Message(\n            "Default action must be specified"))\n    }\n\n    if settings.DefaultResource == "" {\n        return RejectSettings(Message(\n            "Default resource must be specified"))\n    }\n\n\treturn AcceptSettings()\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["We also need to update the ",(0,i.jsx)(t.code,{children:"ValidationResponse"})," struct and the ",(0,i.jsx)(t.code,{children:"MutateRequest"})," function in ",(0,i.jsx)(t.code,{children:"kw_sdk.go"}),"\nto remove the Kubernetes-specific types and use our custom types instead:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// ValidationResponse defines the response given when validating a request\ntype ValidationResponse struct {\n\tAccepted bool `json:"accepted"`\n\t// Optional - ignored if accepted\n\tMessage *string `json:"message,omitempty"`\n\t// Optional - ignored if accepted\n\tCode *uint16 `json:"code,omitempty"`\n\t// Optional - used only by mutating policies\n\t// highlight-next-line\n\tMutatedObject *Request `json:"mutated_object,omitempty"`\n}\n\n// MutateRequest accepts the request. The given `mutatedObject` is how\n// the evaluated object must look once accepted\n// highlight-next-line\nfunc MutateRequest(mutatedObject *Request) ValidationResponse {\n\treturn ValidationResponse{\n\t\tAccepted:      true,\n\t\tMutatedObject: mutatedObject,\n\t}\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Now we can update the ",(0,i.jsx)(t.code,{children:"validate"})," function to mutate the request if it is not valid:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func validateRequest(settings Settings, request Request) ValidationResponse {\n\tif slices.Contains(settings.ValidUsers, request.User) &&\n\t\tslices.Contains(settings.ValidActions, request.Action) &&\n\t\tslices.Contains(settings.ValidResources, request.Resource) {\n\t\treturn AcceptRequest()\n\t}\n\n\tif !slices.Contains(settings.ValidUsers, request.User) {\n\t\trequest.User = settings.DefaultUser\n\t}\n\n\tif !slices.Contains(settings.ValidActions, request.Action) {\n\t\trequest.Action = settings.DefaultAction\n\t}\n\n\tif !slices.Contains(settings.ValidResources, request.Resource) {\n\t\trequest.Resource = settings.DefaultResource\n\t}\n\n\treturn MutateRequest(&request)\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);