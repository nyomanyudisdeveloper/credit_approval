import pool from "../config/db.js"


export const fetchGetPaginationClients = async (limit=5, page=1) => {
    const offset = (page - 1)* limit
    const query = `
        SELECT * 
        FROM clients
        LIMIT ${limit} OFFSET ${offset}
    `
    const clients = await pool.query(query)
    return clients.rows
}

export const fetchCreateNewClient = async(data) => {
    const {
        birth_place,
        birth_date,
        gender,
        occupation_id,
        province_id,
        city_id,
        district_id,
        rt,
        rw,
        nominal_payment
    } = data

    const query = `
        INSERT INTO clients(birth_place,birth_date,gender,occupation_id,province_id,city_id,district_id,rt,rw,nominal_payment)
        VALUES ('${birth_place}','${birth_date}','${gender}','${occupation_id}','${province_id}','${city_id}','${district_id}','${rt}','${rw}','${nominal_payment}')
        RETURNING *;
    `

    const clients = await pool.query(query)
    return clients.rows[0]
}

export const fetchUpdateClientStatus = async(client_id,status) => {
    const query = `
        UPDATE clients
        SET status = '${status}'
        WHERE id = ${client_id}
        RETURNING *;
    `
    const clients = await pool.query(query)
    return clients.rows[0]
}