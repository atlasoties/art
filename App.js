const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const PORT = 3030;
const app = express();



app.get('/one',(req,res,next) => {
	res.sendFile(path.join(__dirname,"./data.html"));
});
app.get('/one',(req,res,next) => {
	res.end("World");
});


app.get('/two',(req,res,next) => {
	res.write("Hellllo");
	next();
},(req,res,next) => {
	res.end("World");
});

app.listen(PORT,()=>{
	console.log("server listening on port 3030");
});

