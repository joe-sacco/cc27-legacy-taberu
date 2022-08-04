const accountModel = require("../model/account");
const dataValidated = require("./validation");

module.exports = {
  async createAccount(req, res) {
    const accountInfo = await req.body;
    await accountModel.createAccount(accountInfo);
    res.status(201).send("ACCOUNT CREATED");
  },

  async authenticateAccount(req, res) {
    const loginInfo = await req.body;
    const [associatedAccount] = await accountModel.authenticateAccount(
      loginInfo
    );
    if (!associatedAccount) {
      res.status(404).send("ACCOUNT NOT FOUND");
    } else {
      res.status(201).json({ id: associatedAccount.id });
    }
  },
};
