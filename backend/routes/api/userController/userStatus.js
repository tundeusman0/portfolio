const User = require('../../../models/user');
const { updateDbArrayObj } = require('../utils/utils');

exports.updateUserstatus = async (req, res) => {
  let { info, status } = req.body;
  if (typeof status !== 'boolean') {
    return res.status(406).json({ msg: 'fill all fields.' });
  }
  if (!info) {
    !req.user.info ? (info = 'No info') : (info = req.user.info);
  }
  const data = { info, status };
  await updateDbArrayObj(res, data, req.user._id, User);
};
