const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USERNAME;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelizeconect = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

const MYSQL_CONECTION = async () => {
  try {
    await sequelizeconect.authenticate();
    console.log("Conectado MySQL DB");
  } catch (e) {
    console.log("MySQL: error de conexion", e);
  }
};

module.exports = { sequelizeconect, MYSQL_CONECTION };
