const express = require('express');
const { asyncRoute, validator } = require('../../../shared/utils');
const authentication = require('../../../shared/middleware/authentication');
const UsersController = require('./usersController');
const usersSchema = require('./usersSchema');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', authentication, asyncRoute(UsersController.getUsers));
  router.post(
    '/',
    validator(usersSchema.createUser),
    asyncRoute(UsersController.createUser)
  );

  app.use('/users', router);
};
