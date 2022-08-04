const express = require("express");
const router = express.Router();
const knex = require("../db/knex/knex.js");

router.post("/", async (req, res) => {
  const accountData = await req.body;
  console.log(accountData);
  const retCol = knex("account").insert(accountData).returning("*");
  console.log(retCol);

  res.status(333).send("Account");
});

module.exports = router;
