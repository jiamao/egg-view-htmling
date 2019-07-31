'use strict';

module.exports = app => {
  app.view.use('htmling', require('./lib/view'));
};