const path = require('path')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const baseConfig = require('./webpack.base')

const isDev = process.env.NODE_ENV === 'development'

const config = {
	entry: './src/index.jsx',
	output: {
		filename: './client.js',
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
			{
				test: /\.(s[ac]ss|css)$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new OptimizeCSSAssetsPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.build.css',
		}),
		...(isDev
			? [
					new HtmlWebpackPlugin({
						template: path.join(__dirname, 'src/assets/index.html'),
					}),
			  ]
			: []),
	],
	optimization: isDev
		? undefined
		: {
				minimize: true,
				minimizer: [new TerserPlugin()],
		  },
	devtool: isDev ? 'inline-source-map' : false,
	stats: {
		modules: false,
		children: false,
	},
	devServer: {
		compress: true,
		stats: 'minimal',
		port: process.env.DEV_SERVER_PORT || 8000,
		watchContentBase: true,
		historyApiFallback: true,
		progress: true,
		overlay: true,
		open: true,
	},
}

module.exports = merge(baseConfig, config)
