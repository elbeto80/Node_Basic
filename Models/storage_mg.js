const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    file_name: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("storages", StorageScheme);
