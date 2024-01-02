const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: Infinity, // everything
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  externals: {
    react: "react", // Case matters here
    "react-dom": "reactDOM", // Case matters here
  },
};
