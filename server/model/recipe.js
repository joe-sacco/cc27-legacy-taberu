const knex = require("../db/knex/knex");

const RECIPE_TABLE = "recipe";

module.exports = {
  RECIPE_TABLE,

  // selectRecipe() {
  //   return knex
  //     .select("*")
  //     .from(RECIPE_TABLE)
  //     .then((data) => console.log("MODEL", data));
  // },
  // firstName, lastName, email, password, pincode, image
  createRecipe(data) {
    return knex.insert(data).into(RECIPE_TABLE);
  },
};
