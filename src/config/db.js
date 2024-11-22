import pkg from 'pg'
const {Pool} = pkg;
import dotenv from 'dotenv'
dotenv.config()

const enviroment = process.env.NODE_ENV || 'development'

const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
})

pool.on('connect', () => {
    console.log('Connected to PostgreSQL databse')
})

export default pool