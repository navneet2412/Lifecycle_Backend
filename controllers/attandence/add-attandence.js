const { validationResult } = require("express-validator");
const Attandence = require("../../models/attandence-model");
const { Op } = require("sequelize");

exports.addAttandence = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { total, present, absent } = req.body;
    if(!total || !present || !absent)
    {
      return res.status(400).json({msg:"Missing input field!"})
    }
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    const date1 =await Attandence.findOne({
      where:{
        dd,
        mm,
        yy
      }
    });
    console.log(date1);
    if(date1){
      return res.json({
        msg:"You have already marked attendence!",
        data: date1
      })
    }
   const data= await  Attandence.create({
      total,
      present,
      absent,
      dd,
      mm,
      yy
    });

    res.status(201).json({
      msg: "Attendence added successfully",
      data
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};