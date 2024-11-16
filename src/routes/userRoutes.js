import express from 'express'
import { login, registerUser } from '../controllers/userController.js'

const routes = express.Router()

routes.post("/register",registerUser)
/**
 * @swagger
 * api/login:
 *   get:
 *     summary: Retrieve an example
 *     description: Retrieve an example object.
 *     responses:
 *       200:
 *         description: A successful response
 */
routes.post("/login",login)

export default routes