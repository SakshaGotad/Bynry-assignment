const express = require ('express');
const app = express();


app.use('/')

app.listen(5000,()=>console.log('server is listening at port 5000'));