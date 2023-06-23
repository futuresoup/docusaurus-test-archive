const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Climate Tech Handbook",
    tagline: "How am I going to make a difference?",
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
      statement:
        "We are here to help you answer the most important question in the world:",
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
              label: "Job Seekers",
            },
            {
              type: "doc",
              docId: "startup",
              position: "right",
              label: "Startups",
            },
            {
              type: "doc",
              docId: "about",
              position: "right",
              label: "About Us",
            },
            { to: "/blog", label: "News", position: "right" },
            {
              to: "https://github.com/climate-tech-handbook/climate-tech-handbook",
              label: "Contribute",
              position: "right",
              target: "_blank",
            },
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

        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
      }),
  }
);
