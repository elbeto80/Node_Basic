const { userModel } = require("../Models");
const { matchedData } = require("express-validator");

const { encrypt } = require("../Global/Password");

const RegisterUser = async (req, res) => {
  try {
    req = matchedData(req);

    const password = await encrypt(req.password);
    const body = { ...req, password };

    const response = await userModel.create(body);
    response.set("password", undefined, { strict: false });

    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const LoginUser = async (req, res) => {
  try {
    req = matchedData(req);

    return res.status(200).json({ req });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { RegisterUser, LoginUser };
