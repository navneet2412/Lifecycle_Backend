const express = require("express");
const { body } = require('express-validator');
const {isAuth} = require("../middleware/is-auth");
const {addCustomer} = require('../controllers/customer/add-customer');
const { customer } = require("../controllers/customer/fetch-customer");
const { customerList } = require("../controllers/customer/fetch-customerlist");
const router = express.Router();

//all the mine's expense routes will be here
router.post('/add-customer',[
  body('name').not().isEmpty().trim().escape(),
], isAuth, addCustomer);
router.post(
  "/fetch-customer",
  [body("name").not().isEmpty().trim().escape()],
  isAuth,
  customer
);
router.get(
  "/fetch-customerList",
  isAuth,
  customerList
);

module.exports = router;