const { userModel } = require("../Models");
const { matchedData } = require("express-validator");

const { encrypt } = require("../Global/Password");

const { tokenCreate } = require("../Global/JWT_util");

const RegisterUser = async (req, res) => {
  try {
    req = matchedData(req);

    const password = await encrypt(req.password);
    const body = { ...req, password };

    const user = await userModel.create(body);
    user.set("password", undefined, { strict: false });

    const response = {
      user,
      token: await tokenCreate(user),
    };

    return res.status(200).json({ data: response });
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
