const express = require("express");

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../Controlles/tracksController");

const router = express.Router();

router.get("/tracks", getTracks);
router.post("/track", createTrack);

module.exports = router;
