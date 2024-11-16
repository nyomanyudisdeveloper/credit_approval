import express from 'express'
import { verifyToken } from '../middleware/authMiddleware.js'
import { getAllDistrictByCityID } from '../controllers/districtController.js'

const routes = express.Router()

routes.get("",verifyToken,getAllDistrictByCityID)

export default routes

