const express = require('express');
const dotenv = require('dotenv');
const exphbs  = require('express-handlebars');
const path = require('path')
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


// Engine Handler 
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Router Importing
const apiRouter = require('./routes/userlogin');
const Hyperion = require('./routes/hyperionRouter');
// const hostname =  '192.168.1.91'
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/test',(req,res)=>{
    res.json({message:"Success!!"});
    });

// Router Using
app.use('/api',apiRouter);
app.use('/',express.static(path.join(__dirname,'static')))
app.use('/',Hyperion);
app.use('/:socName',express.static(path.join(__dirname,'static')));




app.listen(port,(req,res)=>{
    console.log(`App listening on  ${port}`);
})