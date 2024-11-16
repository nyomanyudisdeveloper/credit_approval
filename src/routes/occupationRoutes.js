import express from 'express'
import { getAllOccupations } from '../controllers/occupationController.js'
import { verifyToken } from '../middleware/authMiddleware.js'

const routes = express.Router()

routes.get("",verifyToken,getAllOccupations)

export default routes