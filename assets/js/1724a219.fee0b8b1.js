"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[91722],{71962:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"security/threat-model","title":"Threat Model","description":"The Kubernetes Admission Control Threat Model and Kubewarden.","source":"@site/versioned_docs/version-1.10/security/threat-model.md","sourceDirName":"security","slug":"/security/threat-model","permalink":"/1.10/security/threat-model","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/security/threat-model.md","tags":[],"version":"1.10","lastUpdatedAt":1739280772000,"frontMatter":{"sidebar_label":"Threat Model","title":"Threat Model","description":"The Kubernetes Admission Control Threat Model and Kubewarden.","keywords":["kubernetes","admission control threat model","kubewarden"],"doc-persona":["kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation","reference"],"doc-topic":["security","threat-model"]},"sidebar":"docs","previous":{"title":"OCI registry support","permalink":"/1.10/distributing-policies/oci-registries-support"},"next":{"title":"Upgrade path","permalink":"/1.10/operator-manual/upgrade-path"}}');var o=i(74848),a=i(28453);const r={sidebar_label:"Threat Model",title:"Threat Model",description:"The Kubernetes Admission Control Threat Model and Kubewarden.",keywords:["kubernetes","admission control threat model","kubewarden"],"doc-persona":["kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation","reference"],"doc-topic":["security","threat-model"]},s=void 0,l={},c=[{value:"Kubernetes threats",id:"kubernetes-threats",level:2},{value:"Threat 1 - Attacker floods webhook with traffic preventing its operation",id:"threat-1---attacker-floods-webhook-with-traffic-preventing-its-operation",level:3},{value:"Scenario",id:"scenario",level:4},{value:"Mitigation",id:"mitigation",level:4},{value:"Threat 2 - Attacker passes workloads which require complex processing causing timeouts",id:"threat-2---attacker-passes-workloads-which-require-complex-processing-causing-timeouts",level:3},{value:"Scenario",id:"scenario-1",level:4},{value:"Mitigation",id:"mitigation-1",level:4},{value:"Threat 3 - Attacker exploits mis-configuration of webhook to bypass",id:"threat-3---attacker-exploits-mis-configuration-of-webhook-to-bypass",level:3},{value:"Scenario",id:"scenario-2",level:4},{value:"Mitigation",id:"mitigation-2",level:4},{value:"Threat 4 - Attacker has rights to delete or modify the Kubernetes webhook object",id:"threat-4---attacker-has-rights-to-delete-or-modify-the-kubernetes-webhook-object",level:3},{value:"Scenario",id:"scenario-3",level:4},{value:"Mitigation",id:"mitigation-3",level:4},{value:"To-do",id:"to-do",level:4},{value:"Threat 5 - Attacker gets access to valid credentials for the webhook",id:"threat-5---attacker-gets-access-to-valid-credentials-for-the-webhook",level:3},{value:"Scenario",id:"scenario-4",level:4},{value:"Mitigation",id:"mitigation-4",level:4},{value:"Threat 6 - Attacker gains access to a cluster admin credential",id:"threat-6---attacker-gains-access-to-a-cluster-admin-credential",level:3},{value:"Scenario",id:"scenario-5",level:4},{value:"Mitigation",id:"mitigation-5",level:4},{value:"Threat 7 - Attacker sniffs traffic on the container network",id:"threat-7---attacker-sniffs-traffic-on-the-container-network",level:3},{value:"Scenario",id:"scenario-6",level:4},{value:"Mitigation",id:"mitigation-6",level:4},{value:"Threat 8 - Attacker carries out a MITM attack on the webhook",id:"threat-8---attacker-carries-out-a-mitm-attack-on-the-webhook",level:3},{value:"Scenario",id:"scenario-7",level:4},{value:"Mitigation",id:"mitigation-7",level:4},{value:"To-do",id:"to-do-1",level:4},{value:"Threat 9 - Attacker steals traffic from the webhook via spoofing",id:"threat-9---attacker-steals-traffic-from-the-webhook-via-spoofing",level:3},{value:"Scenario",id:"scenario-8",level:4},{value:"Mitigation",id:"mitigation-8",level:4},{value:"To-do",id:"to-do-2",level:4},{value:"Threat 10 - Abusing a mutation rule to create a privileged container",id:"threat-10---abusing-a-mutation-rule-to-create-a-privileged-container",level:3},{value:"Scenario",id:"scenario-9",level:4},{value:"Mitigation",id:"mitigation-9",level:4},{value:"Threat 11 - Attacker deploys workloads to namespaces that are exempt from admission control",id:"threat-11---attacker-deploys-workloads-to-namespaces-that-are-exempt-from-admission-control",level:3},{value:"Scenario",id:"scenario-10",level:4},{value:"Mitigation",id:"mitigation-10",level:4},{value:"To-do",id:"to-do-3",level:4},{value:"Threat 12 - Block rule can be bypassed due to missing match (for example, missing initcontainers)",id:"threat-12---block-rule-can-be-bypassed-due-to-missing-match-for-example-missing-initcontainers",level:3},{value:"Scenario",id:"scenario-11",level:4},{value:"Mitigation",id:"mitigation-11",level:4},{value:"Threat 13 - Attacker exploits bad string matching on a blocklist to bypass rules",id:"threat-13---attacker-exploits-bad-string-matching-on-a-blocklist-to-bypass-rules",level:3},{value:"Scenario",id:"scenario-12",level:4},{value:"Mitigation",id:"mitigation-12",level:4},{value:"To-do",id:"to-do-4",level:4},{value:"Threat 14 - Attacker uses new/old features of the Kubernetes API which have no rules",id:"threat-14---attacker-uses-newold-features-of-the-kubernetes-api-which-have-no-rules",level:3},{value:"Scenario",id:"scenario-13",level:4},{value:"Mitigation",id:"mitigation-13",level:4},{value:"Threat 15 - Attacker deploys privileged container to node running Webhook controller",id:"threat-15---attacker-deploys-privileged-container-to-node-running-webhook-controller",level:3},{value:"Scenario",id:"scenario-14",level:4},{value:"Mitigation",id:"mitigation-14",level:4},{value:"Threat 16 - Attacker mounts a privileged node hostpath allowing modification of Webhook controller configuration",id:"threat-16---attacker-mounts-a-privileged-node-hostpath-allowing-modification-of-webhook-controller-configuration",level:3},{value:"Scenario",id:"scenario-15",level:4},{value:"Mitigation",id:"mitigation-15",level:4},{value:"To-do",id:"to-do-5",level:4},{value:"Threat 17 - Attacker has privileged SSH access to cluster node running admission webhook",id:"threat-17---attacker-has-privileged-ssh-access-to-cluster-node-running-admission-webhook",level:3},{value:"Scenario",id:"scenario-16",level:4},{value:"Mitigation",id:"mitigation-16",level:4},{value:"Threat 18 - Attacker uses policies to send confidential data from admission requests to external systems",id:"threat-18---attacker-uses-policies-to-send-confidential-data-from-admission-requests-to-external-systems",level:3},{value:"Scenario",id:"scenario-17",level:4},{value:"Mitigation",id:"mitigation-17",level:4},{value:"Kubewarden threats",id:"kubewarden-threats",level:2},{value:"Kubewarden threat 1 - Bootstrapping of trust for admission controller",id:"kubewarden-threat-1---bootstrapping-of-trust-for-admission-controller",level:3},{value:"Scenario",id:"scenario-18",level:4},{value:"Mitigation",id:"mitigation-18",level:4}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/kubernetes/community/tree/master/sig-security",children:"Kubernetes Security Special Interest Group (SIG)"})," has defined an Admission Control Threat Model for Kubernetes.\nThe Kubewarden team continuously evaluates Kubewarden against this threat model, and works to provide secure defaults.\nIt's recommended that Kubewarden administrators read and understand the threat model, and use it to devise their own circumstance specific threat model as needed."]}),"\n",(0,o.jsxs)(t.p,{children:["Details about each threat is provided in the ",(0,o.jsx)(t.a,{href:"https://github.com/kubernetes/sig-security/tree/main/sig-security-docs/papers/admission-control",children:"document published by SIG Security"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"kubernetes-threats",children:"Kubernetes threats"}),"\n",(0,o.jsx)(t.h3,{id:"threat-1---attacker-floods-webhook-with-traffic-preventing-its-operation",children:"Threat 1 - Attacker floods webhook with traffic preventing its operation"}),"\n",(0,o.jsx)(t.h4,{id:"scenario",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker who has access to the Webhook endpoint,\nat the network level,\ncould send large quantities of traffic,\ncausing an effective denial of service to the admission controller."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Webhook fails closed.\nif the webhook doesn't respond in time,\nfor any reason, the API server should reject the request.\nThis is Kubewarden's default behavior."}),"\n",(0,o.jsx)(t.p,{children:"Failing closed means that if, for any reason,\nKubewarden stops responding or crashes,\nthe API server rejects the request by default.\nThis is even if the request would normally be accepted by Kubewarden."}),"\n",(0,o.jsx)(t.h3,{id:"threat-2---attacker-passes-workloads-which-require-complex-processing-causing-timeouts",children:"Threat 2 - Attacker passes workloads which require complex processing causing timeouts"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-1",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker, who can access the admission controller at a network level, passes\nrequests to the admission controller requiring complex processing and causing\ntimeouts as the admission controller uses compute power to process the workloads."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-1",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Webhook fails closed and authenticate callers.\nThis is Kubewarden's default behavior."}),"\n",(0,o.jsx)(t.h3,{id:"threat-3---attacker-exploits-mis-configuration-of-webhook-to-bypass",children:"Threat 3 - Attacker exploits mis-configuration of webhook to bypass"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-2",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker, who has rights to create workloads in the cluster, is able to exploit\na mis-configuration to bypass the intended security control."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-2",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Regular reviews of webhook configuration can help catch issues."}),"\n",(0,o.jsx)(t.h3,{id:"threat-4---attacker-has-rights-to-delete-or-modify-the-kubernetes-webhook-object",children:"Threat 4 - Attacker has rights to delete or modify the Kubernetes webhook object"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-3",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker who has Kubernetes API access, has sufficient privileges to delete\nthe webhook object in the cluster."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-3",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Since Kubewarden 1.10.0, the controller reconciles the webhook objects, recreating or\nupdating them if they have been tampered with."}),"\n",(0,o.jsx)(t.p,{children:"RBAC rights should be strictly controlled."}),"\n",(0,o.jsx)(t.h4,{id:"to-do",children:"To-do"}),"\n",(0,o.jsx)(t.p,{children:"Most of RBAC isn't within the scope of the current discussion.\nHowever, the following will be provided in due course for helping Kubewarden\nusers:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Directions around minimum RBAC to be implemented."}),"\n",(0,o.jsx)(t.li,{children:"Provision & documentation of policies that detect and could block RBAC changes."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"threat-5---attacker-gets-access-to-valid-credentials-for-the-webhook",children:"Threat 5 - Attacker gets access to valid credentials for the webhook"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-4",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker gains access to valid client credentials for the admission controller webhook."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-4",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Webhook fails closed.\nThis is Kubewarden's default behavior."}),"\n",(0,o.jsx)(t.h3,{id:"threat-6---attacker-gains-access-to-a-cluster-admin-credential",children:"Threat 6 - Attacker gains access to a cluster admin credential"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-5",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker gains access to a cluster-admin level credential in the Kubernetes cluster."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-5",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"N/A"}),"\n",(0,o.jsx)(t.h3,{id:"threat-7---attacker-sniffs-traffic-on-the-container-network",children:"Threat 7 - Attacker sniffs traffic on the container network"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-6",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker who has access to the container network is able to sniff traffic\nbetween the API server and the admission controller webhook."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-6",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Since the webhook uses TLS encryption for all traffic, Kubewarden is safe."}),"\n",(0,o.jsx)(t.h3,{id:"threat-8---attacker-carries-out-a-mitm-attack-on-the-webhook",children:"Threat 8 - Attacker carries out a MITM attack on the webhook"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-7",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker on the container network, who has access to the NET_RAW capability\ncan try to use MITM tooling to intercept traffic between the API server\nand admission controller webhook."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-7",children:"Mitigation"}),"\n",(0,o.jsxs)(t.p,{children:["Webhook mTLS authentication should be used.\nYou should also use ",(0,o.jsx)(t.a,{href:"https://artifacthub.io/packages/kubewarden/capabilities-psp/capabilities-psp",children:"capabilities-psp"})," and configure it to drop NET_RAW capabilities."]}),"\n",(0,o.jsx)(t.h4,{id:"to-do-1",children:"To-do"}),"\n",(0,o.jsxs)(t.p,{children:["Implement mutual TLS authentication.\nAdditionally, it would be possible to add a policy within the recommended\npolicies section in the ",(0,o.jsx)(t.code,{children:"kubewarden-defaults"})," which drops the ",(0,o.jsx)(t.code,{children:"NET_RAW"}),"\ncapability."]}),"\n",(0,o.jsx)(t.h3,{id:"threat-9---attacker-steals-traffic-from-the-webhook-via-spoofing",children:"Threat 9 - Attacker steals traffic from the webhook via spoofing"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-8",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker is able to redirect traffic from the API server which is intended\nfor the admission controller webhook by spoofing."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-8",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Webhook mTLS authentication is used."}),"\n",(0,o.jsx)(t.h4,{id:"to-do-2",children:"To-do"}),"\n",(0,o.jsx)(t.p,{children:"Kubewarden should implement mutual TLS authentication"}),"\n",(0,o.jsx)(t.h3,{id:"threat-10---abusing-a-mutation-rule-to-create-a-privileged-container",children:"Threat 10 - Abusing a mutation rule to create a privileged container"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-9",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker is able to cause a mutating admission controller to modify a workload,\nsuch that it allows for privileged container creation."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-9",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"All rules should be reviewed and tested."}),"\n",(0,o.jsx)(t.h3,{id:"threat-11---attacker-deploys-workloads-to-namespaces-that-are-exempt-from-admission-control",children:"Threat 11 - Attacker deploys workloads to namespaces that are exempt from admission control"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-10",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker is able to deploy workloads to Kubernetes namespaces that are exempt\nfrom the admission controller configuration."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-10",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"RBAC rights are strictly controlled"}),"\n",(0,o.jsx)(t.h4,{id:"to-do-3",children:"To-do"}),"\n",(0,o.jsx)(t.p,{children:"Most of the RBAC is out of scope with respect to this decision. However, the Kubewarden team aims to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Warn users via our docs and ",(0,o.jsx)(t.em,{children:"suggest"})," some minimum RBAC to be used."]}),"\n",(0,o.jsxs)(t.li,{children:["Provide a policy which detects RBAC changes and ",(0,o.jsx)(t.strong,{children:"maybe"})," block them."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"threat-12---block-rule-can-be-bypassed-due-to-missing-match-for-example-missing-initcontainers",children:"Threat 12 - Block rule can be bypassed due to missing match (for example, missing initcontainers)"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-11",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker created a workload manifest which uses a feature of the Kubernetes\nAPI which is not covered by the admission controller"}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-11",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"All rules should be reviewed and tested. You should review PRs changing any rules in policies deployment."}),"\n",(0,o.jsx)(t.h3,{id:"threat-13---attacker-exploits-bad-string-matching-on-a-blocklist-to-bypass-rules",children:"Threat 13 - Attacker exploits bad string matching on a blocklist to bypass rules"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-12",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker, who has rights to create workloads, bypasses a rule by exploiting\nbad string matching."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-12",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"All rules should be reviewed and tested."}),"\n",(0,o.jsx)(t.h4,{id:"to-do-4",children:"To-do"}),"\n",(0,o.jsx)(t.p,{children:"Introduce tests to cover this rule.\nAs always, you should review PRs changing the rules in the policies deployment."}),"\n",(0,o.jsx)(t.h3,{id:"threat-14---attacker-uses-newold-features-of-the-kubernetes-api-which-have-no-rules",children:"Threat 14 - Attacker uses new/old features of the Kubernetes API which have no rules"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-13",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker, with rights to create workloads, uses new features of the Kubernetes\nAPI (for example, a changed API version) to bypass a rule."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-13",children:"Mitigation"}),"\n",(0,o.jsxs)(t.p,{children:["All rules should be reviewed and tested. There is a policy that tests for the use of deprecated resources. It's available from ",(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/deprecated-api-versions-policy",children:"the deprecated-api-versions-policy"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Note:  ",(0,o.jsx)(t.code,{children:"deprecated-api-versions-policy"})," only deals with Custom Resources known to it. The threat is both deprecated resource versions, and new unknown ones that are misused, hence the policy only covers part\nof the problem."]}),"\n",(0,o.jsx)(t.h3,{id:"threat-15---attacker-deploys-privileged-container-to-node-running-webhook-controller",children:"Threat 15 - Attacker deploys privileged container to node running Webhook controller"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-14",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker, who has rights to deploy privileged containers to the cluster, creates\na privileged container on the cluster node where the admission controller webhook operates."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-14",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Admission controller uses restrictive policies to prevent privileged workloads."}),"\n",(0,o.jsx)(t.h3,{id:"threat-16---attacker-mounts-a-privileged-node-hostpath-allowing-modification-of-webhook-controller-configuration",children:"Threat 16 - Attacker mounts a privileged node hostpath allowing modification of Webhook controller configuration"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-15",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker, who has rights to deploy hostPath volumes with workloads, creates a\nvolume that allows for access to the admission controller pod\u2019s files."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-15",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Admission controller uses restrictive policies to prevent privileged workloads"}),"\n",(0,o.jsx)(t.h4,{id:"to-do-5",children:"To-do"}),"\n",(0,o.jsxs)(t.p,{children:["Add a recommended policy in the ",(0,o.jsx)(t.code,{children:"kubewarden-default"})," Helm chart to prevent this."]}),"\n",(0,o.jsx)(t.h3,{id:"threat-17---attacker-has-privileged-ssh-access-to-cluster-node-running-admission-webhook",children:"Threat 17 - Attacker has privileged SSH access to cluster node running admission webhook"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-16",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker is able to log into cluster nodes as a privileged user via SSH."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-16",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"N/A"}),"\n",(0,o.jsx)(t.h3,{id:"threat-18---attacker-uses-policies-to-send-confidential-data-from-admission-requests-to-external-systems",children:"Threat 18 - Attacker uses policies to send confidential data from admission requests to external systems"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-17",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"An attacker is able to configure a policy that listens to admission requests and\nsends sensitive data to an external system."}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-17",children:"Mitigation"}),"\n",(0,o.jsx)(t.p,{children:"Strictly control external access for webhook\nKubewarden policies run in a restrictive environment. They don't have network access."}),"\n",(0,o.jsx)(t.h2,{id:"kubewarden-threats",children:"Kubewarden threats"}),"\n",(0,o.jsx)(t.h3,{id:"kubewarden-threat-1---bootstrapping-of-trust-for-admission-controller",children:"Kubewarden threat 1 - Bootstrapping of trust for admission controller"}),"\n",(0,o.jsx)(t.h4,{id:"scenario-18",children:"Scenario"}),"\n",(0,o.jsx)(t.p,{children:"Assuming a trusted but new Kubernetes cluster, an attacker is able to compromise the Kubewarden stack before any of the policies securing it are deployed and enforced."}),"\n",(0,o.jsx)(t.p,{children:"For example, by:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["using unsigned and malicious images for:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Kubewarden-controller"}),"\n",(0,o.jsx)(t.li,{children:"policy-server"}),"\n",(0,o.jsx)(t.li,{children:"any of the Kubewarden dependencies (cert-manager)"}),"\n",(0,o.jsx)(t.li,{children:"any optional dependencies (Grafana, Prometheus, and others)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"by compromising the Helm charts payload"}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"mitigation-18",children:"Mitigation"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Kubewarden provides a Software Bill Of Materials, which lists all images needed. This aids with Zero-Trust.\nThe Kubernetes Administrator must verify the Kubewarden images, its dependencies' images, and charts\nout of the Kubernetes cluster, in a trusted environment.\nThis can be done with ",(0,o.jsx)(t.code,{children:"cosign"}),", for example.\nIncidentally, this is part of the implementation needed for air-gapped installations."]}),"\n",(0,o.jsx)(t.li,{children:"Use signed Helm charts, and verified digests instead of tags for Kubewarden images in those Helm charts.\nThis doesn't secure dependencies though."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var n=i(96540);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);