import { fetchAllCityByProvinceID } from "../model/citys.js"

export const getAllCityByProvinceID = async (req,res,next) => {
    try{
        const province_id = req.query.province_id
        if(!province_id){
            return res.status(422).send({
                error:"There is no parameter [province_id]"
            })
            
        }
        const citys = await fetchAllCityByProvinceID(province_id)
        return res.status(200).send(citys)
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}