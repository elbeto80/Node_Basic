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

const getTrack = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    const track = await trackModel.findById(id);

    return res.status(200).json({ track });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createTrack = async (req, res) => {
  try {
    const body = matchedData(req);

    const response = await trackModel.create(body);

    return res.status(201).json({ response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateTrack = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);

    const response = await trackModel.findByIdAndUpdate(id, body);

    return res.status(201).json({ response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteTrack = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    const track = await trackModel.deleteOne({ _id: id });

    return res.status(200).json({ track });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
