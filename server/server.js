const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({origin:`http://localhost:3000`}));

app.get("/", (req, res) => {
  res.status(200).send("WELCOME TO TABERU SERVER 😋");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

const accountRouter = require("./routes/account");
app.use("/account", accountRouter);
