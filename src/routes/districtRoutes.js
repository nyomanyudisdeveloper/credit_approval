import express from 'express'
import { verifyToken } from '../middleware/authMiddleware.js'
import { verifyAdmin } from '../middleware/adminMiddleware.js'
import { getAllDistrictByCityID } from '../controllers/districtController.js'

const routes = express.Router()

/**
 * @swagger
 * /api/districts:
 *   get:
 *     summary: Get All District by city id 
 *     tags:
 *        - Districts
 *     security:
 *       - BearerAuth: []
 *     description: Get All District by city id 
 *     parameters:
 *       - name: city_id
 *         in: query
 *         required: true
 *         description: The city id
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: Get All Districts
 *       422:
 *         description: No Query found
 *       401: 
 *          description: Access Denied
 *       500:
 *         description: Internal Server Error
 */
routes.get("",verifyToken,verifyAdmin,getAllDistrictByCityID)

export default routes

