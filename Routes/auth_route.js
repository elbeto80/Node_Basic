const express = require("express");
const router = express.Router();

const { RegisterUser, LoginUser } = require("../Controlles/authController");

const {
  RegisterValidator,
  LoginValidator,
} = require("../Validators/auth_validator");

router.post("/register", RegisterValidator, RegisterUser);
router.post("/login", LoginValidator, LoginUser);

module.exports = router;
