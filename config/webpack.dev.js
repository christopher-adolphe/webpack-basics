const path = require('path');

module.exports = {
  // The entry property indicates webpack which module webpack should use to begin building out its internal dependency graph
  entry: {
    main: ['./src/main.js']
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
    contentBase: 'dist'
  },
  // The module property indicates webpack the set of rules to apply when processing other types of files and which loaders to use in order to process them
  module: {
    rules: [
      {
        // The test property indicates which file/files should be transformed
        test: /\.css$/,
        // The use property indicates which loader/loaders should be used to do the transforming
        // Here the loaders will be applied in reverse order: The css-loader will lint the css file and then the style-loader will inject the stylesheet into the html file
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}
