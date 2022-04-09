const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(
  common("https://xavigimenezsanchez.github.io/randomusers/"),
  {
    mode: "production",
  }
);
