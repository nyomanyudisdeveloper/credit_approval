import express from 'express'
import { login, registerUser } from '../controllers/userController.js'

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

export default routes