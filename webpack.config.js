const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.tsx'),
        webworker: path.resolve(
            __dirname,
            'src/shared/WebApi/web-workers/canvas-worker.ts'
        )
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    cache: {
        type: 'memory'
    },
    devServer: {
        static: [
            {
                directory: path.resolve(__dirname, 'dist')
            },
            {
                directory: path.resolve(__dirname, 'public')
            }
        ],
        port: process.env.PORT || 3000,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader', 'glslify-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash:8].[ext]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    },
                    {
                        loader: 'webp-loader',
                        options: {
                            quality: 75
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title: 'Bindfly Gallery',
            template: './public/index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // ...other image minimizer options...
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.NormalModuleReplacementPlugin(
            /(\.png)|(\.jpe?g)$/i,
            resource => {
                const { userRequest } = resource;
                if (/\.(png|jpe?g)$/.test(userRequest)) {
                    const isWebpSupported = resource.context
                        .minimize // webpack v4
                        ?.optimization
                        ?.minimizer
                        ?.find(
                            m =>
                                m.constructor.name === 'TerserPlugin' &&
                                m.options.terserOptions.output.webp.enabled
                        );
                    resource.request = isWebpSupported
                        ? userRequest.replace(/\.(png|jpe?g)$/, '.webp')
                        : userRequest;
                }
            }
        )
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}