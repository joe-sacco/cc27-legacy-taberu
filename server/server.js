const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("WELCOME TO TABERU SERVER 😋");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

const accountRouter = require("./routes/account");
app.use("/account", accountRouter);

const recipeRouter = require("./routes/recipe");
app.use("/recipe", recipeRouter);

// const familyRouter = require("./routes/family");
// app.use("/account/:id/family", familyRouter);