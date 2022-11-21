const { userModel } = require("../Models");
const { matchedData } = require("express-validator");

const { encrypt, compare } = require("../Global/Password");

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

    const user = await userModel
      .findOne({ email: req.email })
      .select("name email role password");
    if (!user) {
      return res
        .status(403)
        .json({ success: false, message: "User not found" });
    }

    const checkUser = await compare(req.password, user.password);
    if (!checkUser) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const response = {
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: await tokenCreate(user),
    };

    return res.status(200).json({ data: response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { RegisterUser, LoginUser };
