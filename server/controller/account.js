const accountModel = require("../model/account");
const validator = require("./validation");

module.exports = {
  async createAccount(req, res) {
    const accountInfo = await req.body;
    if (validator.validateNewAccount(accountInfo)) {
      await accountModel.createAccount(accountInfo);
      res.status(201).send("ACCOUNT CREATED");
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },

  async authenticateAccount(req, res) {
    const loginInfo = await req.body;

    if (!validator.validateCredentials(loginInfo)) {
      res.status(406).send("BAD DATA. TRY AGAIN");
    } else {
      const [associatedAccount] = await accountModel.authenticateAccount(
        loginInfo
      );

      if (!associatedAccount) {
        res.status(404).send("ACCOUNT NOT FOUND");
      } else {
        res.status(201).json({ id: associatedAccount.id });
      }
    }
  },
};
