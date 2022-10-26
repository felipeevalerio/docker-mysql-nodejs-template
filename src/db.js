import { createPool } from 'mysql2';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathENV = path.join(__dirname, '../process.env');
dotenv.config({path: pathENV});

console.log(process.env)
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