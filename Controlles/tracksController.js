const { matchedData } = require("express-validator");
const { trackModel } = require("../Models");

const getTracks = async (req, res) => {
  try {
    const tracks = await trackModel.find({});

    return res.status(200).json({ tracks });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getTrack = (req, res) => {};

const createTrack = async (req, res) => {
  try {
    const body = matchedData(req);

    const response = await trackModel.create(body);

    return res.status(201).json({ response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
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
