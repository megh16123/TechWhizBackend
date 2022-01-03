const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const apiRouter = require('./routes/userlogin');

app.use('/api',apiRouter);


app.listen(port,(req,res)=>{
    console.log(`App listening on ${port}`);
})