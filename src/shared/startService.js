if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}
const startApp = require('./server/startApp');

const { NODE_ENV } = process.env;
const serviceName = process.argv[2];
const app = startApp(serviceName);
const port = process.env[`${serviceName.toUpperCase()}_PORT`];

const server = app.listen(port, () => {
  console.log(`${serviceName} service (env: ${NODE_ENV}) started on ${port}`); //eslint-disable-line
});

module.exports = server;
