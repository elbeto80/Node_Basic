const { storageModel } = require("../Models");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getFiles = async (req, res) => {
  const files = await storageModel.find({});

  res.send({ files });
};

const uploadFileStorage = async (req, res) => {
  const { body, file } = req;

  const data = {
    file_name: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const response = await storageModel.create(data);

  res.send({ response });
};

module.exports = { getFiles, uploadFileStorage };
