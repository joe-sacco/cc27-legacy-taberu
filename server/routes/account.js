const express = require("express");
const router = express.Router();
const accountController = require("../controller/account");

router.post("/", accountController.createAccount);
router.get("/", accountController.authenticateAccount);

module.exports = router;
