"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8501],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3555:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),s=["components"],i={sidebar_label:"Metrics Quickstart",title:""},l="Metrics",u={unversionedId:"operator-manual/telemetry/metrics/quickstart",id:"operator-manual/telemetry/metrics/quickstart",title:"",description:"This section describes how to enable metrics reporting on the Policy Server.",source:"@site/docs/operator-manual/telemetry/metrics/01-quickstart.md",sourceDirName:"operator-manual/telemetry/metrics",slug:"/operator-manual/telemetry/metrics/quickstart",permalink:"/operator-manual/telemetry/metrics/quickstart",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/telemetry/metrics/01-quickstart.md",tags:[],version:"current",lastUpdatedAt:1651834243,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:1,frontMatter:{sidebar_label:"Metrics Quickstart",title:""},sidebar:"docs",previous:{title:"Open Telemetry Quickstart",permalink:"/operator-manual/telemetry/opentelemetry/quickstart"},next:{title:"Tracing Quickstart",permalink:"/operator-manual/telemetry/tracing/quickstart"}},p={},c=[{value:"Install Prometheus",id:"install-prometheus",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2},{value:"Accessing Prometheus",id:"accessing-prometheus",level:2},{value:"Accessing Grafana",id:"accessing-grafana",level:2},{value:"Using Kubewarden Grafana dashboard",id:"using-kubewarden-grafana-dashboard",level:3}],m={toc:c};function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"This section describes how to enable metrics reporting on the Policy Server."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note well"),": before continuing, make sure you completed the previous\n",(0,o.kt)("a",{parentName:"p",href:"/operator-manual/telemetry/opentelemetry/quickstart#install-opentelemetry"},"OpenTelemetry")," section of this book. It\nis required for this section to work correctly.")),(0,o.kt)("p",null,"We are going to use ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," to scrape metrics exposed by the Policy\nServer."),(0,o.kt)("h2",{id:"install-prometheus"},"Install Prometheus"),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator"),",\nthat allows us to intuitively define Prometheus' Targets."),(0,o.kt)("p",null,"There are many ways to install and set up Prometheus. For ease of deployment, we will use the\nPrometheus community helm chart."),(0,o.kt)("p",null,"Let's add the helm repository from the Prometheus Community:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\n")),(0,o.kt)("p",null,"Now, let's install the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},(0,o.kt)("inlineCode",{parentName:"a"},"kube-prometheus-stack")),"\nchart. This chart contains a collection of Kubernetes manifests, Grafana dashboards, and Prometheus\nrules."),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-prometheus-stack-values.yaml")," file to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-prometheus-stack"),"\nHelm chart values with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"prometheus:\n  additionalServiceMonitors:\n    - name: kubewarden\n      selector:\n        matchLabels:\n          app: kubewarden-policy-server-default\n      namespaceSelector:\n        matchNames:\n          - kubewarden\n      endpoints:\n        - port: metrics\n          interval: 10s\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus-operator")," deployed as part of this Helm chart defines the concept of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/design.md#servicemonitor"},"Service\nMonitors"),",\nused to declaratively define which services should be monitored by Prometheus."),(0,o.kt)("p",null,"In our case, we are adding a Service monitor targeting the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubewarden")," namespace, for services that\nmatch labels ",(0,o.kt)("inlineCode",{parentName:"p"},"app=kubewarden-policy-server-default"),". This way, the Prometheus Operator is able to\ninspect which Kubernetes Endpoints are tied to services matching this conditions. The operator will\nthen take care of generating a valid configuration file for Prometheus, and reloading it\nautomatically after updating its configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install --wait --create-namespace --namespace prometheus --values kube-prometheus-stack-values.yaml prometheus prometheus-community/kube-prometheus-stack\n")),(0,o.kt)("h2",{id:"install-kubewarden"},"Install Kubewarden"),(0,o.kt)("p",null,"We can now install Kubewarden in the recommended way with the Helm chart."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note well:")," cert-manager is a requirement of Kubewarden, and OpenTelemetry is required for this\nfeature, but we've already installed them in a previous section of this book.")),(0,o.kt)("p",null,"As a first step, we have to add the Helm repository that contains Kubewarden:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add kubewarden https://charts.kubewarden.io\n")),(0,o.kt)("p",null,"Then we have to install the Custom Resource Definitions (CRDs) defined by\nKubewarden:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install --wait --namespace kubewarden --create-namespace kubewarden-crds kubewarden/kubewarden-crds\n")),(0,o.kt)("p",null,"Now we can deploy the rest of the Kubewarden stack. The official helm\nchart will create a PolicyServer named ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,o.kt)("p",null,"Let's configure the values of the Helm Chart so that we have metrics enabled\nin Kubewarden. Write the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubewarden-values.yaml")," file with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"telemetry:\n  enabled: True\npolicyServer:\n    metrics:\n      port: 8080\n")),(0,o.kt)("p",null,"Now, let's install the helm chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install --wait --namespace kubewarden --values kubewarden-values.yaml kubewarden-controller kubewarden/kubewarden-controller\n")),(0,o.kt)("p",null,"This leads to the creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"PolicyServer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get policyservers.policies.kubewarden.io\nNAME      AGE\ndefault   3m7s\n")),(0,o.kt)("p",null,"By default, this policy server will have metrics enabled."),(0,o.kt)("h2",{id:"accessing-prometheus"},"Accessing Prometheus"),(0,o.kt)("p",null,"Prometheus exposes a very simple UI that we can use to inspect metrics exposed by different\ncomponents within our Kubernetes cluster."),(0,o.kt)("p",null,"We can forward the Prometheus port so we can easily access it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl port-forward -n prometheus --address 0.0.0.0 svc/prometheus-operated 9090\n")),(0,o.kt)("p",null,"Now, we can visit prometheus through port ",(0,o.kt)("inlineCode",{parentName:"p"},"9090")," and perform a query, for example:\n",(0,o.kt)("inlineCode",{parentName:"p"},"kubewarden_policy_evaluations_total"),". We will see that the number of evaluations will grow over\ntime as we produce more requests that go through the policy."),(0,o.kt)("h2",{id:"accessing-grafana"},"Accessing Grafana"),(0,o.kt)("p",null,"We can forward the Grafana service so we can easily access it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl port-forward -n prometheus --address 0.0.0.0 svc/prometheus-grafana 8080:80\n")),(0,o.kt)("p",null,"You can now login with the default username ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and password ",(0,o.kt)("inlineCode",{parentName:"p"},"prom-operator"),"."),(0,o.kt)("h3",{id:"using-kubewarden-grafana-dashboard"},"Using Kubewarden Grafana dashboard"),(0,o.kt)("p",null,"The Kubewarden developers made available a Grafana dashboard with some basic metrics\nthat give an overview about how Kubewarden behaves inside of cluster. This dashboard\nis available in the Kubewarden repository in a ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubewarden/policy-server/main/kubewarden-dashboard.json"},"JSON file"),"\nor in the ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/15314"},"Grafana website"),". "),(0,o.kt)("p",null,"To import the dashboard into your environment, you can download the JSON file\nfrom the Grafana website or from the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl https://raw.githubusercontent.com/kubewarden/policy-server/main/kubewarden-dashboard.json\n")),(0,o.kt)("p",null,"Once you have the file in your machine you should access the Grafana dashboard and\n",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard"},"import it"),".\nVisit ",(0,o.kt)("inlineCode",{parentName:"p"},"/dashboard/import")," in the Grafana dashboard and follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the JSON file contents and paste them into the ",(0,o.kt)("inlineCode",{parentName:"li"},"Import via panel json")," box in the Grafana UI"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Load")," button"),(0,o.kt)("li",{parentName:"ol"},"Choosing ",(0,o.kt)("inlineCode",{parentName:"li"},"Prometheus")," as the source"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Import")," button")),(0,o.kt)("p",null,"Another option is import it directly from the Grafana.com website. For this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the dashboard ID from the ",(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/dashboards/15314"},"dashboard page"),", "),(0,o.kt)("li",{parentName:"ol"},"Paste it in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Import via grafana.com")," field"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"load")," button."),(0,o.kt)("li",{parentName:"ol"},"After importing the dashboard, define the Prometheus data source to use and finish\nthe import process. ")),(0,o.kt)("p",null,"You should be able to see the dashboard similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard 1",src:a(619).Z,width:"1915",height:"709"}),"\n",(0,o.kt)("img",{alt:"Dashboard 2",src:a(8793).Z,width:"1907",height:"949"}),"\n",(0,o.kt)("img",{alt:"Dashboard 3",src:a(5903).Z,width:"1948",height:"696"}),"\n",(0,o.kt)("img",{alt:"Dashboard 4",src:a(5082).Z,width:"1903",height:"943"})),(0,o.kt)("p",null,"The Grafana dashboard has panes showing the state of all\nthe policies managed by Kubewarden. Plus it has policy-specific panels."),(0,o.kt)("p",null,"Policy detailed metrics can be obtained by changing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy_name"),"\nvariable to match the name of the desired policy."))}d.isMDXComponent=!0},619:function(e,t,a){t.Z=a.p+"assets/images/grafana_dashboard_1-8a188ecd24d7a863db4206818994da6f.png"},8793:function(e,t,a){t.Z=a.p+"assets/images/grafana_dashboard_2-92f2648a385b4d32d7fad3f3d916bf51.png"},5903:function(e,t,a){t.Z=a.p+"assets/images/grafana_dashboard_3-ac5d2921a8599fc4b0c204fe8d196f87.png"},5082:function(e,t,a){t.Z=a.p+"assets/images/grafana_dashboard_4-a99c566a2d6dcd35d940b622b5f86137.png"}}]);