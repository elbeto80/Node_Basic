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
  check("mediaId").exists().notEmpty().isMongoId(),

  (req, res, next) => {
    // try {
    //   validationResult(req).throw();
    //   return next;
    // } catch (err) {
    //   res.status(403);
    //   res.send({ error: err.array() });
    // }

    const error = validationResult(req);
    const hasError = !error.isEmpty();
    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
];

module.exports = { AddTrackValidator };
