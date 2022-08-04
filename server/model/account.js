const knex = require("../db/knex/knex");

const ACCOUNT_TABLE = "account";

module.exports = {
  ACCOUNT_TABLE,

  createAccount(data) {
    return knex.insert(data).into(ACCOUNT_TABLE);
  },

  authenticateAccount(data) {
    return knex
      .select("*")
      .from(ACCOUNT_TABLE)
      .where({ email: data.email, password: data.password });
  },
};
