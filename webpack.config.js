const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/assets/js/Components/App.js'),
    mode: "development",
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/assets/js'),
        filename: 'bundle.min.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
    },
};