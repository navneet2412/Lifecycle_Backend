const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");

const {addFaada} = require("../controllers/faada/add-faada");
const { faadalist } = require("../controllers/faada/fetch-faadalist");

const router = express.Router();

//all the mine's expense routes will be here
//todo: add the body check here
router.post('/add-faada', isAuth, addFaada);
router.get("/fetch-faadalist", isAuth, faadalist);
module.exports = router;