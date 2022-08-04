/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('recipe_menu').insert([
    {account_id: 1, recipe_id: 1, review_request: true, date: "2022-07-01"},
    {account_id: 1, recipe_id: 2, review_request: true, date: "2022-07-01"},
    {account_id: 2, recipe_id: 9, review_request: true, date: "2022-07-02"},
    {account_id: 3, recipe_id: 3, review_request: true, date: "2022-07-03"},
    {account_id: 4, recipe_id: 4, review_request: true, date: "2022-07-04"},
    {account_id: 5, recipe_id: 5, review_request: true, date: "2022-07-05"},
    {account_id: 6, recipe_id: 6, review_request: true, date: "2022-07-06"},
    {account_id: 7, recipe_id: 7, review_request: true, date: "2022-07-07"},
    {account_id: 8, recipe_id: 8, review_request: true, date: "2022-07-08"},
    {account_id: 9, recipe_id: 9, review_request: true, date: "2022-07-09"},
    {account_id: 10,  recipe_id: 8, review_request: true, date: "2022-07-10"},
    {account_id: 11,  recipe_id: 7, review_request: true, date: "2022-07-11"},
    {account_id: 12,  recipe_id: 6, review_request: true, date: "2022-07-12"},
    {account_id: 13,  recipe_id: 5, review_request: true, date: "2022-07-13"},
    {account_id: 14,  recipe_id: 4, review_request: true, date: "2022-07-14"},
    {account_id: 15,  recipe_id: 3, review_request: true, date: "2022-07-15"},
    {account_id: 2, recipe_id: 1, review_request: true, date: "2022-08-05"},
    {account_id: 2, recipe_id: 2, review_request: true, date: "2022-08-05"},
    {account_id: 3, recipe_id: 9, review_request: true, date: "2022-08-06"},
    {account_id: 1, recipe_id: 3, review_request: true, date: "2022-08-07"},
  ]);
};
