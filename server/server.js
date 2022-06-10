require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;
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
require(path.resolve(__dirname, "models", "post.model"));
require(path.resolve(__dirname, "models", "chat.model"));
require(path.resolve(__dirname, "models", "blog.model"));
require(path.resolve(__dirname, "models", "message.model"));
/******/
app.use('/user', require(path.resolve(__dirname, "routes", "user.route")));
app.use('/chat', require(path.resolve(__dirname, "routes", "chat.route")));
app.use('/post', require(path.resolve(__dirname, "routes", "post.route")));
app.use('/message', require(path.resolve(__dirname, "routes", "message.route")));
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

// io.use(async (socket,next)=>{
// 	try{
// 		const token = socket.handshake.query.token;
// 		const payload = await jwt.verify(token, process.env.SECRET);
// 		socket.userId = payload.id;
// 		next();
// 	}catch(err){
// 		console.log(err);
// 	}
// });

io.on('connection', socket =>{
	console.log('connected to web socket');

	socket.on('setup',(userdata)=>{
		socket.join(userdata._id);
		console.log(userdata._id);
		socket.emit('connected')
	});

	socket.on('join chat',(room)=>{
		socket.join(room);
		console.log("user joined room"+room);
	});


	socket.on('new message',(newMessageReceived)=>{
		var chat = newMessageReceived.chat;
		if(!chat.users) return console.log('chat.users not found')
		chat.users.forEach(users =>{
			if(user._id === newMessageReceived.sender._id) return;
			socket.in(user._id).emit('message received',newMessageReceived)
		})
	});

	socket.on('callUser', data =>{
		io.to(data.userToCall).emit('callUser',{signal:data.signalData,
												from:data.from,
												name:data.name});
	});

	socket.on('answerCall', data =>io.to(data.to).emit('callAccepted' ,data.signal));
});
