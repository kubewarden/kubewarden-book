"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[23269],{59799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"security/threat-model","title":"","description":"The Kubernetes SIG Security team has","source":"@site/versioned_docs/version-1.7/security/threat-model.md","sourceDirName":"security","slug":"/security/threat-model","permalink":"/1.7/security/threat-model","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/security/threat-model.md","tags":[],"version":"1.7","lastUpdatedAt":1739260546000,"frontMatter":{"sidebar_label":"Threat Model","title":""},"sidebar":"docs","previous":{"title":"OCI registry support","permalink":"/1.7/distributing-policies/oci-registries-support"},"next":{"title":"Metrics Reference Documentation","permalink":"/1.7/operator-manual/telemetry/metrics/reference"}}');var s=n(74848),o=n(28453);const i={sidebar_label:"Threat Model",title:""},a="Threat Model",c={},l=[{value:"Threat 1 - Attacker floods webhook with traffic preventing its operation",id:"threat-1---attacker-floods-webhook-with-traffic-preventing-its-operation",level:2},{value:"Threat 2 - Attacker passes workloads which require complex  processing causing timeouts",id:"threat-2---attacker-passes-workloads-which-require-complex--processing-causing-timeouts",level:2},{value:"Threat 3 - Attacker exploits misconfiguration of webhook to bypass",id:"threat-3---attacker-exploits-misconfiguration-of-webhook-to-bypass",level:2},{value:"Threat 4 - Attacker has rights to delete or modify the k8s webhook  object",id:"threat-4---attacker-has-rights-to-delete-or-modify-the-k8s-webhook--object",level:2},{value:"Threat 5 - Attacker gets access to valid credentials for the webhook",id:"threat-5---attacker-gets-access-to-valid-credentials-for-the-webhook",level:2},{value:"Threat  6 - Attacker gains access to a cluster admin credential",id:"threat--6---attacker-gains-access-to-a-cluster-admin-credential",level:2},{value:"Threat 7 - Attacker sniffs traffic on the container network",id:"threat-7---attacker-sniffs-traffic-on-the-container-network",level:2},{value:"Threat 8 - Attacker carries out a MITM attack on the webhook",id:"threat-8---attacker-carries-out-a-mitm-attack-on-the-webhook",level:2},{value:"Threat 9 - Attacker steals traffic from the webhook via spoofing",id:"threat-9---attacker-steals-traffic-from-the-webhook-via-spoofing",level:2},{value:"Threat 10 - Abusing a mutation rule to create a privileged container",id:"threat-10---abusing-a-mutation-rule-to-create-a-privileged-container",level:2},{value:"Threat 11 - Attacker deploys workloads to namespaces that are  exempt from admission control",id:"threat-11---attacker-deploys-workloads-to-namespaces-that-are--exempt-from-admission-control",level:2},{value:"Threat 12 - Block rule can be bypassed due to missing match (e.g.  missing initcontainers)",id:"threat-12---block-rule-can-be-bypassed-due-to-missing-match-eg--missing-initcontainers",level:2},{value:"Threat 13 - Attacker exploits bad string matching on a blocklist to  bypass rules",id:"threat-13---attacker-exploits-bad-string-matching-on-a-blocklist-to--bypass-rules",level:2},{value:"Threat 14 - Attacker uses new/old features of the Kubernetes API  which have no rules",id:"threat-14---attacker-uses-newold-features-of-the-kubernetes-api--which-have-no-rules",level:2},{value:"Threat 15 - Attacker deploys privileged container to node running  Webhook controller",id:"threat-15---attacker-deploys-privileged-container-to-node-running--webhook-controller",level:2},{value:"Threat 16 - Attacker mounts a privileged node hostpath allowing  modification of Webhook controller configuration",id:"threat-16---attacker-mounts-a-privileged-node-hostpath-allowing--modification-of-webhook-controller-configuration",level:2},{value:"Threat 17 - Attacker has privileged SSH access to cluster node  running admission webhook",id:"threat-17---attacker-has-privileged-ssh-access-to-cluster-node--running-admission-webhook",level:2},{value:"Threat 18 - Attacker uses policies to send confidential data from  admission requests to external systems",id:"threat-18---attacker-uses-policies-to-send-confidential-data-from--admission-requests-to-external-systems",level:2},{value:"Threat Kubewarden 1 - Bootstrapping of trust for admission controller",id:"threat-kubewarden-1---bootstrapping-of-trust-for-admission-controller",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"threat-model",children:"Threat Model"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/kubernetes/community/tree/master/sig-security",children:"Kubernetes SIG Security team"})," has\ndefined an Admission Control Threat Model. The Kubewarden team has evaluated\nKubewarden against this threat model, and strives to provide secure defaults\nthat cover it. Still, it is recommended for Kubewarden administrators to read\nand understand the threat model, and use it to devise their own thread model as\nneeded."]}),"\n",(0,s.jsxs)(t.p,{children:["If more details about each threat is needed, refer to the ",(0,s.jsx)(t.a,{href:"https://github.com/kubernetes/sig-security/tree/main/sig-security-docs/papers/admission-control",children:"original document published by SIG Security"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-1---attacker-floods-webhook-with-traffic-preventing-its-operation",children:"Threat 1 - Attacker floods webhook with traffic preventing its operation"}),"\n",(0,s.jsx)(t.p,{children:"An attacker who has access to the Webhook endpoint, at the network level, could\nsend large quantities of traffic, causing an effective denial of service to the\nadmission controller."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Mitigation"})}),"\n",(0,s.jsx)(t.p,{children:"Webhook fails closed. In other words, if the webhook does not respond in time,\nfor any reason, the API server should reject the request.\nKubewarden default behavior already does that."}),"\n",(0,s.jsx)(t.h2,{id:"threat-2---attacker-passes-workloads-which-require-complex--processing-causing-timeouts",children:"Threat 2 - Attacker passes workloads which require complex  processing causing timeouts"}),"\n",(0,s.jsx)(t.p,{children:"An attacker, who can access the admission controller at a network level, passes\nrequests to the admission controller requiring complex processing and causing\ntimeouts as the admission controller utilizes compute power to process the workloads"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nWebhook fail closed and authenticate callers. Kubewarden default behaviour\nalready does that."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-3---attacker-exploits-misconfiguration-of-webhook-to-bypass",children:"Threat 3 - Attacker exploits misconfiguration of webhook to bypass"}),"\n",(0,s.jsx)(t.p,{children:"An attacker, who has rights to create workloads in the cluster, is able to exploit\na misconfiguration to bypass the intended security control."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nRegular reviews of webhook configuration can help catch issues."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-4---attacker-has-rights-to-delete-or-modify-the-k8s-webhook--object",children:"Threat 4 - Attacker has rights to delete or modify the k8s webhook  object"}),"\n",(0,s.jsx)(t.p,{children:"An attacker who has Kubernetes API access, has sufficient privileges to delete\nthe webhook object in the cluster."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nRBAC rights are strictly controlled."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nMost of RBAC isn't within the scope of the current discussion.\nHowever, the following will be provided in due course for helping Kubewarden\nusers:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Directions around minimum RBAC to be implemented."}),"\n",(0,s.jsx)(t.li,{children:"Provision & documentation of a policy that detects and could potentially block RBAC changes."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"threat-5---attacker-gets-access-to-valid-credentials-for-the-webhook",children:"Threat 5 - Attacker gets access to valid credentials for the webhook"}),"\n",(0,s.jsx)(t.p,{children:"An attacker gains access to valid client credentials for the admission controller webhook"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nWebhook fails closed."]}),"\n",(0,s.jsx)(t.p,{children:"Kubewarden default behaviour is failed closed. Thus, it covers this."}),"\n",(0,s.jsx)(t.p,{children:"(Failing closed means that if, for any reason, Kubewarden stops responding or\ncrashes, the API server will reject the request by default, even if the request\nwould be accepted by Kubewarden in normal situations)"}),"\n",(0,s.jsx)(t.h2,{id:"threat--6---attacker-gains-access-to-a-cluster-admin-credential",children:"Threat  6 - Attacker gains access to a cluster admin credential"}),"\n",(0,s.jsx)(t.p,{children:"An attacker gains access to a cluster-admin level credential in the kubernetes cluster."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nN/A"]}),"\n",(0,s.jsx)(t.h2,{id:"threat-7---attacker-sniffs-traffic-on-the-container-network",children:"Threat 7 - Attacker sniffs traffic on the container network"}),"\n",(0,s.jsx)(t.p,{children:"An attacker who has access to the container network is able to sniff traffic\nbetween the API  server and the admission controller webhook."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nSince the webhook uses TLS encryption for all traffic, Kubewarden is safe."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-8---attacker-carries-out-a-mitm-attack-on-the-webhook",children:"Threat 8 - Attacker carries out a MITM attack on the webhook"}),"\n",(0,s.jsx)(t.p,{children:"An attacker on the container network, who has access to the NET_RAW capability\ncan attempt to use MITM tooling to intercept traffic between the API server\nand admission controller webhook."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nWebhook mTLS authentication is used."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nImplement mutual TLS authentication.\nAdditionally, it would be possible to add a policy within the recommended\npolicies section in the ",(0,s.jsx)(t.code,{children:"kubewarden-defaults"})," which drops the ",(0,s.jsx)(t.code,{children:"NET_RAW"}),"\ncapability."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-9---attacker-steals-traffic-from-the-webhook-via-spoofing",children:"Threat 9 - Attacker steals traffic from the webhook via spoofing"}),"\n",(0,s.jsx)(t.p,{children:"An attacker is able to redirect traffic from the API server which is intended\nfor the admission controller webhook by spoofing."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nWebhook mTLS authentication is used."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nKubewarden should implement mutual TLS authentication"]}),"\n",(0,s.jsx)(t.h2,{id:"threat-10---abusing-a-mutation-rule-to-create-a-privileged-container",children:"Threat 10 - Abusing a mutation rule to create a privileged container"}),"\n",(0,s.jsx)(t.p,{children:"An attacker is able to cause a mutating admission controller to modify a workload,\nsuch that it allows for privileged container creation."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nAll rules are reviewed and tested."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nThe Kubewarden team may come up with some tests to cover the review of these rules in the future.\nIn addition to the above, any change of rules during policies deployment must be carefully reviewed."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-11---attacker-deploys-workloads-to-namespaces-that-are--exempt-from-admission-control",children:"Threat 11 - Attacker deploys workloads to namespaces that are  exempt from admission control"}),"\n",(0,s.jsx)(t.p,{children:"An attacker is able to deploy workloads to Kubernetes namespaces that are exempt\nfrom the admission controller configuration."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nRBAC rights are strictly controlled"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nMost of the RBAC is out of scope with respect to this decision. However, the Kubewarden team aims to:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Warn users via our docs and ",(0,s.jsx)(t.em,{children:"suggest"})," some minimum RBAC to be used."]}),"\n",(0,s.jsxs)(t.li,{children:["Provide a policy which detects RBAC changes and ",(0,s.jsx)(t.strong,{children:"maybe"})," block them."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"threat-12---block-rule-can-be-bypassed-due-to-missing-match-eg--missing-initcontainers",children:"Threat 12 - Block rule can be bypassed due to missing match (e.g.  missing initcontainers)"}),"\n",(0,s.jsx)(t.p,{children:"An attacker created a workload manifest which uses a feature of the Kubernetes\nAPI which is not covered by the admission controller"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nAll rules are reviewed and tested."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nIntroduce tests to cover this rule.\nAs always, carefully review PRs changing the rules in the policies deployment."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-13---attacker-exploits-bad-string-matching-on-a-blocklist-to--bypass-rules",children:"Threat 13 - Attacker exploits bad string matching on a blocklist to  bypass rules"}),"\n",(0,s.jsx)(t.p,{children:"An attacker, who has rights to create workloads, bypasses a rule by exploiting\nbad string matching."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nAll rules are reviewed and tested."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nIntroduce tests to cover this rule.\nAs always, carefully review PRs changing the rules in the policies deployment."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-14---attacker-uses-newold-features-of-the-kubernetes-api--which-have-no-rules",children:"Threat 14 - Attacker uses new/old features of the Kubernetes API  which have no rules"}),"\n",(0,s.jsx)(t.p,{children:"An attacker, with rights to create workloads, uses new features of the Kubernetes\nAPI (for example, a changed API version) to bypass a rule."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nAll rules are reviewed and tested."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nIntroduce tests to cover this rule.\nCreate a configuration to reject requests where the API version not\ncover by the policy by default. Kubewarden should warn policy developers to cover all the\nsupported API version in their tests and reject all others."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-15---attacker-deploys-privileged-container-to-node-running--webhook-controller",children:"Threat 15 - Attacker deploys privileged container to node running  Webhook controller"}),"\n",(0,s.jsx)(t.p,{children:"An attacker, who has rights to deploy privileged containers to the cluster, creates\na privileged container on the cluster node where the admission controller webhook operates."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nAdmission controller uses restrictive policies to prevent privileged workloads."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-16---attacker-mounts-a-privileged-node-hostpath-allowing--modification-of-webhook-controller-configuration",children:"Threat 16 - Attacker mounts a privileged node hostpath allowing  modification of Webhook controller configuration"}),"\n",(0,s.jsx)(t.p,{children:"An attacker, who has rights to deploy hostPath volumes with workloads, creates a\nvolume that allows for access to the admission controller pod\u2019s files."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nAdmission controller uses restrictive policies to prevent privileged  workloads"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"To do"}),"\nAdd a recommended policy in the ",(0,s.jsx)(t.code,{children:"kubewarden-default"})," Helm chart to prevent this."]}),"\n",(0,s.jsx)(t.h2,{id:"threat-17---attacker-has-privileged-ssh-access-to-cluster-node--running-admission-webhook",children:"Threat 17 - Attacker has privileged SSH access to cluster node  running admission webhook"}),"\n",(0,s.jsx)(t.p,{children:"An attacker is able to log into cluster nodes as a privileged user via SSH."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nN/A"]}),"\n",(0,s.jsx)(t.h2,{id:"threat-18---attacker-uses-policies-to-send-confidential-data-from--admission-requests-to-external-systems",children:"Threat 18 - Attacker uses policies to send confidential data from  admission requests to external systems"}),"\n",(0,s.jsx)(t.p,{children:"An attacker is able to configure a policy that listens to admission requests and\nsends sensitive data to an external system."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mitigation"}),"\nStrictly control external access for webhook"]}),"\n",(0,s.jsx)(t.p,{children:"Kubewarden policies run in a restrictive environment. They do not have network access."}),"\n",(0,s.jsx)(t.h2,{id:"threat-kubewarden-1---bootstrapping-of-trust-for-admission-controller",children:"Threat Kubewarden 1 - Bootstrapping of trust for admission controller"}),"\n",(0,s.jsx)(t.p,{children:"Assuming a trusted but fresh Kubernetes cluster, an attacker is able to compromise the Kubewarden stack\nbefore any of the policies securing it are deployed and enforced. For example, by using unsigned and\nmalicious images for kubewarden-controller, policy-server, or any of the Kubewarden dependencies\n(cert-manager) or optional dependencies (grafana, prometheus, etc.), or by compromising\nthe Helm charts payload."}),"\n",(0,s.jsx)(t.p,{children:"** Mitigation **"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Kubewarden provides a Software Bill Of Materials, which lists all images needed. This aids with Zero-Trust.\nThe Kubernetes Administrator must verify the Kubewarden images, its dependencies' images, and charts\nout of the Kubernetes cluster, in a trusted environment. This can be done with ",(0,s.jsx)(t.code,{children:"cosign"}),", for example.\nIncidentally, this is part of the implementation needed for air-gapped installations."]}),"\n",(0,s.jsx)(t.li,{children:"Use signed Helm charts, and verified digests instead of tags for Kubewarden images in those Helm charts.\nThis doesn't secure dependencies though."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);