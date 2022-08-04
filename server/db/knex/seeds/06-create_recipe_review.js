/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // review: 1 = happy, 2 = unhappy
  await knex('recipe_review').insert([
    {account_id: 1, family_id: 1, recipe_id: 1, date: "2022-07-01", review: 1},
    {account_id: 1, family_id: 1, recipe_id: 2, date: "2022-07-01", review: 1},
    {account_id: 2, family_id: 2, recipe_id: 9, date: "2022-07-02", review: 1},
    {account_id: 3, family_id: 3, recipe_id: 3, date: "2022-07-03", review: 1},
    {account_id: 4, family_id: 4, recipe_id: 4, date: "2022-07-04", review: 1},
    {account_id: 5, family_id: 5, recipe_id: 5, date: "2022-07-05", review: 1},
    {account_id: 6, family_id: 6, recipe_id: 6, date: "2022-07-06", review: 0},
    {account_id: 7, family_id: 7, recipe_id: 7, date: "2022-07-07", review: 1},
    {account_id: 8, family_id: 8, recipe_id: 8, date: "2022-07-08", review: 1},
    {account_id: 9, family_id: 9, recipe_id: 9, date: "2022-07-09", review: 1},
    {account_id: 10, family_id: 10, recipe_id: 8, date: "2022-07-10", review: 1},
    {account_id: 11, family_id: 11, recipe_id: 7, date: "2022-07-11", review: 0},
    {account_id: 12, family_id: 12, recipe_id: 6, date: "2022-07-12", review: 1},
    {account_id: 13, family_id: 13, recipe_id: 5, date: "2022-07-13", review: 1},
    {account_id: 14, family_id: 14, recipe_id: 4, date: "2022-07-14", review: 1},
    {account_id: 15, family_id: 15, recipe_id: 3, date: "2022-07-15", review: 1},
  ]);
};
