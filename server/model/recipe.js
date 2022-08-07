const knex = require("../db/knex/knex");

const RECIPE_TABLE = "recipe";
const DAILY_MENU_TABLE = "daily_menu";
const RECIPE_REVIEW_TABLE = "recipe_review";

module.exports = {
  RECIPE_TABLE,

  createRecipe(data) {
    return knex.insert(data).into(RECIPE_TABLE);
  },

  getRecipe() {
    return knex.select("*").from(RECIPE_TABLE);
  },

  createPlanMenu(data) {
    return knex.insert(data).into(DAILY_MENU_TABLE);
  },

  updatePlanMenu(data) {
    // WORK HERE!
    return knex(DAILY_MENU_TABLE)
      .where({ account_id: data.account_id, recipe_id: data.recipe_id })
      .update({ review_request: data.request_review });
  },

  getPlanMenu(receivedId) {
    return knex
      .select("recipe_id", "name", "date")
      .from(DAILY_MENU_TABLE)
      .where({ account_id: receivedId, review_request: true })
      .join("recipe", "daily_menu.recipe_id", "=", "recipe.id");
  },

  createRecipeReview(data) {
    return knex.insert(data).into(RECIPE_REVIEW_TABLE);
  },

  getRecipeReview(receivedId) {
    // send back recipe_id and review
    return knex
      .select("account_id", "family_id", "recipe_id", "name", "date", "review")
      .from(RECIPE_REVIEW_TABLE)
      .where({ account_id: receivedId })
      .join("recipe", "recipe_review.recipe_id", "=", "recipe.id");
  },
};
