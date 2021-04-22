const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config()
const getRoutes = require("./controller/get");
const file = require('./controller/file');
const showFile = require("./controller/showFile");
const connectDatabase = require('./database/connection');
const downloadFile = require('./controller/download');
app.get("/",getRoutes.index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.post("/uploadfile",file.uploadFile);
app.get("/files/:uuid",showFile.show);
app.get(`/files/download/:uuid`,downloadFile.downloadFile);


connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`App running at http://127.0.0.1:${process.env.PORT}`);
});