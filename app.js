const express = require("express");
const app = express();
require('dotenv').config()
const getRoutes = require("./controller/get");
const file = require('./controller/file');
const showFile = require("./controller/showFile");
const connectDatabase = require('./database/connection');
const downloadFile = require('./controller/download');

app.get("/",getRoutes.index); //app base url route



app.post("/uploadfile",file.uploadFile);    //when URL hits BASE_URL/uploafile route
app.get("/files/:uuid",showFile.show);      //when URL hits BASE_URL/any_uuid route
app.get(`/files/download/:uuid`,downloadFile.downloadFile); //when URL hits /files/download/any_uuid


connectDatabase(); //connect database

/**listen on port and serve */
app.listen(process.env.PORT,()=>{
    console.log(`App running at ${process.env.APP_BASE_URL}`);
});