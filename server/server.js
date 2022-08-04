const express = require("express");
const app = express();
// const knex = require("./db/knex/knex.js");
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

const accountRouter = require("./routes/account");
app.use("/account", accountRouter);
