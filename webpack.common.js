const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
  entry: {
    // define HTML files here (the key is output file w/o ext)
    index: './src/template.html', // => dist/index.html
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // Note: enable processing of HTML files from entry
      {
        test: /\.html$/,
        loader: HtmlBundlerPlugin.loader, // HTML loader
      },

      {
        test: /\.css$/i,
        // Note: this plugin extracts CSS self, no style-loader needed
        use: ['css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          // Note: define output filename of images
          filename: 'assets/img/[name].[hash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlBundlerPlugin({
      js: {
        // output filename of extracted JS from source script loaded in HTML via `<script>` tag
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        // output filename of extracted CSS from source style loaded in HTML via `<link>` tag
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],
};
