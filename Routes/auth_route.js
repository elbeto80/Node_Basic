const express = require("express");
const router = express.Router();

const {
  RegisterUser,
  LoginUser,
  logutTokenDestroy,
} = require("../Controlles/authController");

const {
  RegisterValidator,
  LoginValidator,
} = require("../Validators/auth_validator");

router.post("/register", RegisterValidator, RegisterUser);
router.post("/login", LoginValidator, LoginUser);
router.post("/logout", logutTokenDestroy);

module.exports = router;
