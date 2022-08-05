/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("daily_menu", function (table) {
    table
      .integer("account_id")
      .notNullable()
      .references("id")
      .inTable("account")
      .onDelete("CASCADE");
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipe")
      .onDelete("CASCADE");
    table.boolean("review_request").notNullable();
    table.date("date").notNullable();

    table.primary(["account_id", "recipe_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("daily_menu");
};
