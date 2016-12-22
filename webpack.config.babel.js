const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const versions = Object.assign({}, pkg.devDependencies, pkg.dependencies);
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'stage-0', 'react']
        },
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?-autoprefixer&-colormin&modules&importLoaders=1&localIdentName=[name]_[local]!postcss-loader'
        })
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.json', '.css']
  },
  context: __dirname,
  target: 'web',
  devtool: 'eval',
  devServer: {
  },
/*  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    redux: 'Redux'
  },*/
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html',
      title: 'Carre carre',
      vendors: [
        `//cdnjs.cloudflare.com/ajax/libs/react/${versions.react}/react.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/react/${versions['react-dom']}/react-dom.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/react-redux/${versions['react-redux']}/react-redux.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/redux/${versions.redux}/redux.min.js`,
      ].map((url) => `<script src="${url}"></script>`).join('\n  ')
    }
  )]
};
