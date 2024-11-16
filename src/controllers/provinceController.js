import { fetchAllProvinces } from "../model/provinces.js"

export const getAllProvinces = async (req,res,next) => {
    try{
        const provinces = await fetchAllProvinces();
        res.json(provinces)
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}