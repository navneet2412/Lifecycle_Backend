const DispatchBlock = require('../../models/dispatch-model');

exports.dispatchBlock = async (req, res, next) => {
  try {
    const {locationName, blockId} = req.body;
    await DispatchBlock.create({
      locationName,
      blockId,
    });
    res.status(201).json({
      msg: 'Blocks dispatched successfully',
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}