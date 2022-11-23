const { tokenVerify } = require("../Global/JWT_util");
const { userModel } = require("../Models");

const validateSessionMddl = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(401).json({ message: "Not token authorization" });

    const token_jwt = req.headers.authorization.split(" ").pop();
    const token_data = await tokenVerify(token_jwt);

    if (!token_data._id)
      return res.status(401).json({ message: "Not ID in token authorization" });

    req.user = await userModel.findById(token_data._id);

    next();
  } catch (err) {
    res.status(422).json({ error: "Error en auth middleware" });
  }
};

module.exports = { validateSessionMddl };
