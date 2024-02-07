const pool = require('../config/database');

const getAllUsers = async() => {
    const query = `select * from m_user`;

    const res = (await pool.query(query)).rows;
    
    return res
}


module.exports = {
    getAllUsers
}