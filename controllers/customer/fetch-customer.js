const { validationResult } = require("express-validator");

const Customer = require("../../models/customer-model");

exports.customer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
     try {
      const { name,phone } = req.body;
      const customerDetail = await Customer.findOne({
        where: {
          name,
          phone
        },
      });
      if (!customerDetail) {
        return res.status(401).json({ msg: "User not found" });
      }

      res.status(200).json({
         name:customerDetail.name,
         phone:customerDetail.phone,
         id:customerDetail.id
      });

    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }

};
