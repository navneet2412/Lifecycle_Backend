const FaadaModel = require('../../models/faada-model');
const {validationResult} = require("express-validator");

exports.addFaada = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {serialNo, blocks, weight,status} = req.body;
    await FaadaModel.create({
      serialNo,
      blocks,
      weight,
      status
    });
    res.status(201).json({
      msg: "Faada added successfully",
      serialNo:serialNo,
      blocks:blocks,
      weight:weight,
      status:status
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}