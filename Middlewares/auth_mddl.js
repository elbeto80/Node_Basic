const { tokenVerify } = require("../Global/JWT_util");
const { userModel } = require("../Models");

const getPropertiesDB = require("../Global/Switch_DB_Inputs");
const inputs_db_key = getPropertiesDB();

const validateSessionMddl = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(401).json({ message: "Not token authorization" });

    const token_jwt = req.headers.authorization.split(" ").pop();
    const token_data = await tokenVerify(token_jwt);

    if (!token_data)
      return res
        .status(401)
        .json({ message: "Not payload JWT token authorization" });

    const query = { [inputs_db_key.id]: token_data[inputs_db_key.id] };

    req.user = await userModel.findOne(query);

    next();
  } catch (err) {
    res.status(422).json({ error: "Error en auth middleware" });
  }
};

module.exports = { validateSessionMddl };
