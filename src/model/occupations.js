import pool from "../config/db.js"

export const fetchAllOccupations = async () => {
    const result = await pool.query("SELECT * FROM occupations WHERE crud_status != 'D'")
    return result.rows
}