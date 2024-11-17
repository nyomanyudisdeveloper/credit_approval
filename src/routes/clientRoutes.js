import express from 'express'
import { verifyToken } from '../middleware/authMiddleware.js'
import { createNewClient, getPaginationClients, updateStatusClient } from '../controllers/clientsController.js'

const routes = express.Router()
/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Get All Clients
 *     tags:
 *        - Clients
 *     security:
 *       - BearerAuth: []
 *     description: Get All Clients
 *     parameters:
 *       - name: page
 *         in: query
 *         required: false
 *         description: Pagination Client
 *         schema:
 *           type: string
 *           example: "1"
 *       - name: limit
 *         in: query
 *         required: false
 *         description: Pagination Limit per Page  Client
 *         schema:
 *           type: string
 *           example: "5"
 * 
 *     responses:
 *       200:
 *         description: Get All Clients
 *       401: 
 *          description: Access Denied
 *       500:
 *         description: Internal Server Error
 */
routes.get("",verifyToken,getPaginationClients)

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Create new client
 *     tags:
 *        - Clients
 *     security:
 *       - BearerAuth: []
 *     description: Create new client
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      full_name:
 *                          type: string
 *                          description: client full name
 *                          example: Yudis Aditya
 *                      birth_place:
 *                          type: string
 *                          description: client birth place
 *                          example: Bekasi
 *                      birth_date:
 *                          type: string
 *                          description: client birth date
 *                          example: 1995-06-25
 *                      gender:
 *                          type: string
 *                          description: client gender
 *                          example: M
 *                      occupation_id:
 *                          type: string
 *                          description: client occupation id
 *                          example: 1
 *                      province_id:
 *                          type: string
 *                          description: client province id
 *                          example: 1
 *                      city_id:
 *                          type: string
 *                          description: client city id
 *                          example: 1
 *                      district_id:
 *                          type: string
 *                          description: client district id
 *                          example: 1
 *                      rt:
 *                          type: string
 *                          description: client rt address
 *                          example: 12
 *                      rw:
 *                          type: string
 *                          description: client rw address
 *                          example: 5
 *                      nominal_payment:
 *                          type: string
 *                          description: client nominal_payment
 *                          example: 1000000
 *     responses:
 *       200:
 *         description: Login success and will return token
 *       401:
 *         description: Authentication failed 
 *       400:
 *         description: This request required body username and password
 *       500:
 *         description: Internal Server Error
 */
routes.post("",verifyToken,createNewClient)
routes.put("/status",verifyToken,updateStatusClient)

export default routes

