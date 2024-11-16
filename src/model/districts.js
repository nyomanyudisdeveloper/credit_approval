import pool from "../config/db.js"


export const fetchGetAllDistrictByCityID = async (cityID) => {
    const districts = await pool.query(`
        SELECT a.* 
        FROM districts a 
        JOIN citys b 
            ON a.city_id = b.id 
        WHERE a.crud_status != 'D' and b.crud_status != 'D'
        AND b.id = '${cityID}'
    `)

    return districts.rows
}