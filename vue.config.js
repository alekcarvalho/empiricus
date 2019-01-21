module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': require('path').resolve(__dirname, 'src') // change this to your folder path
      }
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/css/vars.scss";`
      },
      less: {
        modifyVars: {
          'primary-color': '#d40e36'
        },
        javascriptEnabled: true
      }
    }
  }
}
