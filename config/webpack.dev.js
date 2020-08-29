const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // The entry property indicates webpack which module webpack should use to begin building out its internal dependency graph
  entry: {
    main: ['./src/main.js', 'webpack-hot-middleware/client?reload=true', 'react-hot-loader/patch']
  },
  // The mode property indicates webpack which built-in optimization to use when creating the bundles
  mode: 'development',
  // The output property indicates webpack where to emit the bundles it creates and how to name these files
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  // The devServer property indicates webpack server from which directory to serve the files
  devServer: {
    contentBase: 'dist',
    // The overlay property enables webpack server to output errors directly on the webpage it is serving
    overlay: true,
    // The hot property enables webpack server to use hot module replacement
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  // The module property indicates webpack the set of rules to apply when processing other types of files and which loaders to use in order to process them
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        // The test property takes a regular expression which indicates which type of file/files should be transformed
        test: /\.css$/,
        // The use property indicates which loader/loaders should be used to do the transforming
        // Here the loaders will be applied in reverse order: The css-loader will be applied then the style-loader
        use: [
          // Indicates webpack to inject the style into the html file
          {
            loader: 'style-loader'
          },
          // Indicates webpack how to lint css files
          {
            loader: 'css-loader',
            query: {
              modules: true
            }
          }
        ]
      },
      {
        // Test to transform html files
        test: /\.html$/,
        use: [
          // The file-loader indicates webpack the name of the html files and inject them in the dist directory
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name].html'
          //   }
          // },
          // The extract-loader indicates webpack to extract html files and bundle them separately
          // {
          //   loader: 'extract-loader'
          // },
          // The html-loader indicates webpack how to lint html files
          {
            loader: 'html-loader',
            // Passing the options to the html-loader to indicate webpack we want to target the 'src' attribute of all image tags
            options: {
              attributes: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            // Using the file-loader to bundle images and passing it options to indicate webpack the target path and how to name the images with their respective file extensions
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
