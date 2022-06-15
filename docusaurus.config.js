
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kubewarden',
  tagline: 'Kubernetes Dynamic Admission at your fingertips',
  url: 'https://docs.kubewarden.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kubewarden', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    prism: {
      // Enable extra languages when doing syntax highlighting
      additionalLanguages: [
        'rust',
        'rego',
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: "Kubewarden, a CNCF Sandbox Project",
      logo: {
        alt: 'logo',
        src: 'img/icon-kubewarden.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'right',
          label: 'Docs',
          className: 'navbar__docs',
        },
        {
          href: 'https://github.com/kubewarden/',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__github btn btn-secondary icon-github',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Kubewarden Project Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/kubewarden/docs/edit/main/',
        },
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        googleAnalytics: {
          trackingID: 'UA-56382716-13',
          anonymizeIP: true,
        },
      },
    ],
  ], 
};
