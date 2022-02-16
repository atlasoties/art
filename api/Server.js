require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE,{
	useUnifiedTopology:true,
	useNewUrlParser:true,
});

mongoose.connection.on('error',(err)=>{
	console.log(err);
});

mongoose.connection.once('open',()=>{
	console.log("Mongodb connected");
});
require("./model/User");


app.use('/user',require('./routes/userRoute'));



app.listen(PORT,()=>{
	console.log("server listening on port 3030");
});

