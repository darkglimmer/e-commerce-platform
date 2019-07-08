
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://e-commerce-platform/' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.14.199.222:8080',
        changeOrigin: true,
        secure: false,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  filenameHashing: false
}
