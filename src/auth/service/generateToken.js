const jwt = require('jsonwebtoken');

const { PRIVATE_KEY } = process.env;

module.exports = (data) => {
  return jwt.sign(data, PRIVATE_KEY, { algorithm: 'RS256' });
};
