const path = require('path')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const baseConfig = require('./webpack.base')

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.html', './src/**/*.jsx'],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

const isDev = process.env.NODE_ENV === 'development'

const tailwindcss = {
	loader: 'postcss-loader',
	options: {
		ident: 'postcss',
		plugins: [
			require('tailwindcss'),
			require('autoprefixer'),
			...(isDev ? [] : [purgecss]),
		],
	},
}

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
					tailwindcss,
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/assets/index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: 'style.build.css',
		}),
	],
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			'@assets': path.join(__dirname, 'src/assets'),
			'@store': path.join(__dirname, 'src/store'),
		},
	},
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
