/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('recipe', function (table) {
    table.increments('id').primary();
    table.string('name', 64).notNullable();
    table.string('picture_path', 128);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('recipe');
};
