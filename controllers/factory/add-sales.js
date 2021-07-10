const factorySalesModel = require("../../models/factory-sales-model");
const { validationResult } = require("express-validator");

exports.addsalesfactory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const image = req.files;

  let imageURL = [];
  if (image) {
    for (img of image) {
      imageURL.push(img.path);
    }
    console.log(imageURL);
    //imageURL = req.file.path;
  } else {
    return res.status(404).json({
      msg: "No image provided",
    });
  }
  imageURL = JSON.stringify(imageURL);
  try {
    const {
      customerName,
      stoneType,
      quality,
      blockId,
      slabId,
      weight,
      sqFt,
      paymentMode,
      paymentDate
    } = req.body;
    if (
      !customerName||
      !stoneType||
      !quality||
      !paymentMode||
      !paymentDate
    ) {
      return res.status(400).json({ msg: "Missing input field!" });
    }
    if(!weight && !sqFt){
        return res.status(400).json({ msg: "missing input field" });
    }
    if (!blockId && !slabId) {
      return res.status(400).json({ msg: "missing input field" });
    }

    console.log(customerName);
    const data = await factorySalesModel.create({
      customerName,
      stoneType,
      quality,
      blockId,
      slabId,
      weight,
      sqFt,
      imageURL,
      paymentMode,
      paymentDate
    });
    res.status(201).json({
      msg: "factory slab added successfully",
      data
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
