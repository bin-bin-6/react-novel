let path = require('path');
let webpack = require('webpack');
let HtmlwebpackPlugin = require('html-webpack-plugin');

// 项目根路径 
let ROOT_PATH = path.resolve(__dirname);
// 开发环境路径
let SRC_PATH = path.resolve(ROOT_PATH,'src');
// 生产环境路径
let BUILD_PATH = path.resolve(ROOT_PATH,'dist');

let config = {
    entry:[
        'webpack/hot/only-dev-server',
         './src/app.js'
    ],
    output:{
        path: __dirname + '/dist',
        publicPath:'http://127.0.0.1:6060/',
        filename: 'build.js'
    },
    // 开启dev
    devtool:'eval-source-map',
    devServer:{
        port: 6060,
        historyApiFallback:true,
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                // loader:'babel-loader'
                exclude: /node_modules/,
                loader:'babel-loader!eslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.scss?$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[ext]'
            }
            
        ],
    },
    // 配置plugin
    plugins:[
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlwebpackPlugin({
            template:'./index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ],
    // resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀
    resolve:{
        extensions:['.js','.jsx']
    }
}

module.exports = config;