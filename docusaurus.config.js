const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Climate Tech Handbook",
    tagline:
      "We’re building the most accessible and accurate climate tech resource on the planet.",
    url: "https://www.climatetechhandbook.com",
    baseUrl: "/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/main/favicon.ico",
    organizationName: "The Climate Tech Handbook", // Usually your GitHub org/user name.
    projectName: "The Climate Tech Handbook", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/climate-tech-handbook/climate-tech-handbook",
            routeBasePath: "/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/climate-tech-handbook/climate-tech-handbook",
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
          title: "The Climate Tech Handbook",
          // logo: {
          //   alt: "CTH Earth Logo",
          //   src: "img/main/cth-earth-logo.png",
          // },
          items: [
            {
              type: "doc",
              docId: "jobseeker",
              position: "right",
              label: "Climate Job Seekers",
            },
            {
              type: "doc",
              docId: "funder",
              position: "right",
              label: "Climate Startups",
            },
            {
              type: "doc",
              docId: "about",
              position: "right",
              label: "About Us",
            },
            { to: "/blog", label: "News", position: "right" },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "About",
              items: [
                {
                  label: "About The Handbook",
                  to: "/about",
                },
                {
                  label: "Contribute",
                  to: "/contribute",
                },
              ],
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Resource Library",
                  to: "/resources",
                },
                {
                  label: "Career Guide",
                  to: "/career-guide",
                },
              ],
            },
            {
              title: "Solutions",
              items: [
                {
                  label: "List of climate solutions",
                  to: "/solutions",
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
          // copyright: `Copyright © ${new Date().getFullYear()} Differential Design, LLC`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
