const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = () => process.env.NODE_ENV === 'development'

module.exports = {
	entry: './src/index.jsx',
	mode: 'development',
	output: {
		filename: './index.build.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
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
							hmr: isDev(),
						},
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [require('tailwindcss'), require('autoprefixer')],
						},
					},
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
			Assets: path.join(__dirname, 'src/assets'),
		},
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		stats: 'minimal',
		port: process.env.DEV_SERVER_PORT || 3000,
		watchContentBase: true,
		progress: true,
		overlay: true,
		open: true,
	},
	devtool: isDev() ? 'eval-cheap-module-source-map' : 'source-map',
	stats: {
		modules: false,
		children: false,
	},
}