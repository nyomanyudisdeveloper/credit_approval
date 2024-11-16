import express from 'express'
import { getAllCityByProvinceID } from '../controllers/cityController.js'
import { verifyToken } from '../middleware/authMiddleware.js'

const routes = express.Router()

routes.get("",verifyToken,getAllCityByProvinceID)

export default routes