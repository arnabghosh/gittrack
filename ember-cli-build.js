/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var path = require('path');

module.exports = function(defaults) {
  var staticPathRoot = process.env.STATIC_ASSET_ROOT || 'assets/';
  var app = new EmberApp(defaults, {
    inlineContent: {
      'gittrack.js' : {
        content: staticPathRoot + 'ghtacker.js'
      },
      'gittrack.css' : {
        content: staticPathRoot + 'ghtacker.css'
      },
      'vendor.css' : {
        content: staticPathRoot + 'vendor.css'
      },
      'vendor.js' : {
        content: staticPathRoot + 'vendor.js'
      }
    }
    // Add options here
  });

  app.import('./bower_components/materialize/dist/js/materialize.js');
    app.import('./bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.eot', {
        destDir: 'fonts'
    });
    app.import('./bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.svg', {
        destDir: 'fonts'
    });
    app.import('./bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.ttf', {
        destDir: 'fonts'
    });
    app.import('./bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.woff', {
        destDir: 'fonts'
    });
    app.import('./bower_components/materialize/dist/font/material-design-icons/Material-Design-Icons.woff2', {
        destDir: 'fonts'
    });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
