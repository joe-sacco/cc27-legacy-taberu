const express = require("express");
const router = express.Router();
const familyController = require("../controller/family");

router.post("/", familyController.createFamily);

module.exports = router;
