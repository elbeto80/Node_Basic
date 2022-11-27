const { check, validationResult } = require("express-validator");

const AddTrackValidator = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  // check("mediaId").exists().notEmpty().isMongoId(),
  check("mediaId").exists().notEmpty(),

  (req, res, next) => {
    const error = validationResult(req);
    const hasError = !error.isEmpty();
    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
];

const idTrackValidator = [
  check("id").exists().notEmpty(),

  (req, res, next) => {
    const error = validationResult(req);
    const hasError = !error.isEmpty();
    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
];

module.exports = { AddTrackValidator, idTrackValidator };
