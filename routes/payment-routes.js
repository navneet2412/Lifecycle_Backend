const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");
const {paymentReceived} = require('../controllers/payments/payments-received');
const router = express.Router();

//all the mine's expense routes will be here
router.post('/payment-received',[
  body('description').not().isEmpty().trim().escape(),
  body('paymentMode').not().isEmpty().trim().escape(),
], isAuth, paymentReceived);

module.exports = router;