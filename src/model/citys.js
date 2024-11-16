import pool from "../config/db.js"


export const fetchAllCityByProvinceID = async (province_id) => {
    const citys = await pool.query(`
        SELECT *
        FROM citys a 
        JOIN provinces b 
            ON a.province_id = b.id
        WHERE a.crud_status != 'D'
        AND b.crud_status != 'D'
        AND b.id = ${province_id} 
    `)

    return citys.rows
}
