const SalesModel = require("../../models/sales-model");
const BlockModel = require("../../models/block-model");
const SalesItemsModel = require("../../models/sales-items-model");
const { validationResult } = require("express-validator");

exports.addSales = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const image = req.files;
  
  let imageURL = [];
  if (image) {
    for(img of image){
      imageURL.push(img.path);
    }
    console.log(imageURL);
    //imageURL = req.file.path;
  } else {
    return res.status(404).json({
      msg: "No image provided",
    });
  }
  imageURL=JSON.stringify(imageURL);
  try {
    const {
      customer_Id,
      stoneType,
      quality,
      weight,
      rate,
      paymentMode,
      paymentDate,
      salesItems,
    } = req.body;
    if (
      !customer_Id ||
      !stoneType ||
      !quality ||
      !weight ||
      !rate ||
      !paymentMode ||
      !paymentDate ||
      !salesItems
    ) {
      return res.status(400).json({ msg: "Missing input field!" });
    }
    const salesItemsdata=await BlockModel.findByPk(salesItems);
    //check if salesitem is available or not
    if(!salesItemsdata) return res.status(404).json({msg:"block with this id is not available"})

    const salesData = await SalesModel.create({
      customer_Id,
      stoneType,
      quality,
      weight,
      rate,
      imageURL,
      paymentMode,
      paymentDate,
    });

    for (let i = 0; i < salesItems.length; i++) {
      await SalesItemsModel.create({
        salesId: salesData["dataValues"]["id"],
        blockId: salesItems[i],
      });
    }

    res.status(201).json({
      msg: "Sales added successfully",
      images:JSON.parse(imageURL)
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
