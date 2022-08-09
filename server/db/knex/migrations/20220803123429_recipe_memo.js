/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('recipe_memo', function (table) {
    table
      .integer('account_id')
      .notNullable()
      .references('id')
      .inTable('account')
      .onDelete('CASCADE');
    table
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('CASCADE');
    table.string('memo', 128);

    table.primary(['account_id', 'recipe_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('recipe_memo');
};
