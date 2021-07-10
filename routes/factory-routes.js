const express = require("express");
const { body } = require("express-validator");
const { isAuth } = require("../middleware/is-auth");

const router = express.Router();

const { addslabs } = require("../controllers/factory/add-slabs");
const { slablist } = require("../controllers/factory/fetch-slabsList");
const { addsalesfactory } = require("../controllers/factory/add-sales");

router.post("/add-slabs", isAuth, addslabs);
router.get("/fetch-slabsList", isAuth, slablist);
router.post("/add-salesFactory", isAuth, addsalesfactory);
module.exports = router;