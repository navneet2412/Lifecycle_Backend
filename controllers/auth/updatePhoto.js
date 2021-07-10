 const User = require("../../models/user-model");

 exports.uploadImage = async (req, res, next) => {
   const image = req.files;
   let imageUrl = "";
   if (image) {
     imageUrl = req.files[0].path;
   } else {
     return res.status(404).json({
       msg: "No image provided",
     });
   }
   try {
     //  now update the driver's data with the new driver object
     await User.update(
       {
         profileURL: imageUrl,
       },
       {
         where: {
           id: req.userId,
         },
       }
     );
     //  now send the response
     return res.status(201).json({
       msg: `User profile pic updated!`,
       profileURL: imageUrl,
     });
   } catch (err) {
     if (!err.statusCode) {
       err.statusCode = 500;
     }
     next(err);
   }
 };
