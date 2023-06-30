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
              "https://www.climatetechhandbook.com/admin/#/edit/",
            routeBasePath: "/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://www.climatetechhandbook.com/admin/#/edit/",
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
              docId: "resources",
              position: "right",
              label: "Job Seekers",
            },
            {
              type: "doc",
              docId: "sectors",
              position: "right",
              label: "Startups",
            },
            {
              type: "doc",
              docId: "about",
              position: "right",
              label: "About Us",
            },
            {
              to: "solutions",
              label: "Solutions",
              position: "right",
            },
            { to: "/blog", label: "News", position: "right" },
            {
              to: "/contribute",
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
              title: "Social",
              items: [
                {
                  html: `
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                      <img src="img/design/icons/fbook_icon.svg" alt="Facebook Icon" style="margin-right: 8px;"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                      <img src="img/design/icons/insta_icon.svg" alt="Instagram Icon" style="margin-right: 8px;"/>
                    </a>
                    <a href="https://www.linkedin.com/company/climate-tech-handbook/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                      <img src="img/design/icons/linkedin_icon.svg" alt="LinkedIn Icon"/>
                    </a>
                  `,
                },
              ],
            },
            {
              title: "Job Seekers",
              items: [
                {
                  label: "Resource Library",
                  to: "/resources",
                },
                {
                  label: "Career Guide",
                  to: "/career-guide",
                },
                {
                  label: "Technologies",
                  to: "/technologies",
                },
                {
                  label: "Glossary",
                  to: "/glossary",
                },
              ],
            },
            {
              title: "Startups",
              items: [
                {
                  label: "Choose a Sector",
                  to: "/sectors",
                },
              ],
            },
            {
              title: "About Us",
              items: [
                {
                  label: "About Handbook",
                  to: "/about",
                },
                {
                  label: "Contribute",
                  to: "/contribute",
                },
              ],
            },
            {
              title: "News",
              items: [
                {
                  label: "Blog",
                  href: "/blog",
                },
              ],
            },
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
