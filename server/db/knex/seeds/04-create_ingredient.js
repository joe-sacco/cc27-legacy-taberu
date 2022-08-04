/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('ingredient').insert([
    {name: 'Curry Powder'},
    {name: 'Beef'},
    {name: 'Onion'},
    {name: 'Potato'},
    {name: 'Carrot'},
    {name: 'Vegetable Oil'},
    {name: 'Water'},
    {name: 'Uncooked Rice'},
    {name: 'Cooked Rice'},
    {name: 'Egg'},
    {name: 'Salt'},
    {name: 'Pepper'},
    {name: 'Milk'},
    {name: 'Tomato'},
    {name: 'Flour'},
    {name: 'Chicken'},
    {name: 'Pork'},
    {name: 'Spinach'},
    {name: 'Garlic'},
    {name: 'Lettus'},
    {name: 'Cabbage'},
    {name: 'Pasta'},
    {name: 'Bacon'},
    {name: 'Ham'},
    {name: 'Bread Crust'},
  ]);
};