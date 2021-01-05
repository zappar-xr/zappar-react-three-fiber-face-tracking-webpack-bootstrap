const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	resolve: {
		extensions: [".js", ".wasm"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		contentBase: './dist',
		https: true,
		host: "0.0.0.0",
		hot: true,
		open: true,
	},
	module: {
		rules: [{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /zcv\.wasm$/,
				type: "javascript/auto",
				loader: "file-loader"
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						]
					},
				},
			}
		]
	}
};
