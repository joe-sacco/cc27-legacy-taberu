/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('recipe').insert([
    {name: 'Curry'},
    {name: 'Rice'},
    {name: 'Sunny Side Up Egg'},
    {name: 'Egg Omlette'},
    {name: 'Cream Stew'},
    {name: 'Stir Fried Mix Vegetable'},
    {name: 'Meat Sauce Spagetthi'},
    {name: 'Fried Rice'},
    {name: 'Hamburg'},
  ]);
};