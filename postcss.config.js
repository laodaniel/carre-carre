module.exports = () => ({
  plugins: {
    'stylelint': {
      configFile: './.stylelintrc'
    },
    'postcss-cssnext': {
      browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
    }
  }
});
