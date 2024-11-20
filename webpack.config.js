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
        test: /\.js$/, // Process .js files
        include: [
          path.resolve(__dirname, 'src'), // Include your source files
          path.resolve(__dirname, 'node_modules/three'), // Ensure Three.js is transpiled
        ],
        use: {
          loader: 'babel-loader', // Use Babel loader
          options: {
            presets: ['@babel/preset-env'], // Transpile modern JavaScript
          },
        },
      },
      {
        test: /\.(glb|gltf)$/, // Handle model files
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'models/',
              name: '[name].[ext]', // Output model files with original names
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: './dist', // Serve content from the 'dist' folder
    open: true, // Automatically open the browser
  },
};
