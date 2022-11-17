const { storageModel } = require("../Models");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getFiles = async (req, res) => {
  try {
    const files = await storageModel.find({});

    return res.status(200).json({ files });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const uploadFileStorage = async (req, res) => {
  try {
    const { body, file } = req;

    const data = {
      file_name: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const response = await storageModel.create(data);

    return res.status(201).json({ response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getFiles, uploadFileStorage };
