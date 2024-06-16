import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const dataBeras = db.define("databeras", {
  Provinsi: {
    type: DataTypes.STRING,
  },
  Tanggal: {
    type: DataTypes.DATE,
  },
  Predicted: {
    type: DataTypes.DECIMAL(8, 6),
  },
}, {
  freezeTableName: true,
});

export default dataBeras;
