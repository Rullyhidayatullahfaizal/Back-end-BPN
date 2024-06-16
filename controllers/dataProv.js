import dataBeras from "../models/dataModel.js";



export const getDatas = async(req,res) => {
    try {
        const datas = await dataBeras.findAll({
            attributes:[
                "Provinsi","Tanggal","Predicted"
            ]
        });
        res.json(datas)
    } catch (error) {
        console.log(error)
    }
}