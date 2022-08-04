const knex = require("../db/knex/knex");

const RECIPE_TABLE = "recipe";

module.exports = {
  RECIPE_TABLE,

  createRecipe(data) {
    return knex.insert(data).into(RECIPE_TABLE);
  },
};
