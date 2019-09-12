const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[hash].js',
    path: path.join(__dirname, '/dist/html')
  },
  devtool: 'source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            },
          },
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.TOKEN_CONTRACT_ADDRESS': JSON.stringify(process.env.TOKEN_CONTRACT_ADDRESS),
      'process.env.RELAYER_URL': JSON.stringify(process.env.RELAYER_URL),
      'process.env.ENS_DOMAIN_1': JSON.stringify(process.env.ENS_DOMAIN_1),
      'process.env.JSON_RPC_URL': JSON.stringify(process.env.JSON_RPC_URL)
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    compress: true
  },
  node: {
    fs: 'empty'
  }
}
