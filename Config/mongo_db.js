const mongoose = require("mongoose");

const dbConnectMongo = () => {
  const MONGO_DB_URI = process.env.MONGO_DB_URI;

  mongoose.connect(
    MONGO_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("Conectado MONGO DB");
      } else {
        console.log("Error conexion");
      }
    }
  );
};

module.exports = dbConnectMongo;
