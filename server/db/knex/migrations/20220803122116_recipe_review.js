/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipe_review", function (table) {
    table
      .integer("account_id")
      .notNullable()
      .references("id")
      .inTable("account")
      .onDelete("CASCADE");
    table
      .integer("family_id")
      .notNullable()
      .references("id")
      .inTable("family")
      .onDelete("CASCADE");
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipe")
      .onDelete("CASCADE");
    table.date("date").notNullable();
    table.integer("review");

    // table.primary(["account_id", "family_id", "recipe_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipe_review");
};
