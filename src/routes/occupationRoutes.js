import express from 'express'
import { getAllOccupations } from '../controllers/occupationController.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { verifyAdmin } from '../middleware/adminMiddleware.js'

const routes = express.Router()

/**
 * @swagger
 * /api/occupations:
 *   get:
 *     summary: Get All Occupations
 *     tags:
 *        - Occupations
 *     security:
 *       - BearerAuth: []
 *     description: Get All Occupations
 *     responses:
 *       200:
 *         description: Get All Occupations
 *       401: 
 *          description: Access Denied
 *       500:
 *         description: Internal Server Error
 */
routes.get("",verifyToken,getAllOccupations)

export default routes