/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries that has primary keys
  await knex.raw('TRUNCATE account, family, recipe, ingredient RESTART IDENTITY CASCADE');
};