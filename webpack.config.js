const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    // menu: "./src/menu.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
  },
  // optimization: {
  //   splitChunks: {
  //     // include all types of chunks
  //     chunks: 'all'
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      title: "Development",
      // inject: true,
      // chunks: ["index"]

      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    // new HtmlWebpackPlugin({
    //   filename: "menu.html",
    //   template: "./src/menu.html",
    //   inject: true,
    //   chunks: ["menu"]
    // }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    // new ImageMinimizerPlugin({
    //   minimizerOptions: {
    //     // Lossless optimization with custom option
    //     // Feel free to experiment with options for better result for you
    //     plugins: [
    //       // ["gifsicle", { interlaced: true }],
    //       ["jpegtran", { progressive: true }],
    //       ["optipng", { optimizationLevel: 7 }],
    //       // Svgo configuration here https://github.com/svg/svgo#configuration
    //       // [
    //       //   "svgo",
    //       //   {
    //       //     plugins: extendDefaultPlugins([
    //       //       {
    //       //         name: "removeViewBox",
    //       //         active: false,
    //       //       },
    //       //       {
    //       //         name: "addAttributesToSVGElement",
    //       //         params: {
    //       //           attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
    //       //         },
    //       //       },
    //       //     ]),
    //       //   },
    //       // ],
    //     ],
    //   },
    // }),
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              useRelativePath: true,
            },
          },
        ],
      },
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "sound/",
              useRelativePath: true,
            },
          },
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         // outputPath: "sound/",
      //         // useRelativePath: true,
      //       }
      //     }
      //   ],
      //   exclude: path.resolve(__dirname, './src/index.html')
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
