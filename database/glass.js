const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Glass = sequelize.define(
  "Glass",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    timstamps: true,
    paranoid: true,
  }
);

module.exports = Glass;