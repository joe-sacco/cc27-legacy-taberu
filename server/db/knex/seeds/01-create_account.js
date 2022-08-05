/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('account').insert([
    {first_name: 'Sergei', last_name: 'Koshelev', email: 'sergeik@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Tomomi', last_name: 'Kugai', email: 'tomomik@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Hiro', last_name: 'Kanetake', email: 'hiroki@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Zach', last_name: 'Brown', email: 'zachb@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Jon', last_name: 'Wales', email: 'jonw@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Tom', last_name: 'Hofmann', email: 'tomh@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Julio', last_name: 'Assis', email: 'julioa@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Takashi', last_name: 'Takeda', email: 'takashit@@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Kurumi', last_name: 'Niigata', email: 'kurumik@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Kim', last_name: 'California', email: 'kimc@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Daiki', last_name: 'Uema', email: 'daikiu@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Felipe', last_name: 'Machado', email: 'felipem@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Marie', last_name: 'Toyama', email: 'mariet@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Josh', last_name: 'Haley', email: 'joshh@sample.com', password: 'password', pincode: 1234},
    {first_name: 'Joe', last_name: 'Sacco', email: 'joes@sample.com', password: 'password', pincode: 1234},
  ]);
};
