const multer = require('multer');
const sharp = require('sharp');

exports.multerUpload = function multerUpload(size) {
  return multer({
    limits: {
      fileSize: size
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|png|jpeg)/)) {
        return cb(new Error('Please Upload should be images only'));
      }
      cb(undefined, true);
    }
  });
};

exports.uploadImage = async function uploadImage(
  req,
  res,
  pixName,
  collectionName
) {
  try {
    const buffer = await sharp(req.file.buffer)
      .resize({
        width: 250,
        height: 250
      })
      .png()
      .toBuffer();
    const updatedCollectionName = await collectionName.findOneAndUpdate(
      { createdBy: req.user._id },
      { $set: { [pixName]: buffer } },
      { new: true }
    );
    res.set('Content-Type', 'image/jpg');
    res.status(200).send(updatedCollectionName[pixName]);
  } catch (error) {
    res.status(400).send('Error');
  }
};

exports.getImage = async function getImage(res, collectionName) {
  try {
    const response = await collectionName.findOne();
    if (!response) {
      throw new Error();
    }
    res.set('Content-Type', 'image/jpg');
    res.status(200).send(response.pix);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};

exports.getData = async function getData(res, collectionName) {
  try {
    const response = await collectionName.findOne();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: 'error' });
  }
};
