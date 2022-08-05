const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(express.json());
// const allowedOrigins = ['http://localhost:3000','https://taberu-server.herokuapp.com/account'];
// const options = {
//   origin: allowedOrigins
// };
app.use(cors());

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

const familyRouter = require("./routes/family");
app.use("/account/:id/family", familyRouter);