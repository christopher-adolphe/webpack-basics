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
    contentBase: 'dist',
    // The overlay property enables webpack server to output errors directly on the webpage it is serving
    overlay: true
  },
  // The module property indicates webpack the set of rules to apply when processing other types of files and which loaders to use in order to process them
  module: {
    rules: [
      {
        // The test property indicates which file/files should be transformed
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
            loader: 'css-loader'
          }
        ]
      },
      {
        // Test to transform html files
        test: /\.html$/,
        use: [
          // The file-loader indicates webpack the name of the html files and inject them in the dist directory
          {
            loader: 'file-loader',
            options: {
              name: '[name].html'
            }
          },
          // The extract-loader indicates webpack to extract html files and bundle them separately
          {
            loader: 'extract-loader'
          },
          // The html-loader indicates webpack how to lint html files
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  }
}
