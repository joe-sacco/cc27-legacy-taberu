const accountModel = require("../model/recipe");
const dataValidated = require("./validation");

module.exports = {
  async createRecipe(req, res) {
    if (validator.validateNewAccount(recipeInfo)) {
      await accountModel.createAccount(recipeInfo);
      res.status(201).send("RECIPE ADDED");
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },
};
