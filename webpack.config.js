const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'build'), // Output folder
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to all .js files (including .jsx)
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for JS and React
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing .js and .jsx without specifying extensions
  },
  mode: 'development', // Set mode to 'development'
};
