
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
            }
        ]
    }
}