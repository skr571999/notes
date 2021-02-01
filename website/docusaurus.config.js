module.exports = {
  title: "Notes",
  tagline: "Notes",
  url: "https://skrnotes.netlify.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "skr571999", // Usually your GitHub org/user name.
  projectName: "notes", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Notes",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      links: [
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/skr571999/notes",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Angular",
              to: "angular",
            },
            {
              label: "NodeJS",
              to: "nodejs",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/skr571999",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/skr571999/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
          ],
        },
      ],
      copyright: `Built using <a target="_blank" href="https://docusaurus.io">Docusaurus</a>.`,
    },
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
