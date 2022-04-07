import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./public/dist",
    historyApiFallback: true,
    host: "0.0.0.0",
    compress: true,
    hot: true,
    port: 3001,

    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
});
