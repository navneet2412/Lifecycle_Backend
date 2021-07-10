const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../../models/user-model");


exports.updatePassword = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { userName, oldPassword, newPassword } = req.body;
    let loadedUser;
    const user = await User.findOne({
      where: {
        userName,
      },
    });
    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }
    loadedUser = user;
    const isPwdEqual = await bcrypt.compare(oldPassword, loadedUser.password);
    if (!isPwdEqual) {
      return res.status(401).json({ msg: "Wrong password" });
    }
    const hashedPwd = await bcrypt.hash(newPassword, 12);
    await User.update({ password: hashedPwd }, {
    where: {
    userName:loadedUser.userName
    }
    });
   
    res.status(200).json({
     msg:"password updated successfully",
     

    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
