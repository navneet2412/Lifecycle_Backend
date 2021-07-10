const { validationResult } = require("express-validator");

const Faada= require("../../models/faada-model");

exports.faada = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {serialNo } = req.body;
    const faadaDetail = await Faada.findOne({
      where: {
        serialNo
      },
    });
    if (!faadaDetail) {
      return res.status(401).json({ msg: "Faada not found" });
    }
    res.status(200).json({
      faadaId: faadaDetail.id,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
