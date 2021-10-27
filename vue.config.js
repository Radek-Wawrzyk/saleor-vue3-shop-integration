module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/styles/modules/variables.scss";',
      },
    },
  },
};
