const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("staff", {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("active", "disabled"),
      defaultValue: "disabled",
    },
    privilige: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Al crearte como usuario por defecto el privilegio es FALSE
    },
    user_password: {
      type: DataTypes.STRING,
    },
  });
};
