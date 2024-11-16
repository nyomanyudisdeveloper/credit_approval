import { fetchAllOccupations } from "../model/occupations.js"

export const getAllOccupations = async (req,res,next) => {
    try{
        const occupations = await fetchAllOccupations();
        res.json(occupations)
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}