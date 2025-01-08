"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[93796],{49024:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"howtos/telemetry/tracing-qs","title":"Tracing quickstart","description":"A tracing quickstart for Kubewarden.","source":"@site/versioned_docs/version-1.14/howtos/telemetry/20-tracing-qs.md","sourceDirName":"howtos/telemetry","slug":"/howtos/telemetry/tracing-qs","permalink":"/1.14/howtos/telemetry/tracing-qs","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.14/howtos/telemetry/20-tracing-qs.md","tags":[],"version":"1.14","lastUpdatedAt":1736332232000,"sidebarPosition":20,"frontMatter":{"sidebar_label":"Tracing","title":"Tracing quickstart","description":"A tracing quickstart for Kubewarden.","keywords":["kubewarden","kubernetes","tracing","quickstart"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","telemetry","tracing","quick-start"]},"sidebar":"docs","previous":{"title":"Open Telemetry","permalink":"/1.14/howtos/telemetry/opentelemetry-qs"},"next":{"title":"Metrics","permalink":"/1.14/howtos/telemetry/metrics-qs"}}');var r=a(74848),s=a(28453);const i={sidebar_label:"Tracing",title:"Tracing quickstart",description:"A tracing quickstart for Kubewarden.",keywords:["kubewarden","kubernetes","tracing","quickstart"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","telemetry","tracing","quick-start"]},o=void 0,l={},c=[{value:"Install Jaeger",id:"install-jaeger",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2},{value:"Enforcing a policy",id:"enforcing-a-policy",level:2},{value:"Exploring the Jaeger UI",id:"exploring-the-jaeger-ui",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/telemetry/tracing-qs"})}),"\n",(0,r.jsx)(n.p,{children:"This section illustrates how to enable tracing support of\nPolicy Server."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Before continuing, make sure you completed the previous\n",(0,r.jsx)(n.a,{href:"/1.14/howtos/telemetry/opentelemetry-qs#install-opentelemetry",children:"OpenTelemetry"})," section\nof this book. It is required for this section to work correctly."]})}),"\n",(0,r.jsx)(n.p,{children:"Tracing allows to collect fine grained details about policy evaluations. It can\nbe a useful tool for debugging issues inside of your Kubewarden deployment and policies."}),"\n",(0,r.jsxs)(n.p,{children:["We will use ",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"})," -- used to receive, store and visualize trace\nevents."]}),"\n",(0,r.jsx)(n.h2,{id:"install-jaeger",children:"Install Jaeger"}),"\n",(0,r.jsxs)(n.p,{children:["We are going to use the ",(0,r.jsx)(n.a,{href:"https://github.com/jaegertracing/jaeger-operator",children:"Jaeger Operator"}),"\nto manage all the different Jaeger components. The operator can be installed in many ways. We are going to install via Helm charts."]}),"\n",(0,r.jsxs)(n.p,{children:["At the time of writing, only specific versions of Jaeger are compatible with\nCert Manager, ",(0,r.jsx)(n.a,{href:"https://github.com/jaegertracing/helm-charts/blob/main/charts/jaeger-operator/COMPATIBILITY.md",children:"see the compat chart"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To install the Helm chart:"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["At time of writing the latest chart version is ",(0,r.jsx)(n.code,{children:"2.49.0"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm repo add jaegertracing https://jaegertracing.github.io/helm-charts\n\nhelm upgrade -i --wait \\\n  --namespace jaeger \\\n  --create-namespace \\\n  --version 2.49.0 \\\n  jaeger-operator jaegertracing/jaeger-operator \\\n  --set rbac.clusterRole=true\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["This is ",(0,r.jsx)(n.strong,{children:"not meant to be a production deployment"}),".\nWe strongly recommend to read Jaeger's ",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/docs/latest/operator/",children:"official documentation"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Let's create a Jaeger resource:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: my-open-telemetry\n  namespace: jaeger\nspec:\n  ingress:\n    enabled: true\n    annotations:\n      kubernetes.io/ingress.class: nginx\nEOF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once all the resources have been created by the Jaeger operator, we will have a\nService under ",(0,r.jsx)(n.code,{children:"my-open-telemetry-collector.jaeger.svc.cluster.local"}),".\nThe Jaeger Query UI will be reachable at the following address:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"echo http://`minikube ip`\n"})}),"\n",(0,r.jsx)(n.h2,{id:"install-kubewarden",children:"Install Kubewarden"}),"\n",(0,r.jsx)(n.p,{children:"We can proceed to the deployment of Kubewarden in the usual way."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"cert-manager is a requirement of Kubewarden, and OpenTelemetry is required for this\nfeature, but we've already installed them in a previous section of this book."})}),"\n",(0,r.jsx)(n.p,{children:"As a first step, we have to add the Helm repository that contains Kubewarden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm repo add kubewarden https://charts.kubewarden.io\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then we have to install the Custom Resource Definitions (CRDs) defined by\nKubewarden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm install --wait \\\n  --namespace kubewarden \\\n  --create-namespace \\\n  kubewarden-crds kubewarden/kubewarden-crds\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we can deploy the rest of the Kubewarden stack. The official\n",(0,r.jsx)(n.code,{children:"kubewarden-defaults"})," helm chart will create a PolicyServer named ",(0,r.jsx)(n.code,{children:"default"}),". We\nwant this PolicyServer instance to have tracing enabled."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to do that, we have to specify some extra values for the\n",(0,r.jsx)(n.code,{children:"kubewarden-controller"})," chart. Let's create a ",(0,r.jsx)(n.code,{children:"values.yaml"})," file with the\nfollowing contents:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'telemetry:\n  tracing:\n    enabled: True\n    jaeger:\n      endpoint: "my-open-telemetry-collector.jaeger.svc.cluster.local:4317"\n      tls:\n        insecure: true\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"To keep things simple, we are not going to encrypt the communication between the\nOpenTelemetry collector and the Jaeger endpoint."}),(0,r.jsxs)(n.p,{children:["This is ",(0,r.jsx)(n.strong,{children:"not meant to be a production deployment"}),".\nWe strongly recommend\nto read Jaeger's ",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/docs/latest/operator/",children:"official documentation"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"Then we can proceed with the installation of the helm charts:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm install --wait --namespace kubewarden --create-namespace \\\n  --values values.yaml \\\n  kubewarden-controller kubewarden/kubewarden-controller\n\nhelm install --wait --namespace kubewarden --create-namespace \\\n  kubewarden-defaults kubewarden/kubewarden-defaults\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This leads to the creation of the ",(0,r.jsx)(n.code,{children:"default"})," instance of ",(0,r.jsx)(n.code,{children:"PolicyServer"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl get policyservers.policies.kubewarden.io\nNAME      AGE\ndefault   3m7s\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Looking closer at the Pod running the PolicyServer instance, we will find it has\ntwo containers inside of it: the actual ",(0,r.jsx)(n.code,{children:"policy-server"})," and the OpenTelemetry\nCollector sidecar ",(0,r.jsx)(n.code,{children:"otc-container"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"enforcing-a-policy",children:"Enforcing a policy"}),"\n",(0,r.jsxs)(n.p,{children:["We will start by deploying the ",(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/safe-labels-policy",children:"safe-labels"}),"\npolicy."]}),"\n",(0,r.jsxs)(n.p,{children:["We want the policy to be enforced only inside of Namespaces that have a\nlabel ",(0,r.jsx)(n.code,{children:"environment"})," with value ",(0,r.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Let's create a Namespace that has such a label:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: team-alpha-prod\n  labels:\n    environment: production\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, let's define a ClusterAdmissionPolicy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: safe-labels\nspec:\n  module: registry://ghcr.io/kubewarden/policies/safe-labels:v0.1.6\n  settings:\n    mandatory_labels:\n    - owner\n  rules:\n    - apiGroups:\n        - apps\n      apiVersions:\n        - v1\n      resources:\n        - deployments\n      operations:\n        - CREATE\n        - UPDATE\n  namespaceSelector:\n    matchExpressions:\n    - key: environment\n      operator: In\n      values: ["production"]\n  mutating: false\nEOF\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can wait for the policy to be active in this way:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl wait --for=condition=PolicyActive clusteradmissionpolicy/safe-labels\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the policy is active, we can try it out in this way:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: team-alpha-prod\n  labels:\n    owner: octocat\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"This Deployment object will be created because it doesn't violate the policy."}),"\n",(0,r.jsx)(n.p,{children:"On the other hand, this Deployment will be blocked by the policy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-without-labels\n  namespace: team-alpha-prod\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"The policy is not enforced inside of another Namespace."}),"\n",(0,r.jsxs)(n.p,{children:["The following command creates a new Namespace called ",(0,r.jsx)(n.code,{children:"team-alpha-staging"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: team-alpha-staging\n  labels:\n    environment: staging\nEOF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As expected, the creation of a Deployment resource that doesn't have any label\nis allowed inside of the ",(0,r.jsx)(n.code,{children:"team-alpha-staging"})," Namespace:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-without-labels\n  namespace: team-alpha-staging\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"As expected, this resource is successfully created."}),"\n",(0,r.jsx)(n.h2,{id:"exploring-the-jaeger-ui",children:"Exploring the Jaeger UI"}),"\n",(0,r.jsxs)(n.p,{children:["We can see the trace events have been sent by the PolicyServer instance to Jaeger,\nas there is a new service ",(0,r.jsx)(n.code,{children:"kubewarden-policy-server"})," listed in the UI:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Jaeger dashboard",src:a(36240).A+"",title:"The dashboard of Jaeger",width:"1908",height:"964"})}),"\n",(0,r.jsx)(n.p,{children:"The Jaeger collector is properly receiving the traces generated by our PolicyServer."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},36240:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/jaeger-ui-home-2020c53533a53c94e639d648c8c63cb5.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);