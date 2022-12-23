'use strict';
module.exports = function(app) {
  let healthcheckCtrl = require('./controllers/HealthCheck/HealthCheck');

  // todoList Routes
  app.route('/healthcheck')
    .get(healthcheckCtrl.get);
};