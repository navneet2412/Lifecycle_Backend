const SpoilageModel = require("../../models/spoilage-model");
const { validationResult } = require("express-validator");

exports.addSpoilage = async (req, res, next) => {
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
      blockId,msg
    } = req.body;
    if (
      !blockId ||
      !msg 
    ) {
      return res.status(400).json({ msg: "Missing input field!" });
    }
  const data =  await SpoilageModel.create({
      blockId,
      msg,
      imageURL,
    });
    res.status(201).json({
      msg: "Spoilage added successfully",
      data
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
