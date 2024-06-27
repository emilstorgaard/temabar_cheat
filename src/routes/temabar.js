const express = require("express");
const temabar = require("../controllers/temabar");

const router = express.Router();

router.post("/cheat", temabar.cheat);

module.exports = router;