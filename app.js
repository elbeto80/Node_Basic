require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./Config/mongo_db");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

// Routes
app.use("/api", require("./Routes/tracks_route"));

app.listen(port, () => {
  console.log("corriendo app " + port);
});

dbConnect();
