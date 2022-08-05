const recipeModel = require("../model/recipe");
const validator = require("./validation");

module.exports = {
  async createRecipe(req, res) {
    const recipeInfo = await req.body;
    if (validator.validateNewRecipe(recipeInfo)) {
      await recipeModel.createRecipe(recipeInfo);
      res.status(201).send("RECIPE ADDED");
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },
};
