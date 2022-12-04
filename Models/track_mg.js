const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TrackScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Relación con storage
TrackScheme.statics.relationStorageAll = function () {
  const join = this.aggregate([
    {
      $lookup: {
        from: "storages", // Segunda tabla
        localField: "mediaId", // Campo local para relación
        foreignField: "_id", // Campo segunda tabla relación
        as: "files", // Nombre donde lo regresa
      },
    },
    {
      $unwind: "$files",
    },
  ]);

  return join;
};

// Relación con storage
TrackScheme.statics.relationStorageId = function (id) {
  const join = this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "storages", // Segunda tabla
        localField: "mediaId", // Campo local para relación
        foreignField: "_id", // Campo segunda tabla relación
        as: "file", // Nombre donde lo regresa
      },
    },
    {
      $unwind: "$file",
    },
  ]);

  return join;
};

TrackScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("tracks", TrackScheme);
