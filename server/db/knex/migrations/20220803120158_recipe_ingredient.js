/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipe_ingredient", function (table) {
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipe")
      .onDelete("CASCADE");
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredient")
      .onDelete("CASCADE");

    table.primary(["ingredient_id", "recipe_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipe_ingredient");
};
