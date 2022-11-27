const { DataTypes } = require("sequelize");
const { sequelizeconect } = require("../Config/mysql_db");

const Storage = sequelizeconect.define(
  "storages",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Storage;
