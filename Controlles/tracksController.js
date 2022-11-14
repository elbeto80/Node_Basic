const { trackModel } = require("../Models");

const getTracks = async (req, res) => {
  const tracks = await trackModel.find({});

  res.send({ tracks });
};

const getTrack = (req, res) => {};

const createTrack = async (req, res) => {
  const { body } = req;
  console.log(body);

  const response = await trackModel.create(body);

  res.send({ response });
};

const updateTrack = (req, res) => {};

const deleteTrack = (req, res) => {};

module.exports = {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
