const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/DbConfig');

const app = express();

const corsOptions = {
    origin: "*",
    credentials: true,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    "optionsSuccessStatus": 204
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Server started : ${process.env.PORT}`)
});