const { createPool } = require('mysql2');

const pool = createPool({
    host: 'db',
    port: 3306,
    password: 'root',
    user: 'root',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool.promise();