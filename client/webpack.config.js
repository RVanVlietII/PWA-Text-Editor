const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './public/js/index.js',
      install: './public/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
      new HtmlWebpackPlugin({
        template: './index.html',
        chunks: ['main'],
        filename: 'index.html',
      }),

    
      new WebpackPwaManifest({
        name: 'Your Text Editor',
        short_name: 'Text Editor',
        description: 'A Progressive Web App text editor',
        background_color: '#ffffff',
        theme_color: '#000000',
      }),

     
      new InjectManifest({
        swSrc: './service-worker.js',
        swDest: 'service-worker.js',
      }),

      
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],

    module: {
      rules: [
       
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },

        
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
