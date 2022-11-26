require("dotenv").config();

const express = require("express");
const cors = require("cors");

const morganBody = require("morgan-body");
const { loggerStream } = require("./Global/Logger_Slack");

const dbConnect = require("./Config/mongo_db");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("Storage"));

// ### Envio de error a slack ### //
morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});

const port = process.env.PORT || 3001;

// Routes
app.use("/api", require("./Routes/auth_route"));
app.use("/api", require("./Routes/tracks_route"));
app.use("/api", require("./Routes/storage_route"));

app.listen(port, () => {
  console.log("corriendo app " + port);
});

dbConnect();
