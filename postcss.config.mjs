const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
module.exports = {
  theme: {
    extend: {
      borderImage: {
        gradient: "linear-gradient(to right, #ff00cc, #333399) 1",
      },
    },
  },
  plugins: [],
};
