import express from 'express'
import { getAllCityByProvinceID } from '../controllers/cityController.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { verifyAdmin } from '../middleware/adminMiddleware.js'

const routes = express.Router()

/**
 * @swagger
 * /api/citys:
 *   get:
 *     summary: Get All City by province id 
 *     tags:
 *        - Citys
 *     security:
 *       - BearerAuth: []
 *     description: Get All City by province id 
 *     parameters:
 *       - name: province_id
 *         in: query
 *         required: true
 *         description: The province id
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: Get All Citys
 *       422:
 *         description: No Query found
 *       401: 
 *          description: Access Denied
 *       500:
 *         description: Internal Server Error
 */
routes.get("",verifyToken,getAllCityByProvinceID)

export default routes

