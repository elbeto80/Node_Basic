const switch_db = process.env.SWITCH_DB_CONECTION;

let models = {};
if (switch_db == "mongo") {
  models = {
    userModel: require("./user_mg"),
    trackModel: require("./track_mg"),
    storageModel: require("./storage_mg"),
  };
} else {
  models = {
    userModel: require("./user_my"),
    trackModel: require("./track_my"),
    storageModel: require("./storage_my"),
  };
}

module.exports = models;
