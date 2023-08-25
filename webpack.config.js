const path = require("path");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        { from: "windows", to: "windows" },
        { from: "assets", to: "assets" },
      ],
    }),
  ],
  watch: true,
};
