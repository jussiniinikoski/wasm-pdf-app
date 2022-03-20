const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
          from: 'index.html'
        },
        {
          from: 'text-example.json'
        },
        {
          from: 'pizza.jpg'
        },
      ],
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
  mode: "development"
};