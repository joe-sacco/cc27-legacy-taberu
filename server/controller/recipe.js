const accountModel = require("../model/recipe");
const validator = require("./validation");

module.exports = {
  async createRecipe(req, res) {
    if (validator.validateNewRecipe(recipeInfo)) {
      await accountModel.createRecipe(recipeInfo);
      res.status(201).send("RECIPE ADDED");
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },
};
