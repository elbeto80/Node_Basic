const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const getPropertiesDB = require("./Switch_DB_Inputs");
const inputs_db_key = getPropertiesDB();

const tokenCreate = async (user) => {
  const sing = JWT.sign(
    {
      [inputs_db_key.id]: user[inputs_db_key.id],
      name: user.name,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  return sing;
};

const tokenVerify = async (jwt) => {
  try {
    return JWT.verify(jwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenCreate, tokenVerify };
