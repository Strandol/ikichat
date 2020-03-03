const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
	target: 'node',
	mode: 'production',
	entry: './src/server.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
}

module.exports = merge(baseConfig, config)
