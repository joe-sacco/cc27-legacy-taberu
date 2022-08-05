/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('family').insert([
    {account_id: 1, first_name: 'Sarah', last_name: 'Koshelev'},
    {account_id: 2, first_name: 'David', last_name: 'Kugai'},
    {account_id: 3, first_name: 'Kyle', last_name: 'Kanetake'},
    {account_id: 4, first_name: 'Maya', last_name: 'Brown'},
    {account_id: 5, first_name: 'Hana', last_name: 'Wales'},
    {account_id: 6, first_name: 'Maria', last_name: 'Hofmann'},
    {account_id: 7, first_name: 'Jessica', last_name: 'Assis'},
    {account_id: 8, first_name: 'Lisa', last_name: 'Takeda'},
    {account_id: 9, first_name: 'Takeru', last_name: 'Niigata'},
    {account_id: 10, first_name: 'Gina', last_name: 'California'},
    {account_id: 11, first_name: 'Dona', last_name: 'Uema'},
    {account_id: 12, first_name: 'Britney', last_name: 'Machado'},
    {account_id: 13, first_name: 'Charles', last_name: 'Toyama'},
    {account_id: 14, first_name: 'Pauline', last_name: 'Haley'},
    {account_id: 15, first_name: 'Fiona', last_name: 'Sacco'},
  ]);
};
