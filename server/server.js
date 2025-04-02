const express = require ('express');
const app = express();
const profileRoute = require('./adminroute/profileroute');
const getConnection = require('./Utils/getConnection');
require('dotenv').config();

getConnection();
app.use(express.json());

app.use('/api', profileRoute);

app.listen(5000,()=>console.log('server is listening at port 5000'));