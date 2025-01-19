const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'students_db_dev'
})

module.exports = mysqlPool