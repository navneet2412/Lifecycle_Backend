const { validationResult } = require("express-validator");

const BlockModel = require("../../models/block-model");

exports.blocklist = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    
    const blockDetail = await BlockModel.findAll({
      order: [["createdAt", "DESC"]],
    });
    if (!blockDetail) {
      return res.status(401).json({ msg: "Faada not found" });
    }
    res.status(200).json({
      blockDetail,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
