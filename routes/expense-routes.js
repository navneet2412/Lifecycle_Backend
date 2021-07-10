const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");
const {addExpense} = require('../controllers/expenses/add-expense');
const router = express.Router();

//all the mine's expense routes will be here
router.post('/add-expense',[
  body('description').not().isEmpty().trim().escape(),
  body('category').not().isEmpty().trim().escape(),
  body('beneficiary').not().isEmpty().trim().escape(),
  body('paymentMode').not().isEmpty().trim().escape(),
], isAuth, addExpense);

module.exports = router;