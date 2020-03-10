const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.html', './src/**/*.jsx'],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

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
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
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
}
