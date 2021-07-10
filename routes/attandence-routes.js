const express = require("express");
const { body } = require("express-validator");
const { isAuth } = require("../middleware/is-auth");

const { addAttandence } = require("../controllers/attandence/add-attandence");

const router = express.Router();

router.post("/add-attandence", isAuth, addAttandence);

module.exports = router;
