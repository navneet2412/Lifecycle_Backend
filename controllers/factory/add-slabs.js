const SlabModel = require("../../models/slab-model");
const { validationResult } = require("express-validator");

exports.addslabs = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {
      slabNo,
      dimensions,
      sqFt,
      slabAmount
    } = req.body;
    if (
      !slabNo ||
      !dimensions ||
      !sqFt ||
      !slabAmount
    ) {
      return res.status(400).json({ msg: "Missing input field!" });
    }
    const data= await SlabModel.create({
      slabNo,
      dimensions,
      sqFt,
      slabAmount
    });
    res.status(201).json({
      msg: "Slab added successfully",
      data
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
