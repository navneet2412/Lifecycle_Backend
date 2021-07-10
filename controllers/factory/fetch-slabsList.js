const { validationResult } = require("express-validator");

const SlabModel = require("../../models/slab-model");

exports.slablist = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const slabDetail = await SlabModel.findAll({
      order: [["createdAt", "DESC"]],
    });
    if (!slabDetail) {
      return res.status(401).json({ msg: "Slab not found" });
    }
    res.status(200).json({
      slabDetail,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
