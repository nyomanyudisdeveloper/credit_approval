import exp from "constants"
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
        AND crud_status != 'D'
    `)

    return user.rows[0]
}


export const fetchAddCounterTotalLogin = async (userID,counter_total_login) => {
    await pool.query(`
        UPDATE users
        SET counter_total_login = ${counter_total_login}
        WHERE id = ${userID}
    `)
}

export const fetchGetUsersBlocked = async() => {
    const users = await pool.query(`
        SELECT id,email,role
        FROM users 
        WHERE crud_status != 'D'
        AND counter_total_login >= 3
    `)

    return users.rows
}

export const fetchUnblockUserByID = async(userID) => {
    const users = await pool.query(`
        UPDATE users 
        SET counter_total_login = 0
        WHERE id = ${userID}
        RETURNING *;
    `)

    return users.rows[0]
}