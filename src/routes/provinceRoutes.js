import express from 'express'
import { getAllProvinces } from '../controllers/provinceController.js'
import { verifyToken } from '../middleware/authMiddleware.js'

const routes = express.Router()

routes.get("",verifyToken,getAllProvinces)

export default routes