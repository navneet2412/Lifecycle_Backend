const BlockModel = require('../../models/block-model');
const {validationResult} = require("express-validator");

exports.addBlock = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const {serialNo, faadaId, description, weight, length, width, height} = req.body;
    if ((!serialNo|| !faadaId|| !description|| !weight|| !length|| !width|| !height))
    {
      return res.status(400).json({ msg: "Missing input field!" });
    }
      await BlockModel.create({
        serialNo,
        faadaId,
        description,
        weight,
        length,
        width,
        height,
      });
    res.status(201).json({
      msg: "Block added successfully",
      serialNo:serialNo,
      faadaId:faadaId,
      description:description,
      weight:weight,
      length:length,
      width:width,
      height:height
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}