/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('family').insert([
    {id: 1, account_id: 1, first_name: 'Sergei', last_name: 'Koshelev'},
    {id: 2, account_id: 2, first_name: 'Tomomi', last_name: 'Kugai'},
    {id: 3, account_id: 3, first_name: 'Hiro', last_name: 'Kanetake'},
    {id: 4, account_id: 4, first_name: 'Zach', last_name: 'Brown'},
    {id: 5, account_id: 5, first_name: 'Jon', last_name: 'Wales'},
    {id: 6, account_id: 6, first_name: 'Tom', last_name: 'Hofmann'},
    {id: 7, account_id: 7, first_name: 'Julio', last_name: 'Assis'},
    {id: 8, account_id: 8, first_name: 'Takashi', last_name: 'Takeda'},
    {id: 9, account_id: 9, first_name: 'Kurumi', last_name: 'Niigata'},
    {id: 10, account_id: 10, first_name: 'Kim', last_name: 'California'},
    {id: 11, account_id: 11, first_name: 'Daiki', last_name: 'Uema'},
    {id: 12, account_id: 12, first_name: 'Felipe', last_name: 'Machado'},
    {id: 13, account_id: 13, first_name: 'Marie', last_name: 'Toyama'},
    {id: 14, account_id: 14, first_name: 'Josh', last_name: 'Haley'},
    {id: 15, account_id: 15, first_name: 'Joe', last_name: 'Sacco'},
  ]);
};
