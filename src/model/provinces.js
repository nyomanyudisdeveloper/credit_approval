import pool from "../config/db.js"


export const fetchAllProvinces = async () => {
    const provinces = await pool.query("SELECT * FROM provinces WHERE crud_status != 'D'")
    return provinces.rows
}