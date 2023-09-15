module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      "dark-blue": "#314363",
      "dark-black": "#263857",
      "lighter-grey": "#7E98BA",
    },
    fontSize: {
      "45px": "45px",
    },
    borderRadius: {
      "35px": "35px",
    },
    boxShadow: {
      xxl: "0px 4px 19px 0px rgba(210, 209, 209, 0.25);",
    },
  },
  plugins: [require("flowbite/plugin")],
};
