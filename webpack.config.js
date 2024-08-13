const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

require('dotenv').config({ path: './.env' });

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/public/index.html", // to import index.html file inside index.js
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  devServer: {
    port: 3000, // you can change the port
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      {
        test: /\.m?js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    ],
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  }
};