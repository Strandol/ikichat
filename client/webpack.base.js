const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	mode: isDev ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/i,
				loader: 'file-loader',
				options: {
					name: 'assets/[name].[ext]',
				},
			},
		],
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			'@assets': path.join(__dirname, 'src/assets'),
			'@store': path.join(__dirname, 'src/store'),
			'@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js'),
		},
	},
}
