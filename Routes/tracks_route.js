const express = require("express");
const router = express.Router();

const { AddTrackValidator } = require("../Validators/tracks_validator");

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../Controlles/tracksController");

router.get("/tracks", getTracks);
router.post("/track", AddTrackValidator, createTrack);

module.exports = router;
