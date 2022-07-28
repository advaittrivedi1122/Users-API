const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Users';
const app = express();

mongoose.connect(url);
const con = mongoose.connection;

app.listen(3000,()=>{
    console.log("Server started...");
})

con.on('open',()=>{
    console.log("Db connected...!!");
})

app.use(express.json());

const userRouter = require('./routes/users');
app.use('/',userRouter);