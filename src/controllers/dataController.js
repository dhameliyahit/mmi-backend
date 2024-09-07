const Data = require("../model/DataModel.js");

const getAllDataController = async(req,res) =>{
    try {
        const data = await Data.find({});
        return res.status(200).send({
            success:true,
            message:"Successfully Data get . .. ",
            data
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Error while geting all data",
            error:error.data
        })
    }
}

module.exports = {
    getAllDataController
}