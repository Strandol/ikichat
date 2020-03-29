const path = require('path')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const isDev = process.env.NODE_ENV === 'development'

const config = {
	target: 'node',
	entry: './server/server.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]ss|css)$/i,
				use: ['css-loader', 'sass-loader'],
			},
		],
	},
	node: {
		__dirname: false,
	},
	externals: [nodeExternals()],
	plugins: [
		...(isDev ? [
			new WebpackShellPlugin({
				onBuildEnd: ['npm run start:server'],
			})
		] : [])
	]
}

module.exports = merge(baseConfig, config)
