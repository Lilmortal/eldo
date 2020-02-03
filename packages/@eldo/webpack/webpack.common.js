const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// TODO: Read up more about polyfills
// TODO: Read up more about PWA, e.g. using WorkboxWebpackPlugin

module.exports = ({ dir, title }) => {
  return {
    entry: {
      app: [
        // 'babel-polyfill',
        `${dir}/index.tsx`,
      ],
    },
    module: {
      rules: [
        {
          test: /\.inline.svg$/,
          use: ['svg-react-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                publicPath: '/',
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: [
                  ['@babel/preset-env', { modules: 'commonjs' }],
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-syntax-dynamic-import'],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // Get the template and create an index.html with the <script> tags that points to our bundle files injected.
      // This is useful because we don't want the hassle of changing the <script> location when we rename/add/remove
      // our bundle names.
      new HtmlWebpackPlugin({
        hash: true,
        title,
        filename: 'index.html',
        template: `${dir}/index.html`,
      }),
      // Sometimes our /dist folder might have unused files. This plugin deletes the folder before we start building
      // our bundles.
      new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          // This moves all our vendor files into a seperate bundle (e.g. lodash, react). This bundle rarely changes,
          // hence we should cache this more often.
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
};