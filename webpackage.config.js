const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for production builds
  entry: './src/index.js', // Entry point for the app
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Handle .js files
        exclude: /node_modules/, // Do not process node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile
          options: {
            presets: ['@babel/preset-env'], // Use the Babel preset
          },
        },
      },
      {
        test: /\.(glb|gltf)$/, // Handle .glb/.gltf files
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
