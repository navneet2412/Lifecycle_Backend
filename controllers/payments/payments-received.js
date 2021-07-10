const PaymentModel = require('../../models/payments-model');
const { validationResult } = require('express-validator');

exports.paymentReceived = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {description, amount, customer_id, paymentMode} = req.body;

    await PaymentModel.create({description, amount, customer_id, paymentMode});
    res.status(201).json({
      msg: 'Payment added successfully'
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}