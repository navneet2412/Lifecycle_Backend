const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");
const { Op } = require("sequelize");

const User = require("../../models/user-model");

exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {userName, email, password, authType} = req.body;
     
    const userExist = await User.findOne({
      where: {
        [Op.or]: [{userName}, {email}]
      }
    });
    if (userExist) {
      const error = new Error('User with this email already exists');
      error.statusCode = 422;
      return next(error);
    }
   
    
    const hashedPwd = await bcrypt.hash(password, 12);
    authType.toLowerCase();
    await User.create({userName, email, password: hashedPwd, authType});
    res.status(201).json({
      message: 'User Created',
      
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}