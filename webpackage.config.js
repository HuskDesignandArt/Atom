const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js', // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // Use 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.(glb|gltf)$/, // Add loaders for models if necessary
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'models/',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: './dist',
    open: true, // Automatically open the browser
  },
};
