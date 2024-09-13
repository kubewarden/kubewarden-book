"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[78393],{3586:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(85893),s=n(11151);const r={sidebar_label:"Signature verifier policies",title:"Signature verifier policies",description:"Signature verifier policies.",keywords:["kubewarden","kubernetes","policy specification","signature verifier"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","signature-verifier-policies"]},o=void 0,a={id:"reference/spec/host-capabilities/signature-verifier-policies",title:"Signature verifier policies",description:"Signature verifier policies.",source:"@site/versioned_docs/version-1.16/reference/spec/host-capabilities/02-signature-verifier-policies.md",sourceDirName:"reference/spec/host-capabilities",slug:"/reference/spec/host-capabilities/signature-verifier-policies",permalink:"/reference/spec/host-capabilities/signature-verifier-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/reference/spec/host-capabilities/02-signature-verifier-policies.md",tags:[],version:"1.16",lastUpdatedAt:1726223398e3,sidebarPosition:2,frontMatter:{sidebar_label:"Signature verifier policies",title:"Signature verifier policies",description:"Signature verifier policies.",keywords:["kubewarden","kubernetes","policy specification","signature verifier"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","signature-verifier-policies"]},sidebar:"docs",previous:{title:"Host capabilities specification",permalink:"/reference/spec/host-capabilities/intro-host-capabilities"},next:{title:"Container registry capabilities",permalink:"/reference/spec/host-capabilities/container-registry"}},c={},l=[{value:"An example",id:"an-example",level:2},{value:"WaPC protocol contract",id:"wapc-protocol-contract",level:2},{value:"waPC function - <code>v2/verify</code>",id:"wapc-function---v2verify",level:3},{value:"<code>SigstorePubKeyVerify</code> input",id:"sigstorepubkeyverify-input",level:4},{value:"<code>SigstorePubKeyVerify</code> output",id:"sigstorepubkeyverify-output",level:4},{value:"<code>SigstoreKeylessVerify</code> input",id:"sigstorekeylessverify-input",level:4},{value:"<code>SigstoreKeylessVerify</code> output",id:"sigstorekeylessverify-output",level:4},{value:"<code>SigstoreKeylessPrefixVerify</code> input",id:"sigstorekeylessprefixverify-input",level:4},{value:"<code>SigstoreKeylessPrefixVerify</code> output",id:"sigstorekeylessprefixverify-output",level:4},{value:"<code>SigstoreGithubActionsVerify</code> input",id:"sigstoregithubactionsverify-input",level:4},{value:"<code>SigstoreGithubActionsVerify</code> output",id:"sigstoregithubactionsverify-output",level:4},{value:"<code>SigstoreCertificateVerify</code> input",id:"sigstorecertificateverify-input",level:4},{value:"<code>SigstoreCertificateVerify</code> output",id:"sigstorecertificateverify-output",level:4},{value:"waPC function - <code>v1/verify</code>",id:"wapc-function---v1verify",level:3},{value:"<code>SigstorePubKeyVerify</code> input",id:"sigstorepubkeyverify-input-1",level:4},{value:"<code>SigstorePubKeyVerify</code> output",id:"sigstorepubkeyverify-output-1",level:4},{value:"<code>SigstoreKeylessVerify</code> input",id:"sigstorekeylessverify-input-1",level:4},{value:"<code>SigstoreKeylessVerify</code> output",id:"sigstorekeylessverify-output-1",level:4}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/host-capabilities/signature-verifier-policies"})}),"\n",(0,t.jsxs)(i.p,{children:["Kubewarden implements support for the\n",(0,t.jsx)(i.a,{href:"https://www.sigstore.dev/",children:"Sigstore"}),'\nproject.\nThis allows implementing a "Secure Supply Chain" for your cluster.']}),"\n",(0,t.jsxs)(i.p,{children:["Part of the function of the secure supply chain is to ensure that all container images running in the cluster are signed and verified.\nThis proves that they come from their stated authors, with no tampering.\nFor further reading, check the docs on\n",(0,t.jsx)(i.a,{href:"/howtos/secure-supply-chain",children:"how we implement a Secure Supply Chain for the policies themselves"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Sigstore signatures are stored inside of container registries,\nnext to the OCI object being signed.\nThey can be a container image or a more generic OCI artifact,\nlike a Kubewarden policy.\nWhen an object is signed,\nits signatures are stored as layers of an OCI object created by Sigstore.\nPolicies needing to check signatures of containers need to check those layers,\nand need to pull the signature layers to see the signatures themselves."}),"\n",(0,t.jsxs)(i.p,{children:["Obtaining and operating with those OCI layers needs to happen outside the WebAssembly guest (the policy).\nHence, this is done by the WebAssembly runtime,\nKubewarden's ",(0,t.jsx)(i.code,{children:"policy-server"})," or ",(0,t.jsx)(i.code,{children:"kwctl"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"The different language SDKs for Kubewarden policies take care of this.\nThey provide functions for verification of container image,\nKubewarden policies, Helm charts and other kinds of OCI artifact.\nThis ensures a safe and tested code path for verification."}),"\n",(0,t.jsxs)(i.p,{children:["Pulling data from a registry and cryptographically verifying signatures can be time and computationally expensive,\nso the WebAssembly runtime (PolicyServer, ",(0,t.jsx)(i.code,{children:"kwctl"}),") ensures both\nsignature pulls and verification computations are cached.\nThe cached entries are automatically expired after 60 seconds to help prevent stale data from being served."]}),"\n",(0,t.jsx)(i.p,{children:"The SDKs provide functions similar to the following:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",children:"verify_pub_keys_image(\n    image_url: string,\n    vector_of_pub_keys: vector<string>,\n    vector_of_sigstore_annotations: Vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",children:"verify_keyless_exact_match(\n    image_url: string,\n    vector_of_tuples_issuer_and_subject: vector<(issuer, subject: string)>,\n    vector_of_sigstore_annotations: vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Both functions verify that the image is signed and satisfy the constraints."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"On success, the functions return the digest of the verified image.\nIt is now policy responsibility to ensure that containers are instantiated from that digest,\nand not from a tag that may not match that checksum digest (and therefore be compromised)."})}),"\n",(0,t.jsx)(i.h2,{id:"an-example",children:"An example"}),"\n",(0,t.jsxs)(i.p,{children:["The Kubewarden team\n",(0,t.jsx)(i.a,{href:"https://github.com/kubewarden/verify-image-signatures",children:"provides a verifier policy"}),"\nthat enforces Sigstore signatures for all containers.\nIt's built using Rust and with the Rust SDK.\nThe policy ensures that the containers are signed,\nand optionally,\nmutates the requests. The mutation appends the verified checksum to the tag of the image.\nCheck the documentation for specifics."]}),"\n",(0,t.jsx)(i.p,{children:"This policy may cover all your needs, but in case you would prefer a different\nUX, of course you can build on top of it or any of the other SDKs."}),"\n",(0,t.jsx)(i.h2,{id:"wapc-protocol-contract",children:"WaPC protocol contract"}),"\n",(0,t.jsx)(i.p,{children:"In case you are implementing your own language SDK,\nthese are the functions a policy, that verifies signatures, can use:"}),"\n",(0,t.jsxs)(i.h3,{id:"wapc-function---v2verify",children:["waPC function - ",(0,t.jsx)(i.code,{children:"v2/verify"})]}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorepubkeyverify-input",children:[(0,t.jsx)(i.code,{children:"SigstorePubKeyVerify"})," input"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n  type: "SigstorePubKeyVerify",\n\n  # **mandatory**: image URI to verify\n  "image": string,\n  "pub_keys": [\n    # PEM-encoded public keys\n    string\n    ],\n  # optional:\n  "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorepubkeyverify-output",children:[(0,t.jsx)(i.code,{children:"SigstorePubKeyVerify"})," output"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorekeylessverify-input",children:[(0,t.jsx)(i.code,{children:"SigstoreKeylessVerify"})," input"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n  type: "SigstoreKeylessVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless": [\n    # list of (issuer, subject) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # signature subject (mail, CI URL, ...)\n      "subject": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorekeylessverify-output",children:[(0,t.jsx)(i.code,{children:"SigstoreKeylessVerify"})," output"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorekeylessprefixverify-input",children:[(0,t.jsx)(i.code,{children:"SigstoreKeylessPrefixVerify"})," input"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n  type: "SigstoreKeylessPrefixVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless_prefix": [\n    # list of (issuer, url_prefix) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # URL Prefix of subject (CI URL, ...)\n      "url_prefix": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorekeylessprefixverify-output",children:[(0,t.jsx)(i.code,{children:"SigstoreKeylessPrefixVerify"})," output"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstoregithubactionsverify-input",children:[(0,t.jsx)(i.code,{children:"SigstoreGithubActionsVerify"})," input"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n  type: "SigstoreGithubActionsVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # GitHub owner\n  "owner": string,\n  # optional:\n  # GitHub repository\n  "repo": string\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstoregithubactionsverify-output",children:[(0,t.jsx)(i.code,{children:"SigstoreGithubActionsVerify"})," output"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorecertificateverify-input",children:[(0,t.jsx)(i.code,{children:"SigstoreCertificateVerify"})," input"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n  type: "SigstoreCertificateVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # PEM-encoded certificated used to\n  # verify the signature.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate": [byte(int), ..., byte(int)],\n  # Optional - certificate chain used to\n  # verify the provided certificate.\n  # When not specified, the certificate\n  # is assumed to be trusted.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate_chain": [\n    [byte(int), ..., byte(int)],\n    ...\n    [byte(int), ..., byte(int)]\n  ],\n  # Require the signature layer to have\n  # a Rekor bundle.\n  # Having a Rekor bundle allows further\n  # checks to be performed, e.g. ensuring\n  # the signature has been produced during\n  # the validity time frame of the cert.\n  # Recommended to set to `true`\n  require_rekor_bundle: bool,\n  # Optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorecertificateverify-output",children:[(0,t.jsx)(i.code,{children:"SigstoreCertificateVerify"})," output"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})}),"\n",(0,t.jsxs)(i.h3,{id:"wapc-function---v1verify",children:["waPC function - ",(0,t.jsx)(i.code,{children:"v1/verify"})]}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorepubkeyverify-input-1",children:[(0,t.jsx)(i.code,{children:"SigstorePubKeyVerify"})," input"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n  "SigstorePubKeyVerify": {\n    # **mandatory**: image URI to verify\n    "image": string,\n    "pub_keys": [\n      # PEM-encoded public keys\n      string\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorepubkeyverify-output-1",children:[(0,t.jsx)(i.code,{children:"SigstorePubKeyVerify"})," output"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorekeylessverify-input-1",children:[(0,t.jsx)(i.code,{children:"SigstoreKeylessVerify"})," input"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n  "SigstoreKeylessVerify": {\n    # mandatory: image URI to verify\n    "image": string,\n    "keyless": [\n      # list of (issuer, subject) tuples\n      {\n        # OIDC issuer\n        "issuer": string,\n        # signature subject (mail, CI URL, ...)\n        "subject": string\n      }\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'})}),"\n",(0,t.jsxs)(i.h4,{id:"sigstorekeylessverify-output-1",children:[(0,t.jsx)(i.code,{children:"SigstoreKeylessVerify"})," output"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var t=n(67294);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);