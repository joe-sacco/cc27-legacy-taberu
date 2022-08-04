/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe_ingredient').insert([
    // Curry
    {recipe_id: 1, ingredient_id: 1},
    {recipe_id: 1, ingredient_id: 2},
    {recipe_id: 1, ingredient_id: 3},
    {recipe_id: 1, ingredient_id: 4},
    {recipe_id: 1, ingredient_id: 5},
    {recipe_id: 1, ingredient_id: 6},
    {recipe_id: 1, ingredient_id: 7},
    {recipe_id: 1, ingredient_id: 11},
    {recipe_id: 1, ingredient_id: 12},
    // Rice
    {recipe_id: 2, ingredient_id: 7},
    {recipe_id: 2, ingredient_id: 8},
    // Sunny Side Up Egg
    {recipe_id: 3, ingredient_id: 6},
    {recipe_id: 3, ingredient_id: 10},
    {recipe_id: 3, ingredient_id: 11},
    {recipe_id: 3, ingredient_id: 12},
    // Egg Omlette
    {recipe_id: 4, ingredient_id: 6},
    {recipe_id: 4, ingredient_id: 10},
    {recipe_id: 4, ingredient_id: 11},
    {recipe_id: 4, ingredient_id: 12},
    {recipe_id: 4, ingredient_id: 13},
    // Cream Stew
    {recipe_id: 5, ingredient_id: 2},
    {recipe_id: 5, ingredient_id: 3},
    {recipe_id: 5, ingredient_id: 4},
    {recipe_id: 5, ingredient_id: 5},
    {recipe_id: 5, ingredient_id: 6},
    {recipe_id: 5, ingredient_id: 7},
    {recipe_id: 5, ingredient_id: 11},
    {recipe_id: 5, ingredient_id: 12},
    {recipe_id: 5, ingredient_id: 13},
    {recipe_id: 5, ingredient_id: 15},
    // Stir Fried Mix Vegetable
    {recipe_id: 6, ingredient_id: 3},
    {recipe_id: 6, ingredient_id: 5},
    {recipe_id: 6, ingredient_id: 6},
    {recipe_id: 6, ingredient_id: 7},
    {recipe_id: 6, ingredient_id: 11},
    {recipe_id: 6, ingredient_id: 12},
    {recipe_id: 6, ingredient_id: 14},
    {recipe_id: 6, ingredient_id: 18},
    {recipe_id: 6, ingredient_id: 19},
    {recipe_id: 6, ingredient_id: 21},
    // Meat Sauce Spagetthi
    {recipe_id: 7, ingredient_id: 2},
    {recipe_id: 7, ingredient_id: 3},
    {recipe_id: 7, ingredient_id: 5},
    {recipe_id: 7, ingredient_id: 6},
    {recipe_id: 7, ingredient_id: 7},
    {recipe_id: 7, ingredient_id: 11},
    {recipe_id: 7, ingredient_id: 12},
    {recipe_id: 7, ingredient_id: 14},
    {recipe_id: 7, ingredient_id: 17},
    {recipe_id: 7, ingredient_id: 19},
    // Fried Rice
    {recipe_id: 8, ingredient_id: 3},
    {recipe_id: 8, ingredient_id: 5},
    {recipe_id: 8, ingredient_id: 6},
    {recipe_id: 8, ingredient_id: 9},
    {recipe_id: 8, ingredient_id: 10},
    {recipe_id: 8, ingredient_id: 11},
    {recipe_id: 8, ingredient_id: 12},
    {recipe_id: 8, ingredient_id: 14},
    {recipe_id: 8, ingredient_id: 19},
    // Hamburg
    {recipe_id: 9, ingredient_id: 2},
    {recipe_id: 9, ingredient_id: 3},
    {recipe_id: 9, ingredient_id: 6},
    {recipe_id: 9, ingredient_id: 10},
    {recipe_id: 9, ingredient_id: 11},
    {recipe_id: 9, ingredient_id: 12},
    {recipe_id: 9, ingredient_id: 15},
    {recipe_id: 9, ingredient_id: 17},
  ]);
};
