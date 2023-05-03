const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PostCSSVariables = require('postcss-css-variables');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const sharp = require('sharp');

module.exports = {
	mode: 'production',
	entry: {
		bundle: path.resolve(__dirname, 'src/index.tsx'),
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: 'auto',
		filename: '[name].[contenthash].js',
		clean: true,
		assetModuleFilename: '[name][ext]',
	},
	cache: false,
	devServer: {
		static: [
			{
				directory: path.resolve(__dirname, 'build'),
			},
			{
				directory: path.resolve(__dirname, 'public'),
			},
		],
		port: process.env.PORT || 3000,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					StringReplacePlugin.replace({
						replacements: [
							{
								pattern: /<img([^>]+)src={('[^`]+')}([^>]*)\/>/g,
								replacement: (_, p1, p2, p3) => {
									const [filename, fileExt] = p2.slice(1, -1).split('.');
									const srcset = [480, 768, 1024, 1280, 1366, 1440, 1680, 1920]
										.map(
											(size) =>
												`${filename}-${size}.${fileExt} ${size}w, ${filename}-${size}.webp ${size}w`
										)
										.join(', ');

									return `<img ${p1} srcSet="${srcset}" ${p3} />`;
								},
							},
						],
					}),
				],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									PostCSSVariables({
										preserve: true,
									}),
								],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
				],
			},
			{
				test: /\.svg$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]',
				},
				include: [path.resolve(__dirname, 'public')],
				use: ['file-loader'],
			},
			{
				test: /\.(jpe?g|png|webp)$/i,
				exclude: /node_modules/,
				type: 'asset',
				generator: {
					filename: 'images/[name]-[width].[ext]',
				},
				include: [path.resolve(__dirname, 'public')],
				use: [
					{
						loader: 'responsive-loader',
						options: {
							adapter: require('responsive-loader/sharp'),
							sizes: [480, 768, 1024, 1280, 1366, 1440, 1680, 1920],
							name: '[name]-[width].[ext]',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							webp: {
								quality: 100,
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			title: 'QDS Software',
			template: './public/index.html',
			favicon: './public/favicon.ico',
			filename: './index.html',
			minify: {
				html5: true,
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public/images',
					to: 'images/',
				},
			],
		}),
		new ImageMinimizerPlugin({
			test: /\.(jpe?g|png|webp)$/i,
			exclude: /node_modules/,
			deleteOriginalAssets: true,
			loader: false,
			minimizer: [480, 768, 1024, 1280, 1366, 1440, 1680, 1920].map(
				(width) => ({
					filename: `[name]-${width}.webp`,
					implementation: async (original, options) => {
						const [fileName, fileExt] = (
							original?.info?.sourceFilename || original.filename
						).split('.');
						console.log(original?.info?.sourceFilename);
						let resizedImage;
						// return new Promise(async (resolve, reject) => {
						switch (fileExt) {
							case 'jpg':
							case 'jpeg':
							case 'png':
								resizedImage = await sharp(original.data)
									.resize(width)
									.toBuffer();
								break;
							case 'webp':
								resizedImage = await sharp(original.data)
									.resize(width)
									.jpeg({ quality: 100 })
									.toBuffer();
								break;
							default:
								return null;
						}

						return {
							filename: `${fileName}-${width}.${fileExt}`,
							data: resizedImage,
							warnings: [],
							errors: [],
							info: {
								...original.info,
								minimized: true,
								minimizedBy: ['sharp-minimizer'],
							},
						};
					},
				})
			),
		}),
		new ImageminWebpWebpackPlugin({
			config: [
				{
					test: /\.(jpe?g|png)/,
					options: {
						quality: 75,
						method: 6,
					},
				},
			],
			overrideExtension: true,
			detailedLogs: true,
			silent: false,
			strict: true,
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					keep_classnames: true,
					keep_fnames: true,
				},
			}),
		],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};
