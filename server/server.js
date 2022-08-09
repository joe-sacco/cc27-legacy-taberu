const express = require("express");
const app = express();
const cors = require("cors");
const accountRouter = require("./routes/account");
const familyRouter = require("./routes/family");
const recipeRouter = require("./routes/recipe");
const path = require("path");

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build'))); // create path to URL

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.use("/account", accountRouter);

app.use("/recipe", recipeRouter);

app.use("/account/:id/family", familyRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});