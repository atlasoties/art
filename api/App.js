const mongoose = require('mongoose');

const express = require('express');

const app = express();

app.listen("3030",()=>{
	console.log("server listening on port 3030");
});


module.exports = app;
