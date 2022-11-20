const bcryptjs = require("bcrypt");

const encrypt = async (pass) => {
  return await bcryptjs.hash(pass, 10);
};

const compare = async (pass, hash) => {
  return bcryptjs.compare(pass, hash);
};

module.exports = { encrypt, compare };
