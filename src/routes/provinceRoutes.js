import express from 'express'
import { getAllProvinces } from '../controllers/provinceController.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { verifyAdmin } from '../middleware/adminMiddleware.js'

const routes = express.Router()

/**
 * @swagger
 * /api/provinces:
 *   get:
 *     summary: Get All Provinces
 *     tags:
 *        - Provinces
 *     security:
 *       - BearerAuth: []
 *     description: Get All Provinces
 *     responses:
 *       200:
 *         description: Get All Provinces
 *       401: 
 *          description: Access Denied
 *       500:
 *         description: Internal Server Error
 */
routes.get("",verifyToken,verifyAdmin,getAllProvinces)

export default routes