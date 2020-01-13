
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
var _dirname = path.resolve()
config = {
    mode: 'production',
    entry:'./src/index.js',
    output: {
        filename:'index.js',
        path:path.join(_dirname,'./dist')
    },
    module:{},
    devServer:{
        contentBase:'./dist',
        proxy: {
            '/api': {
              target: 'http://49.234.69.205/index.php/api',
              pathRewrite: {'^/api' : ''},
              changeOrigin: true,     // target是域名的话，需要这个参数
              ws: true
            }
        }
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebpackPlugin({
        //     template:'./src/index.html'
        // })
    ]
}
module.exports = config