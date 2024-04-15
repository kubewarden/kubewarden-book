"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[25429],{12647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(85893),s=n(11151);const a={sidebar_label:"Validate doing JSON queries",title:""},o="Validate by doing JSON queries",r={id:"writing-policies/go/validation-with-queries",title:"",description:"In the previous section, we have shown how to write a validation policy",source:"@site/versioned_docs/version-1.7/writing-policies/go/09-validation-with-queries.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/validation-with-queries",permalink:"/1.7/writing-policies/go/validation-with-queries",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/09-validation-with-queries.md",tags:[],version:"1.7",lastUpdatedAt:1713186334e3,sidebarPosition:9,frontMatter:{sidebar_label:"Validate doing JSON queries",title:""},sidebar:"docs",previous:{title:"Distributing Policy",permalink:"/1.7/writing-policies/go/distribute"},next:{title:"Introduction to Rego",permalink:"/1.7/writing-policies/rego/intro-rego"}},l={},d=[{value:"The <code>validate</code> function",id:"the-validate-function",level:2},{value:"Testing the validation code",id:"testing-the-validation-code",level:2},{value:"End to end tests",id:"end-to-end-tests",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"validate-by-doing-json-queries",children:"Validate by doing JSON queries"}),"\n",(0,i.jsxs)(t.p,{children:["In the previous section, we have shown how to write a ",(0,i.jsx)(t.a,{href:"validation",children:"validation policy"}),"\npolicy by using Go types that describe Kubernetes objects."]}),"\n",(0,i.jsx)(t.p,{children:"There is however another way to write validation logic: by extracting the\nrelevant data from the JSON document using ad-hoc queries."}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.em,{children:'"jq-like"'})," approach can be pretty handy when the policy has to look\ndeep inside a Kubernetes object. This is especially helpful when dealing with\ninner objects that are optional."]}),"\n",(0,i.jsx)(t.p,{children:"This section of the document reimplements the previous code by doing JSON queries\ninstead of unmarshaling the JSON payload into native Go types."}),"\n",(0,i.jsxs)(t.h2,{id:"the-validate-function",children:["The ",(0,i.jsx)(t.code,{children:"validate"})," function"]}),"\n",(0,i.jsxs)(t.p,{children:["We will use the policy we just created and change its ",(0,i.jsx)(t.code,{children:"validate"})," function to not\nuse the Go types that define Kubernetes objects."]}),"\n",(0,i.jsxs)(t.p,{children:["We will instead use the ",(0,i.jsx)(t.a,{href:"https://github.com/tidwall/gjson",children:(0,i.jsx)(t.code,{children:"gjson"})})," library to\nextract data from the raw JSON object."]}),"\n",(0,i.jsx)(t.p,{children:"First of all, we have to change the requirement section. This is how the code\nhas to look like:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n    "encoding/json"\n\t"fmt"\n\n\tmapset "github.com/deckarep/golang-set/v2"\n\tkubewarden "github.com/kubewarden/policy-sdk-go"\n\tkubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n\t"github.com/tidwall/gjson"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"The validation function has to be changed to look like that:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n\t// Create a ValidationRequest instance from the incoming payload\n\tvalidationRequest := kubewarden_protocol.ValidationRequest{}\n\terr := json.Unmarshal(payload, &validationRequest)\n\tif err != nil {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(err.Error()),\n\t\t\tkubewarden.Code(400))\n\t}\n\n\t// Create a Settings instance from the ValidationRequest object\n\tsettings, err := NewSettingsFromValidationReq(&validationRequest)\n\tif err != nil {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(err.Error()),\n\t\t\tkubewarden.Code(400))\n\t}\n\n\t// Access the **raw** JSON that describes the object\n\tpodJSON := validationRequest.Request.Object\n\n\t// highlight-next-line\n\t// NOTE 1\n\tdata := gjson.GetBytes(\n\t\tpodJSON,\n\t\t"metadata.labels")\n\n\tvar validationErr error\n\tlabels := mapset.NewThreadUnsafeSet[string]()\n\tdata.ForEach(func(key, value gjson.Result) bool {\n\t\t// highlight-next-line\n\t\t// NOTE 2\n\t\tlabel := key.String()\n\t\tlabels.Add(label)\n\n\t\t// highlight-next-line\n\t\t// NOTE 3\n\t\tvalidationErr = validateLabel(label, value.String(), &settings)\n\n        // keep iterating if there are no errors\n\t\treturn validationErr == nil\n\t})\n\n\t// highlight-next-line\n\t// NOTE 4\n\tif validationErr != nil {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(validationErr.Error()),\n\t\t\tkubewarden.NoCode)\n\t}\n\n\t// highlight-next-line\n\t// NOTE 5\n\tfor requiredLabel := range settings.ConstrainedLabels {\n\t\tif !labels.Contains(requiredLabel) {\n\t\t\treturn kubewarden.RejectRequest(\n\t\t\t\tkubewarden.Message(fmt.Sprintf("Constrained label %s not found inside of Pod", requiredLabel)),\n\t\t\t\tkubewarden.NoCode)\n\t\t}\n\t}\n\n\treturn kubewarden.AcceptRequest()\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The initial part of the ",(0,i.jsx)(t.code,{children:"validate"})," function is similar to the previous one. Things\nstart to change only as soon as we reach the ",(0,i.jsx)(t.code,{children:"NOTE"})," sections.\nLet's get through them:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["We use a ",(0,i.jsx)(t.code,{children:"gjson"})," selector to get the ",(0,i.jsx)(t.code,{children:"label"})," map provided by the object\nembedded into the request"]}),"\n",(0,i.jsxs)(t.li,{children:["We use a ",(0,i.jsx)(t.code,{children:"gjson"})," helper to iterate over the results of the query. If the query\nhas no results the loop will never take place."]}),"\n",(0,i.jsxs)(t.li,{children:["We use the ",(0,i.jsx)(t.code,{children:"validateLabel"})," function to validate the label and its value, like\nwe did before. We're also adding the labels found inside of the Pod to a\n",(0,i.jsx)(t.code,{children:"mapset.Set"})," that we previously defined."]}),"\n",(0,i.jsx)(t.li,{children:"If the validation produced an error, we immediately return with a validation\nrejection reply."}),"\n",(0,i.jsxs)(t.li,{children:["Like before, we iterate over the ",(0,i.jsx)(t.code,{children:"constrainedLabels"})," to make sure all of them\nhave been specified inside of the Pod. The code has been slightly changed\nto make use of the ",(0,i.jsx)(t.code,{children:"mapset.Set"})," object we previously populated."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"testing-the-validation-code",children:"Testing the validation code"}),"\n",(0,i.jsx)(t.p,{children:"The unit tests do not need any change, we can run them like before:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"make test\n"})}),"\n",(0,i.jsx)(t.p,{children:"All of them are working as expected:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\n--- PASS: TestValidateLabel (0.00s)\nPASS\nok  \tgithub.com/kubewarden/go-policy-template\t0.002s\n"})}),"\n",(0,i.jsx)(t.h2,{id:"end-to-end-tests",children:"End to end tests"}),"\n",(0,i.jsx)(t.p,{children:"End to end test need no changes at all. Let's run them to ensure they\nare still green:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"make e2e-tests\n"})}),"\n",(0,i.jsx)(t.p,{children:"This is the output we will get:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"bats e2e.bats\ne2e.bats\n \u2713 accept when no settings are provided\n \u2713 accept because label is satisfying a constraint\n \u2713 accept labels are not on deny list\n \u2713 reject because label is on deny list\n \u2713 reject because label is not satisfying a constraint\n \u2713 reject because constrained label is missing\n \u2713 fail settings validation because of conflicting labels\n \u2713 fail settings validation because of invalid constraint\n\n8 tests, 0 failures\n"})}),"\n",(0,i.jsx)(t.p,{children:"Again, all the tests are working as expected."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);