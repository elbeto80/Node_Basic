const PUBLIC_URL = process.env.PUBLIC_URL;
const { storageModel } = require("../Models");
const { matchedData } = require("express-validator");

const fs = require("fs");

const media_path = `${__dirname}/../Storage`;

const getFiles = async (req, res) => {
  try {
    const files = await storageModel.find({});

    return res.status(200).json({ files });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getFile = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    const file = await storageModel.findById(id);

    return res.status(200).json({ file });
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

const deleteFile = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    const file = await storageModel.findById(id);

    if (!file) {
      return res.status(200).json({ success: false, message: "Id not found" });
    } else {
      const { file_name } = file;
      const file_path = `${media_path}/${file_name}`;
      fs.unlinkSync(file_path);

      const data = await storageModel.deleteOne({ id });

      const response = {
        success: true,
        file: data,
      };

      return res.status(200).json({ response });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getFiles, uploadFileStorage, getFile, deleteFile };
