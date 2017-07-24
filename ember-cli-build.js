/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    }
  });

  app.import('bower_components/ember/ember-template-compiler.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css')
  return app.toTree();
};
