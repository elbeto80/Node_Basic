const SWITCH_DB_INPUTS = process.env.SWITCH_DB_CONECTION;

const getPropertiesDB = () => {
  const data = {
    mongo: { id: "_id" },
    mysql: { id: "id" },
  };

  return data[SWITCH_DB_INPUTS];
};

module.exports = getPropertiesDB;
