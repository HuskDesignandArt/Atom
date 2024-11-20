const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for production builds
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regex to target .js files
        exclude: /node_modules/, // Don't process node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(glb|gltf)$/, // Handle model files if needed
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
    open: true,
  },
};
