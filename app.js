const express = require("express");

const app = express();
require('dotenv').config()
const getRoutes = require("./controller/get");
const file = require('./controller/file');
const connectDatabase = require('./database/connection');

app.get("/",getRoutes.index);





app.post("/uploadfile",file.uploadFile);



connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`App running at http://127.0.0.1:${process.env.PORT}`);
});