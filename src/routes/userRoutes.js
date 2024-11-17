import express from 'express'
import { getUsersBlocked, login, registerUser, unblockUserByID } from '../controllers/userController.js'
import { verifyAdmin } from '../middleware/adminMiddleware.js'
import { verifyToken } from '../middleware/authMiddleware.js'

const routes = express.Router()

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Create new user 
 *     tags:
 *        - Users
 *     security:
 *       - BearerAuth: []
 *     description: Create new user with email, password, and role [admin,cs,supervisor]
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          description: The user email 
 *                          example: test@mailinator.com
 *                      password:
 *                          type: string
 *                          description: The user password 
 *                          example: admin123
 *                      role:
 *                          type: string
 *                          description: The user role 
 *                          example: admin
 *     responses:
 *       200:
 *         description: Create new user success
 *       401:
 *         description: Invalid data body
 *       400:
 *         description: This request required body username, password, and role
 *       500:
 *         description: Internal Server Error
 */
routes.post("/register",registerUser)

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login to API to get token 
 *     tags:
 *        - Users
 *     security:
 *       - BearerAuth: []
 *     description: Login to API with email and password to get token.
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          description: The user email 
 *                          example: test@mailinator.com
 *                      password:
 *                          type: string
 *                          description: The user password 
 *                          example: admin123
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
routes.post("/login",login)

/**
 * @swagger
 * /api/users/blocked:
 *   get:
 *     summary: Get All Users who got blocked
 *     tags:
 *        - Users
 *     security:
 *       - BearerAuth: []
 *     description: Get All Users who got blocked
 *     responses:
 *       200:
 *         description: Get All Users who got blocked
 *       401: 
 *          description: Access Denied
 *       500:
 *         description: Internal Server Error
 */
routes.get("/blocked",verifyToken,verifyAdmin,getUsersBlocked)

/**
 * @swagger
 * /api/users/unblock/{userID}:
 *   put:
 *     summary: Unblock user by id
 *     tags:
 *        - Users
 *     security:
 *       - BearerAuth: []
 *     description: Unblock user by id
 *     parameters:
 *       - name: userID
 *         in: path
 *         required: true
 *         description: The user id
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: Unblock user success
 *       401: 
 *          description: Access Denied
 *       422: 
 *          description: Parameter userID not found
 *       500:
 *         description: Internal Server Error
 */
routes.put("/unblock/:userID",verifyToken,verifyAdmin,unblockUserByID)

export default routes