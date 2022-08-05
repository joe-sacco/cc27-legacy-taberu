const accountModel = require("../model/account");
const validator = require("./validation");

module.exports = {
  async createAccount(req, res) {
    const accountInfo = await req.body.body;
    console.log("🟥🟥🟥🟥🟥🟥🟥🟥");
    console.log(accountInfo);
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
        res.status(200).json({ id: associatedAccount.id });
      }
    }
  },

  async checkPinCode(req, res) {
    const idAndPin = await req.body;
    const [foundAccount] = await accountModel.checkPinCode(idAndPin);

    if (!foundAccount) {
      res.status(404).send("ACCOUNT NOT FOUND. WRONG PINCODE");
    } else {
      res.status(200).send("WELCOME TO PARENT PAGE");
    }
  },
};
