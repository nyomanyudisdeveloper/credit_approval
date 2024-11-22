import express from 'express'
import occupationRoutes from './routes/occupationRoutes.js'
import provinceRoutes from './routes/provinceRoutes.js'
import cityRoutes from './routes/cityRoutes.js'
import userRoutes from './routes/userRoutes.js'
import districRoutes from'./routes/districtRoutes.js'
import clientRoutes from './routes/clientRoutes.js'
import swaggerSpec from '../swaggerConfig.js'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'

dotenv.config()

// const enviroment = process.env.ENV || 'Development'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use(
//     '/api-docs',
//     express.static('node_modules/swagger-ui-dist/', {index: false}),
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerSpec),
// );

app.use('/api/occupations', occupationRoutes)
app.use('/api/provinces', provinceRoutes)
app.use('/api/citys', cityRoutes)
app.use('/api/users',userRoutes)
app.use('/api/districts',districRoutes)
app.use('/api/clients',clientRoutes)

app.get("/", async (req,res,next) => {
    return res.send(`You are running on `)
})

export default app