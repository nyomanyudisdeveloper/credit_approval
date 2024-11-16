import { fetchGetAllDistrictByCityID } from "../model/districts.js"


export const getAllDistrictByCityID = async (req,res,next) => {
    try{
        const city_id = req.query.city_id
        if(!city_id){
            return res.status(422).send({
                error:"There is no parameter [city_id]"
            })
        }
        
        const districts = await fetchGetAllDistrictByCityID(city_id)
        res.status(200).send(districts)
    }
    catch(err){
        console.log("getAllDistrictByCityID err = ",err)
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}