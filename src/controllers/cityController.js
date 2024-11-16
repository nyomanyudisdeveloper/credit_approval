import { fetchAllCityByProvinceID } from "../model/citys.js"

export const getAllCityByProvinceID = async (req,res,next) => {
    try{
        console.log("req.query = ",req.query)
        console.log("req.query.province_id = ",req.query.province_id)
        const province_id = req.query.province_id
        if(province_id){
            const citys = await fetchAllCityByProvinceID(province_id)
            res.status(200).send(citys)
        }
        else{
            res.status(422).send({
                error:"There is no parameter [province_id]"
            })
        }
    }
    catch(err){
        console.log("getAllCityByProvinceID err = ",err)
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}