const path = require("path");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    amphi: "./windows/Amphi/Amphi.html",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        { from: "src/windows/Amphi", to: "windows/Amphi" },
        // ... other patterns
      ],
    }),
  ],
  watch: true,
};
