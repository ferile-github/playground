const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')
const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const imageminSvgo = require('imagemin-svgo')


module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'assets'),
	entry: {
		main: './src/index.ts'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'assets/dist'),
		clean: true,
		publicPath: './',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	watchOptions: {
		ignored: [
			'**/node_modules/**',
			'**/assets/dist/**',
			'**/acf-json/**/*.json',
			'**/assets/src/images/**/*.{png,jpg,jpeg,gif,svg}',
			'**/vendor/**',
			'**/.git/**',
		],
		aggregateTimeout: 300,
		poll: false, // Disable polling to prevent excessive file system checks
	},
	plugins: [
		new MiniCssExtractPlugin(),
		// Custom plugin for webpack 5 compatibility - processes external images
		{
			apply: (compiler) => {
				compiler.hooks.done.tapPromise('OptimizeExternalImages', async () => {
					const imageSources = glob.sync('assets/src/images/**/*.{png,jpg,jpeg,gif}')
					const svgSources = glob.sync('assets/src/svg/**/*.svg')
					const sources = [...imageSources, ...svgSources]

					if (sources.length > 0) {
						try {
							await imagemin.default(sources, {
								destination: 'assets/dist',
								plugins: [
									imageminMozjpeg.default({ quality: 80 }),
									imageminPngquant.default({ quality: [0.6, 0.8] }),
									imageminSvgo.default(),
								],
							})
						} catch (error) {
							console.error('Image optimization error:', error)
						}
					}
				})
			},
		},
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, {
						loader: 'css-loader',
						options: {
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									require('postcss-nested'),
									require('postcss-import'),
									require('@tailwindcss/postcss'),
									require('postcss-utopia')({
										minWidth: 375, // Default minimum viewport
										maxWidth: 1400, // Default maximum viewport
										relativeTo: 'container'
									}),
									require('postcss-pxtorem')({
										rootValue: 16,
										unitPrecision: 5,
										propList: ['*'],
										selectorBlackList: [],
										replace: true,
										mediaQuery: true,
										minPixelValue: 0,
										exclude: /node_modules/i
									}),
								],
							},
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2)$/i,
				type: 'asset/resource'
			},
		],
	}
}
