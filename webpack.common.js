const sass = require("sass");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { resolve, join } = require("path");

module.exports = {
  entry: "./src/index.tsx",
  watchOptions: {
    ignored: ["**/node_modules"],
  },
  output: {
    filename: "./app-bundle.js",
    path: resolve(`${__dirname}/public`, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".Webpack.js", ".web.js", ".ts", ".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.(png|svg)$/i,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json" },
        { from: "public/favicon.ico" },
        { from: "public/logo.png" },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: join(__dirname, "./public/index.html"),
    }),
  ],
};
