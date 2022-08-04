const express = require("express");
const router = express.Router();
const recipeController = require("../controller/recipe");

router.post("/recipe", recipeController.createRecipe);

module.exports = router;
