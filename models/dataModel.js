import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

export const prediksiLstm = db.define("prediksi_lstm", {
  Provinsi: {
    type: DataTypes.STRING,
  },
  Tanggal: {
    type: DataTypes.DATE,
  },
  Prediksi_Harga: {
    type: DataTypes.DECIMAL(8, 6),
  },
}, {
  freezeTableName: true,
});

export const prediksiTestingLstm = db.define('prediksi_data_testing_lstm',{
  Provinsi:{
    type:DataTypes.STRING,
  },
  Tanggal:{
    type:DataTypes.DATE,
  },
  Index:{
    type:DataTypes.INTEGER,
  },
  Harga_Sebenarnya:{
    type:DataTypes.DECIMAL(8,6),
  },
  Prediksi_Harga:{
    type:DataTypes.DECIMAL(8,6),
  },
},{
  freezeTableName:true
})


export const prediksiRF = db.define("prediksi_rf", {
  Provinsi: {
    type: DataTypes.STRING,
  },
  Tanggal: {
    type: DataTypes.DATE,
  },
  Prediksi_Harga: {
    type: DataTypes.DECIMAL(8, 6),
  },
}, {
  freezeTableName: true,
});


export const prediksiTestingRF = db.define('prediksi_data_testing_rf',{
  Provinsi:{
    type:DataTypes.STRING,
  },
  Tanggal:{
    type:DataTypes.DATE,
  },
  Index:{
    type:DataTypes.INTEGER,
  },
  Harga_Sebenarnya:{
    type:DataTypes.DECIMAL(8,6),
  },
  Prediksi_Harga:{
    type:DataTypes.DECIMAL(8,6),
  },
},{
  freezeTableName:true
})