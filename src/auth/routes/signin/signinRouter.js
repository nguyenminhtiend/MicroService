const express = require('express');
const { asyncRoute, validator } = require('../../../shared/utils');
const signinController = require('./signinController');
const signinSchema = require('./signinSchema');

module.exports = (app) => {
  const router = express.Router();

  router.post(
    '/password',
    validator(signinSchema.password),
    asyncRoute(signinController.password)
  );

  app.use('/signin', router);
};
