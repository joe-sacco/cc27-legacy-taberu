const express = require("express");
const router = express.Router();
const recipeController = require("../controller/family");

router.post("/account/:id/family", familyController.createFamily);

module.exports = router;
