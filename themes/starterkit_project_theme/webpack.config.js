// webpack.config.js
// with symfony encore https://symfony.com/doc/current/frontend/encore/installation.html

const Encore = require("@symfony/webpack-encore");

Encore.setOutputPath("build/")
  .setPublicPath("/build")
  .addEntry("app", "./assets/js/app.js")
  .enableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();
