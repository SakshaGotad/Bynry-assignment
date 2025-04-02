const express = require ('express');
const app = express();
const profileRoute = require('./adminroute/profileroute');
const getConnection = require('./Utils/getConnection');
const cors = require('cors');
require('dotenv').config();

getConnection();
app.use(express.json());

app.use(cors({
    origin:['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
}));

app.use('/api', profileRoute);

app.listen(5000,()=>console.log('server is listening at port 5000'));