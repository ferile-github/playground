const { merge } = require('webpack-merge')
const common = require('./webpack.config.common')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier');
require('dotenv').config()

module.exports = merge(common, {
	mode: 'development',
	watch: true,
	devtool: 'source-map',
	plugins: [
		// new BrowserSyncPlugin({
		// 	host: 'localhost',
		// 	port: process.env.PORT
		// }),
		new WebpackNotifierPlugin({
			title: function (params) {
				return `Build status is ${params.status} with message ${params.message}`
			},
			alwaysNotify: true,
			emoji: true,
			sound: true,
			onlyOnError: true,
			excludeWarnings: true,
			skipFirstNotification: false,
		}),
	],
})





