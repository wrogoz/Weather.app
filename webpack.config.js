var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
      '/dist/js/final.js': './src/js/app.js',
      '/dist/css/main.css~': './src/scss/main.scss'
    },
    output: {
      path: __dirname+'/',
      filename: '[name]'
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }

            },
            {
               test: /\.scss$/,
               use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: ['css-loader', 'sass-loader']
               })
           }

        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/css/style.css')
    ]
}
