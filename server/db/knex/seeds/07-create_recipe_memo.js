/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('recipe_memo').insert([
    {account_id: 1, recipe_id: 1, memo: "Curry is the easiest dish, and adding the curry powder makes it flavourful."},
    {account_id: 1, recipe_id: 2, memo: "I added enough water so rice had balanced moisture and matching curry!"},
    {account_id: 2, recipe_id: 9, memo: "This is the best way to mince all ingredients and kids can eat everything!"},
    {account_id: 3, recipe_id: 3, memo: "This is a simple dish and adding extra vegetable oil helps making it more crispy and delicious."},
    {account_id: 4, recipe_id: 4, memo: "I want to try to add spinach and more vegetables to see if kids can take more vegetable."},
    {account_id: 5, recipe_id: 5, memo: "The balance of milk and flour is important to make it creamy."},
    {account_id: 6, recipe_id: 6, memo: "Did not like the vegetable. I will try to cut the vegetable smaller and try again!"},
    {account_id: 7, recipe_id: 7, memo: "I made the vegetable to small pices and added, kids didn't even know they were eating vegetable!"},
    {account_id: 8, recipe_id: 8, memo: "Need to wash the rice before so when cooked, the rice will fall apart and make it more delicious."},
    {account_id: 9, recipe_id: 9, memo: "This is the favorite dish and always finishes the meal!"},
    {account_id: 10, recipe_id: 8, memo: "This is a simple dish, I can cut all ingredients to small pieces and mix them together!"},
    {account_id: 11, recipe_id: 7, memo: "The meat sauce was too salty. I need to reduce the salt."},
    {account_id: 12, recipe_id: 6, memo: "The vegetable was cut small, so my kid didn't notice and finished the meal!"},
    {account_id: 13, recipe_id: 5, memo: "Need to marinate the meat overnight to make it tender and delicious!"},
    {account_id: 14, recipe_id: 4, memo: "By adding milk, it adds extra flavor!"},
    {account_id: 15, recipe_id: 3, memo: "Need to make the egg white crispy and the egg york to be half cooked!"},
  ]);
};
