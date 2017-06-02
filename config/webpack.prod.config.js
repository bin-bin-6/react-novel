let path = require('path');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let HtmlwebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// 项目根路径 
let ROOT_PATH = path.resolve(__dirname).replace('config','');
// 开发环境路径
let SRC_PATH = path.resolve(ROOT_PATH,'src');
// 生产环境路径
let BUILD_PATH = path.resolve(ROOT_PATH,'dist');


let config = {
    entry:[
         './src/app.js'
    ],
    output:{
        path: BUILD_PATH,
        publicPath:'./',
        filename: 'build.js'
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                loader:'babel-loader',
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract({
                    fallback: ['style-loader'],
                    use: ['css-loader','postcss-loader','sass-loader']
                }),
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[ext]'
            }
            
        ],
    },
    // 配置plugin
    plugins:[
        new CleanWebpackPlugin(['./dist'],{
            root:ROOT_PATH
        }),
        new ExtractTextPlugin('static/build-[contenthash:8].css'),
        new webpack.NoErrorsPlugin(),
        new HtmlwebpackPlugin({
            template:'./index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: false,
            options: {
                postcss: [
                    autoprefixer()
                ],
            },
        })
    ],
    // resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀
    resolve:{
        extensions:['.js','.jsx']
    }
}

module.exports = config;