// this file isn't transpiled, so must use CommonJS and ESS

//Register babel to transpile before our tests run


require('babel-register')();

//disble webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};