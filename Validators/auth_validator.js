const { check, validationResult } = require("express-validator");

const RegisterValidator = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 15 }),

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

const LoginValidator = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 15 }),

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

module.exports = { RegisterValidator, LoginValidator };
