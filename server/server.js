require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
const jwt = require("jwt-then");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('cors')());
mongoose.connect(process.env.DATABASE, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

mongoose.connection.on('error', (err) => {
	console.log(err);
});

mongoose.connection.once('open', () => {
	console.log("Mongodb connected");
});
require(path.resolve(__dirname, "models", "user.model"));
require(path.resolve(__dirname, "models", "product.model"));
/******/
app.use('/user', require(path.resolve(__dirname, "routes", "user.route")));
app.use('/product', require(path.resolve(__dirname, "routes", "product.route")));

const server = app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});


const io = require('socket.io')(server ,{
	cors:{
		origin:'http://localhost:3000',
		methods:['GET','POST']
	}
});

io.use(async (socket,next)=>{
	try{
		const token = socket.handshake.query.token;
		const payload = await jwt.verify(token, process.env.SECRET);
		socket.userId = payload.id;
		next();
	}catch(err){
		console.log(err);
	}
});

io.on('connection', socket =>{
	socket.emit('connected',socket.userId);

	socket.on('disconnect',()=>{
		socket.broadcast.emit('callEnded');
	});

	socket.on('callUser', data =>{
		io.to(data.userToCall).emit('callUser',{signal:data.signalData,
												from:data.from,
												name:data.name});
	});

	socket.on('answerCall', data =>io.to(data.to).emit('callAccepted' ,data.signal));
});
