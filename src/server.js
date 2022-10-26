const express = require('express'); //
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const [rows,fields] = await db.query("SELECT * FROM sys.users");
    return res.json({message: rows});
})

app.get('/test', async (req, res) => {
    const [rows,fields] = await db.query("INSERT INTO sys.users (idade,name) VALUES (15,'thiago');")
    return res.json({message: rows});
})

app.listen(3000, () => console.log('Server is running on port 3000'));