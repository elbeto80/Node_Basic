const { DataTypes } = require("sequelize");
const { sequelizeconect } = require("../Config/mysql_db");

const Storage = require("./storage_my");

const Track = sequelizeconect.define(
  "tracks",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    artist_name: {
      type: DataTypes.STRING,
    },
    artist_nickname: {
      type: DataTypes.STRING,
    },
    artist_nationality: {
      type: DataTypes.STRING,
    },
    duration_start: {
      type: DataTypes.INTEGER,
    },
    duration_end: {
      type: DataTypes.INTEGER,
    },
    mediaId: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Track.relationStorageAll = function () {
  Track.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "files",
  });

  return Track.findAll({ include: "files" });
};

Track.relationStorageId = function (id) {
  Track.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "file",
  });
  return Track.findOne({ where: { id }, include: "file" });
};

module.exports = Track;
