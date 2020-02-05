const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = ({ dir }) => {
  return {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: `${dir}/dist`,
      hot: true,
      port: 3000,
      // fall back to index.html if requested resource could not be found
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { sourceMap: true },
            },
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: `${dir}/postcss.config.js`,
                },
              },
            },
          ],
        },
      ],
    },
    // We can't use [chunkhash] in dev mode is because it is not compatible with webpack-dev-server,
    // as well as severely increases build time in dev.
    // The differences between [hash] and [chunkhash] is [hash] is calculated for a build, whereas
    // [chunkhash] is calculated for each chunks.
    output: {
      filename: "[name].[hash].bundle.js",
      path: `${dir}/dist`,
    },
    plugins: [
      // Vendor bundles should not change unless we update their versions. But because it's internal module.id
      // change when there is a change, it is not properly cached.
      // NamedModulesPlugin uses the path of the module instead of module.id. It is useful in development as the
      // output is more readable, but it takes longer to run.
      // Module.id is this: module.id === require.resolve("./file.js").
      new webpack.NamedModulesPlugin(),
      // Needed to enable HMR
      new webpack.HotModuleReplacementPlugin(),
      // This sets the global variables
      new webpack.DefinePlugin({
        __DEV__: true,
      }),
      // Extract css files into a seperate bundle
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      // Setup stylelint
      // new StyleLintPlugin(),
    ],
  };
};
