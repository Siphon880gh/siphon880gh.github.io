const path = require('path');

// Reminder: mode is development vs production
module.exports = {
    entry: path.resolve(__dirname, './src/assets/js/Components/App.js'),
    mode: "production",
    module: {
        rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
        }
        ]
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