const express = require("express");
const app = express();
require('dotenv').config()
const getRoutes = require("./controller/get");
const file = require('./controller/file');
const showFile = require("./controller/showFile");
const connectDatabase = require('./database/connection');
const downloadFile = require('./controller/download');
const deletes = require("./controller/delete");
var bodyParser = require('body-parser')
const rateLimiter = require('./validators/uploadLimiter');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers: Content-Type, Custom-Header");
  next();
})


app.get("/",getRoutes.index); //app base url route



app.post("/api/uploadfile", file.uploadFile,rateLimiter.uploadLimiter);    //when URL hits BASE_URL/uploadfile route
app.post("/api/file",showFile.show,deletes.deleteFiles);      //when URL hits BASE_URL/file route
app.get(`/files/download/:uuid`,downloadFile.downloadFile); //when URL hits /files/download/any_uuid


connectDatabase(); //connect database

/**listen on port and serve */
app.listen(process.env.PORT,()=>{
    console.log(`App running at ${process.env.APP_BASE_URL}`);
});