const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

const User = require("../../models/user-model");

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const {email, password} = req.body;
    let loadedUser;
    const user = await User.findOne({
      where: {
        email,
      }
    });
    if (!user) {
      return res.status(401).json({msg: 'User not found'});
    }
    loadedUser = user;
    const isPwdEqual = await bcrypt.compare(password, loadedUser.password);
    if (!isPwdEqual) {
      return res.status(401).json({msg: 'Wrong password'});
    }
    const token = jwt.sign({
      email: loadedUser.email,
      userName: loadedUser.userName,
      userId: loadedUser["id"],
      authType: loadedUser.authType,
    }, 'your_secret_key', {
      expiresIn: '24h'
    });
    res.status(200).json({
      token: token,
      userName:loadedUser.userName,
      type:loadedUser.authType,
      imageUrl:loadedUser.imageUrl
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}