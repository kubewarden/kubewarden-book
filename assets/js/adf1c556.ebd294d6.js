"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1778],{90407:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"writing-policies/spec/host-capabilities/signature-verifier-policies","title":"","description":"Kubewarden implements support for the Sigstore","source":"@site/versioned_docs/version-1.7/writing-policies/spec/host-capabilities/02-signature-verifier-policies.md","sourceDirName":"writing-policies/spec/host-capabilities","slug":"/writing-policies/spec/host-capabilities/signature-verifier-policies","permalink":"/1.7/writing-policies/spec/host-capabilities/signature-verifier-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/spec/host-capabilities/02-signature-verifier-policies.md","tags":[],"version":"1.7","lastUpdatedAt":1736332232000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Signature Verifier Policies","title":""},"sidebar":"docs","previous":{"title":"Host Capabilities Specification","permalink":"/1.7/writing-policies/spec/host-capabilities/intro-host-capabilities"},"next":{"title":"Container Registry Capabilities","permalink":"/1.7/writing-policies/spec/host-capabilities/container-registry"}}');var s=i(74848),r=i(28453);const a={sidebar_label:"Signature Verifier Policies",title:""},o="Signature verifier policies",c={},d=[{value:"A concrete example",id:"a-concrete-example",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"signature-verifier-policies",children:"Signature verifier policies"})}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden implements support for the ",(0,s.jsx)(n.a,{href:"https://www.sigstore.dev/",children:"Sigstore"}),"\nproject. This allows to implement a Secure Supply Chain for your cluster."]}),"\n",(0,s.jsxs)(n.p,{children:["Part of that is to ensure that all container images running in the cluster are\nsigned and verified, proving that they come from their stated authors, and\nhaven't been tampered with. For further reading, do check out the docs on\n",(0,s.jsx)(n.a,{href:"/1.7/distributing-policies/secure-supply-chain",children:"how we implement a Secure Supply Chain for the policies themselves"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Sigstore signatures are stored inside of container registries, next to the OCI\nobject being signed; be it a container image or a more generic OCI artifact,\nlike a Kubewarden policy. Given an object to be signed, all its signatures are\ngoing to be stored as layers of a special OCI object created by sigstore.\nPolicies that want to check Sigstore signatures of containers need then to check\nthose layers, and would need to pull the signature layers to see the\nsignatures themselves."}),"\n",(0,s.jsxs)(n.p,{children:["Obtaining and operating with those OCI layers needs to happen outside of the\nWebAssembly guest (the policy). Hence this is done by the WebAssembly runtime:\nKubewarden's ",(0,s.jsx)(n.code,{children:"policy-server"})," or ",(0,s.jsx)(n.code,{children:"kwctl"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The different language SDKs for Kubewarden policies take care of all that, and\nprovide functions for verification of container image, Kubewarden policies, Helm\ncharts and generally speaking any kind of OCI artifact. This ensures a safe and\ntested codepath for verification. In addition, pulling data from a registry and\ncryptographically verifying signatures can be time and computationally\nexpensive, so the WebAssembly runtime (PolicyServer, ",(0,s.jsx)(n.code,{children:"kwctl"}),") ensures both\nsignature pulls and verification computations are cached. The cached entries\nare automatically expired after 60 seconds to prevent stale data from being\nserved."]}),"\n",(0,s.jsx)(n.p,{children:"The SDKs provide functions similar to the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"verify_pub_keys_image(\n    image_url: string,\n    vector_of_pub_keys: vector<string>,\n    vector_of_sigstore_annotations: Vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"verify_keyless_exact_match(\n    image_url: string,\n    vector_of_tuples_issuer_and_subject: vector<(issuer, subject: string)>,\n    vector_of_sigstore_annotations: vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Both functions verify that the image is signed and satisfy the passed\nconstraints."}),"\n",(0,s.jsx)(n.p,{children:"Note well: on success, the functions return the digest of the verified image. It\nis now on the policy to ensure that containers are instantiated from that\ndigest, and not from tag that may or may not match that checksum digest (and\ntherefore be compromised)."}),"\n",(0,s.jsx)(n.h2,{id:"a-concrete-example",children:"A concrete example"}),"\n",(0,s.jsxs)(n.p,{children:["The Kubewarden team ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/verify-image-signatures",children:"provides a verifier policy"}),"\nthat enforces Sigstore signatures for all containers, built on Rust and with the\nRust SDK. The policy ensures that the containers are signed, and optionally,\nmutates the requests appending the exact verified checksum to the tag of the\nimage. Check its docs for specifics."]}),"\n",(0,s.jsx)(n.p,{children:"This policy may cover all your needs, but in case you would prefer a different\nUX, of course you can build on top of it or any of the other SDKs."}),"\n",(0,s.jsx)(n.h1,{id:"wapc-protocol-contract",children:"WaPC protocol contract"}),"\n",(0,s.jsx)(n.p,{children:"In case you are implementing your own language SDK, these are the functions a\npolicy that verifies signatures can use:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:" waPC function name "}),(0,s.jsx)("th",{children:" Input payload "}),(0,s.jsx)("th",{children:" Output payload "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstorePubKeyVerify",\n\n  # **mandatory**: image URI to verify\n  "image": string,\n  "pub_keys": [\n    # PEM-encoded public keys\n    string\n    ],\n  # optional:\n  "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreKeylessVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless": [\n    # list of (issuer, subject) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # signature subject (mail, CI URL, ...)\n      "subject": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreKeylessPrefixVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless_prefix": [\n    # list of (issuer, url_prefix) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # URL Prefix of subject (CI URL, ...)\n      "url_prefix": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreGithubActionsVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # GitHub owner\n  "owner": string,\n  # optional:\n  # GitHub repository \n  "repo": string\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreCertificateVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # PEM-encoded certificated used to\n  # verify the signature.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate": [byte(int), ..., byte(int)],\n  # Optional - certificate chain used to\n  # verify the provided certificate.\n  # When not specified, the certificate\n  # is assumed to be trusted.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate_chain": [\n    [byte(int), ..., byte(int)],\n    ...\n    [byte(int), ..., byte(int)]\n  ], \n  # Require the signature layer to have\n  # a Rekor bundle.\n  # Having a Rekor bundle allows further\n  # checks to be performed, e.g. ensuring\n  # the signature has been produced during\n  # the validity time frame of the cert.\n  # Recommended to set to `true`\n  require_rekor_bundle: bool,\n  # Optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]})]}),"\n",(0,s.jsx)(n.p,{children:"Marked for deprecation:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:" WaPC function name "}),(0,s.jsx)("td",{children:" Input payload "}),(0,s.jsx)("td",{children:" Output payload "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v1/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  "SigstorePubKeyVerify": {\n    # **mandatory**: image URI to verify\n    "image": string,\n    "pub_keys": [\n      # PEM-encoded public keys\n      string\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v1/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  "SigstoreKeylessVerify": {\n    # mandatory: image URI to verify\n    "image": string,\n    "keyless": [\n      # list of (issuer, subject) tuples\n      {\n        # OIDC issuer\n        "issuer": string,\n        # signature subject (mail, CI URL, ...)\n        "subject": string\n      }\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);