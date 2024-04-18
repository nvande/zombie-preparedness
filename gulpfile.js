const uswds = require("@uswds/compile");

/**
* USWDS version
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

uswds.paths.dist.theme = './src/sass';
uswds.paths.dist.css = './src/assets/uswds/css';
uswds.paths.dist.img = './src/assets/uswds/img';
uswds.paths.dist.js = './src/assets/uswds/js';
uswds.paths.dist.fonts = './src/assets/uswds/fonts';

exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.update = uswds.updateUswds;
exports.default = uswds.watch;
