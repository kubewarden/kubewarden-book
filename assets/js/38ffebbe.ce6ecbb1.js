"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Writing validation logic",title:"Writing validation logic",description:"Writing validation logic in Rust for a Kubewarden policy",keywords:["kubewarden","kubernetes","policy","writing","rust","validation logic"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","validation-logic"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust"]},o=void 0,s={unversionedId:"writing-policies/rust/write-validation-logic",id:"writing-policies/rust/write-validation-logic",title:"Writing validation logic",description:"Writing validation logic in Rust for a Kubewarden policy",source:"@site/docs/writing-policies/rust/04-write-validation-logic.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/write-validation-logic",permalink:"/next/writing-policies/rust/write-validation-logic",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rust/04-write-validation-logic.md",tags:[],version:"current",lastUpdatedAt:1701438722,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Writing validation logic",title:"Writing validation logic",description:"Writing validation logic in Rust for a Kubewarden policy",keywords:["kubewarden","kubernetes","policy","writing","rust","validation logic"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","validation-logic"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust"]},sidebar:"docs",previous:{title:"Defining policy settings",permalink:"/next/writing-policies/rust/define-policy-settings"},next:{title:"Creating a new mutation policy",permalink:"/next/writing-policies/rust/mutation-policy"}},l={},d=[{value:"Unit tests",id:"unit-tests",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's time to write the actual validation code.\nIt's defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," file.\nIn this file you can find a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"validate"),"."),(0,a.kt)("p",null,"This is the scaffolding provided function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},'fn validate(payload: &[u8]) -> CallResult {\n    // highlight-next-line\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    info!(LOG_DRAIN, "starting validation");\n    if validation_request.request.kind.kind != apicore::Pod::KIND {\n        warn!(LOG_DRAIN, "Policy validates Pods only. Accepting resource"; "kind" => &validation_request.request.kind.kind);\n        return kubewarden::accept_request();\n    }\n    // TODO: you can unmarshal any Kubernetes API type you are interested in\n    // highlight-next-line\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            // TODO: your logic goes here\n            // highlight-next-line\n            if pod.metadata.name == Some("invalid-pod-name".to_string()) {\n                let pod_name = pod.metadata.name.unwrap();\n                info!(\n                    LOG_DRAIN,\n                    "rejecting pod";\n                    "pod_name" => &pod_name\n                );\n                kubewarden::reject_request(\n                    Some(format!("pod name {} is not accepted", &pod_name)),\n                    None,\n                    None,\n                    None,\n                )\n            } else {\n                info!(LOG_DRAIN, "accepting resource");\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // TODO: handle as you wish\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            warn!(LOG_DRAIN, "cannot unmarshal resource: this policy does not know how to evaluate this resource; accept it");\n            // highlight-next-line\n            kubewarden::accept_request()\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Walking through the code listing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In line 2. Parse the incoming ",(0,a.kt)("inlineCode",{parentName:"li"},"payload")," into a ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidationRequest<Setting>")," object.\nThis automatically populates the ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," instance inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidationRequest")," with the parameters provided by the user."),(0,a.kt)("li",{parentName:"ul"},"In line 10. Convert the Kubernetes raw JSON object embedded into the request into an instance of the\n",(0,a.kt)("a",{parentName:"li",href:"https://arnavion.github.io/k8s-openapi/v0.11.x/k8s_openapi/api/core/v1/struct.Pod.html"},"Pod struct")),(0,a.kt)("li",{parentName:"ul"},"In line 13. The request has a Pod object, the code approves only the requests that don't have ",(0,a.kt)("inlineCode",{parentName:"li"},"metadata.name")," equal to the hard-coded value ",(0,a.kt)("inlineCode",{parentName:"li"},"invalid-pod-name")),(0,a.kt)("li",{parentName:"ul"},"In line 36. The request doesn't contain a Pod object, hence the policy accepts the request.")),(0,a.kt)("p",null,"As you can see, the code is already doing a validation that resembles the one you want to implement.\nYou just have to remove the hard-coded value and use the values provided by the user via the policy settings."),(0,a.kt)("p",null,"You can do by replacing the scaffolding ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," function, in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),", with this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn validate(payload: &[u8]) -> CallResult {\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    info!(LOG_DRAIN, "starting validation");\n    if validation_request.request.kind.kind != apicore::Pod::KIND {\n        warn!(LOG_DRAIN, "Policy validates Pods only. Accepting resource"; "kind" => &validation_request.request.kind.kind);\n        return kubewarden::accept_request();\n    }\n\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            let pod_name = pod.metadata.name.unwrap_or_default();\n            if validation_request\n                .settings\n                .invalid_names\n                .contains(&pod_name)\n            {\n                kubewarden::reject_request(\n                    Some(format!("pod name {:?} is not accepted", pod_name)),\n                    None,\n                    None,\n                    None,\n                )\n            } else {\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            kubewarden::accept_request()\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,a.kt)("p",null,"Finally, you can create unit tests to check the validation code works as\nexpected."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lib.rs")," file already has tests defined at the bottom of the file, and as\nyou can see, Kubewarden's Rust SDK provides test helpers too."),(0,a.kt)("p",null,"Moreover, the scaffold project already ships with default\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test_fixture#Software"},"test fixtures")," in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"test_data")," directory. You are going to use of these recorded\nadmission requests to write your unit tests."),(0,a.kt)("p",null,"Change the contents of the test section at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," to look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use super::*;\n\n    use kubewarden_policy_sdk::test::Testcase;\n    use std::collections::HashSet;\n\n    #[test]\n    fn accept_pod_with_valid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("bad_name1"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with valid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn reject_pod_with_invalid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("nginx"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with invalid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: false,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn accept_request_with_non_pod_resource() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("prod"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/ingress_creation.json";\n        let tc = Testcase {\n            name: String::from("Ingress creation"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n}\n')),(0,a.kt)("p",null,"You now have three unit tests defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"lib.rs"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accept_pod_with_valid_name"),": accepts a Pod with a valid name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reject_pod_with_invalid_name"),": rejects a Pod with an invalid name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accept_request_with_non_pod_resource"),": accept requests that don't have a ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod")," as an object")),(0,a.kt)("p",null,"You can run the unit tests again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo test\n   Compiling demo v0.1.0 (/home/flavio/hacking/kubernetes/kubewarden/demo)\n    Finished test [unoptimized + debuginfo] target(s) in 3.45s\n     Running target/debug/deps/demo-24670dd6a538fd72\n\nrunning 5 tests\ntest settings::tests::accept_settings_with_a_list_of_invalid_names ... ok\ntest settings::tests::reject_settings_without_a_list_of_invalid_names ... ok\ntest tests::accept_request_with_non_pod_resource ... ok\ntest tests::accept_pod_with_valid_name ... ok\ntest tests::reject_pod_with_invalid_name ... ok\n\ntest result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")),(0,a.kt)("p",null,"That's all that's required if you need to write a simple validating policy."))}p.isMDXComponent=!0}}]);