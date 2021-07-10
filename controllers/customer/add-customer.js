const CustomerModel = require('../../models/customer-model');
const {validationResult} = require("express-validator");

exports.addCustomer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {name,phone} = req.body;
    await CustomerModel.create({
      name,
      phone
    });
    res.status(201).json({
      msg: 'Customer added successfully',
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

}