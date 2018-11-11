
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: ["./app.js"],
    mode: 'production',
    output: {
        path: __dirname + '/dist',
        filename: "./main.js"
    },
    watch: true,
    devtool: false,
    performance: { hints: false },
    devServer: {
        port: 8000,
        host: 'localhost',
        publicPath: "/",
        historyApiFallback: true,
        hot: true,
        publicPath: "/",
        inline: true,
        overlay: true,
},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            inject: false
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty'
      },
      module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                  limit: 10000,
                  mimetype: 'application/font-woff'
                }
              },
              {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                  limit: '10000',
                  mimetype: 'application/octet-stream'
                }
              },
              {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
              },
              {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
              {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                query: {
                  limit: 8192
                }
              }
        ],
    }
}