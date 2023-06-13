module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include other file types if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3a843c",
          dark: "var(--ifm-color-primary-dark)",
          darker: "var(--ifm-color-primary-darker)",
          darkest: "var(--ifm-color-primary-darkest)",
          light: "var(--ifm-color-primary-light)",
          lighter: "var(--ifm-color-primary-lighter)",
          lightest: "var(--ifm-color-primary-lightest)",
        },
        secondary: {
          DEFAULT: "#be4721",
          dark: "var(--ifm-color-secondary-dark)",
          darker: "var(--ifm-color-secondary-darker)",
          darkest: "var(--ifm-color-secondary-darkest)",
          light: "var(--ifm-color-secondary-light)",
          lighter: "var(--ifm-color-secondary-lighter)",
          lightest: "var(--ifm-color-secondary-lightest)",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
