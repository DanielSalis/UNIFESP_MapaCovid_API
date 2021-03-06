require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ extend: false }));

//Routes
app.use('/api/map', require('./routes/map'));


const PORT = process.env.PORT ? process.env.PORT : 3333;

console.log(`Server running on port ${PORT}`);
app.listen(PORT);

