const express = require("express");
const router = express.Router();

const {
  AddTrackValidator,
  idTrackValidator,
} = require("../Validators/tracks_validator");

const { CustomMiddleware } = require("../Middlewares/Custom_mddl");

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../Controlles/tracksController");

router.get("/tracks", getTracks);
router.get("/tracks/:id", [idTrackValidator], getTrack);
router.post("/tracks", [AddTrackValidator, CustomMiddleware], createTrack);
router.put("/tracks/:id", [idTrackValidator, AddTrackValidator], updateTrack);
router.delete("/tracks/:id", [idTrackValidator], deleteTrack);

module.exports = router;
