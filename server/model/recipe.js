const knex = require("../db/knex/knex");

const RECIPE_TABLE = "recipe";
const DAILY_MENU_TABLE = "daily_menu";

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
};
