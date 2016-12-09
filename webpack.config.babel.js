const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const pkg = require('./package.json');

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;
const versions = Object.assign({}, pkg.devDependencies, pkg.dependencies);

Object.keys(versions).forEach((key) => {
  versions[key] = versions[key].replace('^', '').replace('~', '');
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
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
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  devServer: {
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
          })
        ]
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${prod ? 'production' : 'development'}"`
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html',
      title: 'Carre carre',
      hash: prod,
      chunksSortMode: 'none',
      vendors: [
        `//cdnjs.cloudflare.com/ajax/libs/react/${versions.react}/react.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/react/${versions['react-dom']}/react-dom.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/redux/${versions.redux}/redux.min.js`
      ].filter(() => prod).map(url => `<script src="${url}"></script>`).join('\n  '),
      devTools: dev ? '<div id="$$DevTools"></div>' : '',
      minify: prod ? {
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeCDATASectionsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseInlineTagWhitespace: true,
        preserveLineBreaks: false,
        collapseBooleanAttributes: true,
        removeTagWhitespace: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        preventAttributesEscaping: false,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true,
        removeEmptyElements: false
      } : false
    }
  )]
};
