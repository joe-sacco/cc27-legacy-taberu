const express = require("express");
const router = express.Router();
const recipeController = require("../controller/recipe");

router.post("/", recipeController.createRecipe);
router.get("/", recipeController.getRecipe);
router.post("/requestReview", recipeController.createPlanMenu);
router.get("/requestReview", recipeController.getPlanMenu);
router.put("/requestReview", recipeController.updatePlanMenu);
router.post("/recipeReview", recipeController.createRecipeReview);

module.exports = router;
