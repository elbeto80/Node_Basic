const { DataTypes } = require("sequelize");
const { sequelizeconect } = require("../Config/mysql_db");

const User = sequelizeconect.define(
  "users",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.NUMBER },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.ENUM(["user", "admin"]) },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
