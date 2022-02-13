const mongoose = require('mongoose');

const express = require('express');
const PORT = 3030;
const app = express();

app.listen(PORT,()=>{
	console.log("server listening on port 3030");
});

app.get('/one',(req,res,next) => {
	res.status(200).send("Hellllo");
});

