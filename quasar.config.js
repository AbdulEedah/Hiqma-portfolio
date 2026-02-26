const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    boot: [],
    css: ['app.scss'],
    extras: [
      'roboto-font',
      'material-icons',
      'fontawesome-v6'
    ],
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16'
      },
      vueRouterMode: 'hash',
      minify: true,
      extractCSS: true,
      gzip: true,
      analyze: false
    },
    devServer: {
      open: true,
      hmr: {
        overlay: false
      }
    },
    framework: {
      config: {},
      plugins: ['Notify', 'Loading', 'Dialog']
    },
    animations: []
  }
});
