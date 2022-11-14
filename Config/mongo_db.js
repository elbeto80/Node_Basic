const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;

  const connection = mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("Conectado");
      } else {
        console.log("Error conexion");
      }
    }
  );
};

module.exports = dbConnect;
