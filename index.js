/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-adminlte-components',
  included: function(app) {
    this._super.included(app);
    app.import('node_modules/bootstrap/dist/css/bootstrap.css');
    app.import('node_modules/admin-lte/dist/css/skins/_all-skins.css');
    app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
    app.import('node_modules/admin-lte/dist/js/adminlte.min.js');
    app.import('vendor/shims/jquery.js');
  }
};
