const { validationResult } = require("express-validator");

const Customer = require("../../models/customer-model");

exports.customerList = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    
    const customerList = await Customer.findAll({
      order: [["createdAt", "DESC"]],
    });
    if (!customerList) {
      return res.status(401).json({ msg: "User not found" });
    }

    res.status(200).json({
    customerList
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
