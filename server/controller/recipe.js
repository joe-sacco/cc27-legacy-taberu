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
  async getRecipe(req, res) {
    const recipes = await req.body;
    if (recipes.length === 0) {
      res.status(404).send("THERE ARE NO RECIPES AVAILABLE");
    } else {
      const allRecipes = await recipeModel.getRecipe();
      res.status(200).json(allRecipes);
    }
  },

  async createPlanMenu(req, res) {
    const recipePlanObject = await req.body;

    recipePlanObject.date = new Date();

    if (validator.validateRecipePlan(recipePlanObject)) {
      await recipeModel.createPlanMenu(recipePlanObject);
      res.status(201).send("CREATED");
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },

  async getPlanMenu(req, res) {
    const account_id = (await req.query.account_id)
      ? Number(req.query.account_id)
      : undefined;

    if (account_id && validator.validateFamilyAccountId(account_id)) {
      const planMenu = await recipeModel.getPlanMenu(account_id);
      res.status(200).json(planMenu);
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },

  async createRecipeReview(req, res) {
    const recipeReviewObject = await req.body;

    recipeReviewObject.date = new Date();

    if (validator.validateRecipeReview(recipeReviewObject)) {
      await recipeModel.createRecipeReview(recipeReviewObject);
      console.log(recipeReviewObject);
      res.status(201).send("CREATED");
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },
};
