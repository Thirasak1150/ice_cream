const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { readdirSync } = require('fs');
const db = require("./connectDb/database")
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

readdirSync('./Routers')
    .map((prefix) => app.use('/', require('./Routers/' + prefix)))

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});