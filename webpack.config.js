const path = require('path');
const combineLoaders = require('combine-loader');
const SRC_DIR = path.join(__dirname, 'client');
const DIST_DIR = path.join(__dirname, 'public/dist');
module.exports = {

  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: combineLoaders([
      //     {
      //       loader: 'style-loader'
      //     }, {
      //       loader: 'css-loader',
      //       query: {
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     }
      //   ])
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    //   {
    //     test: /\.css$/,
    //     loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
    // }
    ]
  }
}