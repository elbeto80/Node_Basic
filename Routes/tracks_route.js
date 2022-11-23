const express = require("express");
const router = express.Router();

const {
  AddTrackValidator,
  idTrackValidator,
} = require("../Validators/tracks_validator");

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../Controlles/tracksController");

const { validateSessionMddl } = require("../Middlewares/auth_mddl");

router.get("/tracks", validateSessionMddl, getTracks);
router.get("/tracks/:id", [idTrackValidator], getTrack);
router.post("/tracks", [AddTrackValidator], createTrack);
router.put("/tracks/:id", [idTrackValidator, AddTrackValidator], updateTrack);
router.delete("/tracks/:id", [idTrackValidator], deleteTrack);

module.exports = router;
