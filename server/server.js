const express = require("express");
const app = express();
const knex = require("./db/knex/knex.js")
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/api", (req, res) => {
    res.status(354).send();
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})