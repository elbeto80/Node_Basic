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
const { checkRolMddl } = require("../Middlewares/rol_mddl");

router.get("/tracks", validateSessionMddl, getTracks);
router.get("/tracks/:id", [validateSessionMddl, idTrackValidator], getTrack);
router.post(
  "/tracks",
  [validateSessionMddl, checkRolMddl(["admin", "user"]), AddTrackValidator],
  createTrack
);
router.put(
  "/tracks/:id",
  [validateSessionMddl, idTrackValidator, AddTrackValidator],
  updateTrack
);
router.delete(
  "/tracks/:id",
  [validateSessionMddl, idTrackValidator],
  deleteTrack
);

module.exports = router;
