const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("users", {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    direction: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    pppoe: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("active", "disabled"),
      defaultValue: "active",
    },
    user_number: {
      type: DataTypes.INTEGER,
    },
    observations: {
      type: DataTypes.STRING,
    },
  });
};
