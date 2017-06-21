var fs = require('fs');
var webpack = require('webpack');
var path = require('path');


var bannerExcludeFiles = [];

var banner = '// NOTE: for vue2.0 and platform:web only.\n'

var bannerPlugin = new webpack.BannerPlugin(banner, {
    raw: true,
    exclude: bannerExcludeFiles
})

module.exports = {
    entry: "./js/src/pluginstall.js",
    output: {
        path: './js/build/',
        filename: 'index.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    module: {
        loaders: [{
                test: /\.(we|vue)(\?[^?]+)?$/,
                loader: 'weex'
            },
            {
                test: /\.js(\?[^?]+)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015',
            },
            {
                test: /\.css(\?[^?]+)?$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        bannerPlugin,
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告  
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        })
    ]
}