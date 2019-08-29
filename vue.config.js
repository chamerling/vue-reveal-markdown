module.exports = {
  filenameHashing: false,
  configureWebpack:{
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all'
      }
    }
  }
};
