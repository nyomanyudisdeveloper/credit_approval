import pool from "../config/db.js"


export const fetchRegisterUser = async (email,password,role) => {
    const user = await pool.query(`
        INSERT INTO users(email,password,role)
        VALUES('${email}','${password}','${role}')
        RETURNING *;
    `)
    return user.rows[0]
}

export const fetchGetUserByEmail = async (email) => {
    const user = await pool.query(`
        SELECT * 
        FROM users 
        WHERE email = '${email}'
    `)

    return user.rows[0]
}