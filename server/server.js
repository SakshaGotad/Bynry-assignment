const express = require ('express');
const app = express();
const profileRoute = require('./adminroute/profileroute')

app.use('/api', profileRoute);

app.listen(5000,()=>console.log('server is listening at port 5000'));