/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('account', function (table) {
    table.increments('id').primary();
    table.string('first_name', 32).notNullable();
    table.string('last_name', 32).notNullable();
    table.string('email', 64).notNullable();
    table.string('password', 32).notNullable();
    table.integer('pincode', 4).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('account');
};
