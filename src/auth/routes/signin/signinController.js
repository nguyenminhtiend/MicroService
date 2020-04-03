const signinService = require('./signinService');

module.exports = {
  async password(req, res) {
    const result = await signinService.signinPassword(req.body);
    res.json(result);
  }
};
