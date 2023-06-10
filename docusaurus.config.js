const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Climate Tech Handbook",
    tagline:
      "We are here to help you answer the most important question in the world:",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/main/favicon.ico",
    organizationName: "Climate Tech Handbook", // Usually your GitHub org/user name.
    projectName: "Climate Tech Handbook", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/",
            routeBasePath: "/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    customFields: {
      tagline2: "How am I going to make a difference?",
    },

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          // left blank for now (just the <Earth> logo)
          title: "",
          logo: {
            alt: "CTH Earth Logo",
            src: "img/main/cth-earth-logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Tutorial",
            },
            { to: "/blog", label: "Blog", position: "left" },
            { to: "/contact", label: "Contact", position: "right" },
            {
              href: "https://github.com/climate-tech-handbook",
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
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Climate Tech Handbook, built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
