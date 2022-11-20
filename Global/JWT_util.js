const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const tokenCreate = async (user) => {
  const sing = JWT.sign(
    {
      _id: user.id,
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
