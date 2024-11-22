import pkg from 'pg'
const {Pool} = pkg;
import dotenv from 'dotenv'
dotenv.config()

const enviroment = process.env.ENV || 'development'
var pool = null
if(enviroment == 'development'){
    pool = new Pool({
        host: process.env.PG_HOST_DEV,
        port: process.env.PG_PORT_DEV,
        user: process.env.PG_USER_DEV,
        password: process.env.PG_PASSWORD_DEV,
        database: process.env.PG_DATABASE_DEV
    })
}
else if(enviroment == 'local'){
    pool = new Pool({
        host: process.env.PG_HOST_LOCAL,
        port: process.env.PG_PORT_LOCAL,
        user: process.env.PG_USER_LOCAL,
        password: process.env.PG_PASSWORD_LOCAL,
        database: process.env.PG_DATABASE_LOCAL
    })
}


pool.on('connect', () => {
    console.log('Connected to PostgreSQL databse')
})

export default pool