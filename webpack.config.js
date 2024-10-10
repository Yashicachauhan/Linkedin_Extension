// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    background: "./src/background.js",
    contentScript: "./src/contentScript.js", // Include the content script entry
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
