import  {prediksiLstm,prediksiRF,prediksiTestingLstm, prediksiTestingRF}  from "../models/dataModel.js";



export const getDatasPrediksi = async(req,res) => {
    try {
        const datas = await prediksiLstm.findAll({
            attributes:[
                "Provinsi","Tanggal","Prediksi_Harga"
            ]
        });
        res.status(200).json(datas)
    } catch (error) {
        console.log(error)
    }
}

export const getDatasPrediksiTesting = async(req,res) => {
    try {
        const datas = await prediksiTestingLstm.findAll({
            attributes:[
                "Provinsi","Index","Tanggal","Harga_Sebenarnya","Prediksi_Harga"
            ]
        });
        res.status(200).json(datas);
    } catch (error) {
        console.log(error)
    }
}

export const getDatasPrediksiRF = async(req,res) => {
    try {
        const datas = await prediksiRF.findAll({
            attributes:[
                "Provinsi","Tanggal","Prediksi_Harga"
            ]
        });
        res.status(200).json(datas)
    } catch (error) {
        console.log(error)
    }
}

export const getDatasPrediksiTestingRF = async(req,res) => {
    try {
        const datas = await prediksiTestingRF.findAll({
            attributes:[
                "Provinsi","Index","Tanggal","Harga_Sebenarnya","Prediksi_Harga"
            ]
        });
        res.status(200).json(datas);
    } catch (error) {
        console.log(error)
    }
}