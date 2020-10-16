const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const http=require("http");
const cors=require("cors");

//integration of the database
const config = require("./config");
//connecting to the database
const mongoose = require("mongoose");
const app = express();
mongoose.connect(config.database, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log(('connecting to the database'));
    }

})
var db=mongoose.connection;
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors('*'))

app.use((req,res,next)=>{
    res.header('Access-control-Allow-Origin','*')
    res.header('Access-Control-Allow-Header','Origin,X-Request-With,Content-Type,Accept,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Method','PUT,POST,GET,PATCH,DELETE');
        return res.status(200).json({});
    }
    next();
})
app.use(function (err, req, res, next) {
    console.log(err);
    if (err.status === 404)
        res.status(404).json({message: "Not found"});
    else
        res.status(500).json({message: "Something looks wrong"});
});



app.set('secretkey','test')

var api = require('./app/routers/api')(app, express);
const sens=require('./app/routers/sensor')(app,express);
app.use('/api', api);
app.use('/sensor',sens)
app.get('*', function (req,res) {
    res.sendFile(__dirname +'/public/views/index.html');

});


//creating new instance of express object
app.listen(config.port, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("listenning on port 3000");
    }

});
