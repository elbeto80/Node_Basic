const { check, validationResult } = require("express-validator");

const idStorageValidator = [
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

module.exports = { idStorageValidator };
