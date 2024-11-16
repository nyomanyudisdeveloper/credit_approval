import pool from "../config/db.js"


export const fetchRegisterUser = async (username,password,role) => {
    const user = await pool.query(`
        INSERT INTO users(username,password,role)
        VALUES('${username}','${password}','${role}')
    `)
    return user.rows[0]
}

export const fetchGetUserByUserName = async (username) => {
    const user = await pool.query(`
        SELECT * 
        FROM users 
        WHERE username = '${username}'
    `)

    return user.rows[0]
}