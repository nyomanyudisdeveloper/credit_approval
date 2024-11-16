import express from 'express'
import occupationRoutes from './routes/occupationRoutes.js'
import provinceRoutes from './routes/provinceRoutes.js'
import cityRoutes from './routes/cityRoutes.js'
import userRoutes from './routes/userRoutes.js'
import swaggerSpec from './swaggerConfig.js'
import swaggerUi from 'swagger-ui-express'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/occupations', occupationRoutes)
app.use('/api/provinces', provinceRoutes)
app.use('/api/citys', cityRoutes)
app.use('/api/users',userRoutes)

export default app