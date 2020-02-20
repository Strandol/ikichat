const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

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

module.exports = {
	entry: './src/index.jsx',
	mode: isDev ? 'development' : 'production',
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
		})
	],
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			'@assets': path.join(__dirname, 'src/assets'),
			'@store': path.join(__dirname, 'src/store'),
		},
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
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
	devtool: isDev ? 'inline-source-map' : 'source-map',
	stats: {
		modules: false,
		children: false,
	},
}
