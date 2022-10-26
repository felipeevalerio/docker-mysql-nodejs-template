import { createPool } from 'mysql2';
import './config/dotenv.js';

const pool = createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USER,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool.promise();