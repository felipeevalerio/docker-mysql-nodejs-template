import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathENV = path.join(__dirname, '../../process.env');
export default dotenv.config({path: pathENV});