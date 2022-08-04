const accountModel = require("../model/account");
const dataValidated = require("./validation");

module.exports = {
  async createAccount(req, res) {
    const accountInfo = await req.body;
    await accountModel.createAccount(accountInfo);
    res.status(201).send("SUCCESS MESSAGE");
  },

  async getAccount(req, res) {
    //
  },
};
