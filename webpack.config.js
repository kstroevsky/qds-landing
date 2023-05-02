const webpack = import('webpack')
const path = import('path')
const HtmlWebpackPlugin = import('html-webpack-plugin')
const MiniCssExtractPlugin = import('mini-css-extract-plugin')
const { CleanWebpackPlugin } = import('clean-webpack-plugin')
const TerserPlugin = import('terser-webpack-plugin')
const ImageMinimizerPlugin = import('image-minimizer-webpack-plugin');
const ImageminPlugin = import('imagemin-webpack-plugin').default;
const imageminWebp = import('imagemin-webp');

// import webpack from "webpack";
// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import {CleanWebpackPlugin} from "clean-webpack-plugin";
// import TerserPlugin from "terser-webpack-plugin";
// import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
// import ImageminWebpackPlugin from "imagemin-webpack-plugin";
// import imageminWebp from "imagemin-webp";

module.exports = {
    mode: 'production',
    entry: {
        // bundle: path.resolve(__dirname, 'src/index.tsx'),
        bundle: path.resolve(__dirname, 'src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
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
                directory: path.resolve(__dirname, 'build')
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
        ),
        new ImageminPlugin({
            test: /\.(jpe?g|png)$/i,
            cacheFolder: './cache/',
            jpegtran: {
                progressive: true
            },
            plugins: [
                imageminWebp({
                    quality: 75
                }),
                imageminAvif({
                    quality: 75
                })
            ]
        })
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