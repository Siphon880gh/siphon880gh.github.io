const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './assets/js/Components/App.js'),
    mode: "production",
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
        path: path.resolve(__dirname, './'),
        filename: 'bundle.min.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
    },
};