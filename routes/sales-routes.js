const express = require("express");
const {isAuth} = require("../middleware/is-auth");
const {body} = require("express-validator");
const {addSales} = require("../controllers/sales/add-sales");
const User= require("../models/user-model");
const router = express.Router();

//all the sales routes will be here
router.post('/add-sales', isAuth, addSales);
// router.get('/add-sales', async (req,res)=>{
//     const user = await User.findByPk(2,{raw:true});
//     console.log(user)
//   return res.status(200).json({
//     user
//   })
// });

module.exports = router;