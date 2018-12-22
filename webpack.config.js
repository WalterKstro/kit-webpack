const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
   module: {
      rules: [{
            test: /\.(js)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.(html)$/,
            use: {
               loader: 'html-loader',
               options: {
                  minimize: true,
                  removeComments: false,
                  collapseWhitespace: false
               }
            }
         }, {}, {}
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './src/template.html',
         meta: {
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
         },
         inject: true
      })
   ]
}