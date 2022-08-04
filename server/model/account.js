const knex = require("../db/knex/knex");

const ACCOUNT_TABLE = "account";

module.exports = {
  ACCOUNT_TABLE,

  // selectAccount() {
  //   return knex
  //     .select("*")
  //     .from(ACCOUNT_TABLE)
  //     .then((data) => console.log("MODEL", data));
  // },
  // firstName, lastName, email, password, pincode, image
  createAccount(data) {
    return knex.insert(data).into(ACCOUNT_TABLE);
  },
};
