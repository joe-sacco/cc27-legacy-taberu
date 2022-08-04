/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('recipe').insert([
    {id: 1, name: 'Curry'},
    {id: 2, name: 'Rice'},
    {id: 3, name: 'Sunny Side Up Egg'},
    {id: 4, name: 'Egg Omlette'},
    {id: 5, name: 'Cream Stew'},
    {id: 6, name: 'Stir Fried Mix Vegetable'},
    {id: 7, name: 'Meat Sauce Spagetthi'},
    {id: 8, name: 'Fried Rice'},
    {id: 9, name: 'Hamburg'},
  ]);
};