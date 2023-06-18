const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Climate Tech Handbook",
    tagline:
      "We’re building the most accessible and accurate climate tech resource on the planet.",
    url: "https://climatetechhandbook.com",
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
            customCss: [
              require.resolve("./src/css/custom.css"),
              // require.resolve("./src/css/tailwind.css"),
            ],
          },
        }),
      ],
    ],

    customFields: {
      tagline2: "and accurate climate tech resource on the planet.",
    },

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Climate Tech Handbook",
          // logo: {
          //   alt: "CTH Earth Logo",
          //   src: "img/main/cth-earth-logo.png",
          // },
          items: [
            {
              type: "doc",
              docId: "about",
              position: "right",
              label: "About Us",
            },
            {
              type: "doc",
              docId: "jobseeker",
              position: "right",
              label: "Job Seekers",
            },
            {
              type: "doc",
              docId: "funder",
              position: "right",
              label: "Funders",
            },
            { to: "/blog", label: "Blog", position: "left" },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "About Us",
                  to: "/about",
                },
                {
                  label: "Job Seekers",
                  to: "/jobseeker",
                },
                {
                  label: "Funders",
                  to: "/funder",
                },
              ],
            },
            {
              title: "Blog",
              items: [
                {
                  label: "Check It Out!",
                  to: "/blog",
                },
              ],
            },
            // {
            //   title: "Community",
            //   items: [
            //     {
            //       label: "Stack Overflow",
            //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //     },
            //
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
