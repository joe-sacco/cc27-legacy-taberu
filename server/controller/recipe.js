const accountModel = require("../model/recipe");
// const dataValidated = require("./validation");

module.exports = {
  async createRecipe(req, res) {
    console.log("🔴🔴🔴🔴")
    const recipeInfo = await req.body;
    await accountModel.createRecipe(recipeInfo);
    res.status(201).send("SUCCESS MESSAGE");
  },

//   async getRecipe(req, res) {
//     //
//   },
};
