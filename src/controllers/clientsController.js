import { fetchCreateNewClient, fetchGetPaginationClients, fetchUpdateClientStatus } from "../model/clients.js"
import sendEmail from "../utils/sendEmail.js"


export const getPaginationClients = async (req,res,next) => {
    try{
        var page = 1
        var limit = 5
        if(req.query.page && req.query.limit ){
            page = req.query.page
            limit = req.query.limit 
        }
        const clients = await fetchGetPaginationClients(limit,page)
        res.status(200).send(clients)
        
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}

export const createNewClient = async (req,res,next) => {
    try{
        const data = req.body
        const client = await fetchCreateNewClient(data)
        res.status(200).send(client)
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}

export const updateStatusClient = async (req,res,next) => {
    try{
        const client_id = req.query.client_id
        const status = req.query.status
        if(!client_id && !status){
            return res.status(422).send({
                error:"There is no parameter [client_id,status]"
            })
        }
        await sendEmail()
        const client = await fetchUpdateClientStatus(client_id,status)
        res.status(200).send(client)
        
    }
    catch(err){
        console.log("updateStatusClient err = ",err)
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}