const express = require("express");
const router = express.Router();

const { AddTrackValidator } = require("../Validators/tracks_validator");

const { CustomMiddleware } = require("../Middlewares/Custom_mddl");

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../Controlles/tracksController");

router.get("/tracks", getTracks);
router.post("/track", [AddTrackValidator, CustomMiddleware], createTrack);

module.exports = router;
