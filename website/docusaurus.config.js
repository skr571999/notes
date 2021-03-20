module.exports = {
  title: "Notes",
  tagline: "Notes",
  url: "https://skrnotes.netlify.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "skr571999",
  projectName: "notes",
  themeConfig: {
    navbar: {
      title: "Notes",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/skr571999/notes",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Built using <a target="_blank" href="https://v2.docusaurus.io/">Docusaurus</a>.`,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          path: "../notes/",
          routeBasePath: "/",
          // homePageId: "",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          // "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          path: "../blog/",
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
