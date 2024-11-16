import express from 'express'
import { verifyToken } from '../middleware/authMiddleware.js'
import { createNewClient, getPaginationClients, updateStatusClient } from '../controllers/clientsController.js'

const routes = express.Router()

routes.get("",verifyToken,getPaginationClients)
routes.post("",verifyToken,createNewClient)
routes.put("/status",verifyToken,updateStatusClient)

export default routes

