const { validationResult } = require("express-validator");

const Faada = require("../../models/faada-model");

exports.faadalist = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    
    const faadaDetail = await Faada.findAll({
      order: [["createdAt", "DESC"]],
    });
    if (!faadaDetail) {
      return res.status(401).json({ msg: "Faada not found" });
    }
    console.log(faadaDetail);
    res.status(200).json({
     faadaDetail
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
