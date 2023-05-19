const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
process.env.mode = 'ONLINE';

module.exports = merge(baseConfig, {
	mode: 'production',
	performance: {
		hints: 'warning',
		maxAssetSize: 200000,
		maxEntrypointSize: 400000,
		assetFilter: function(assetFilename) {
			return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
		}
	},
	optimization: {
		minimize: true,
	},
	devtool: false,
	plugins: [
		new UglifyJSPlugin({
			uglifyOptions: {
				ecma: 6,
				ie8: true
			},
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			__ENV_MODE__: JSON.stringify('production')
		})
	]
});
