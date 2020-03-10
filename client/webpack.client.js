const path = require('path')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const baseConfig = require('./webpack.base')

const isDev = process.env.NODE_ENV === 'development'

const config = {
	entry: './src/index.jsx',
	mode: isDev ? 'development' : 'production',
	output: {
		filename: './bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: 'assets/[name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/assets/index.html'),
		}),
	],
	optimization: isDev
		? undefined
		: {
				minimize: true,
				minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
		  },
	devtool: isDev ? 'inline-source-map' : 'source-map',
	stats: {
		modules: false,
		children: false,
	},
}

module.exports = merge(baseConfig, config)
