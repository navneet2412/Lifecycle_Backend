const ExpenseModel = require('../../models/expense-model');
const { validationResult } = require('express-validator');

exports.addExpense = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const {description, category, amount, beneficiary, paymentMode} = req.body;
  try {
    await ExpenseModel.create({
      description,
      category,
      amount,
      beneficiary,
      paymentMode
    });
    res.status(201).json({
      msg: 'Expense added successfully',
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}