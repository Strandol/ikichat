const path = require('path')

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./index.build.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        watchContentBase: true,
        progress: true
    }
}