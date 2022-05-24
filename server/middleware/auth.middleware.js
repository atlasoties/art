const jwt = require("jwt-then");
const User = require('../models/user.model');
const Authenticate = async (request, response, next) => {
	let token;
			//check if token provided in the header

	if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
		try {
			token = request.headers.authorization.split(" ")[1];


			const payload = await jwt.verify(token, process.env.SECRET);


			request.user = await User.findById(payload.id).select('-password');
			next();
		} catch (error) {
			response.status(401).json("Forbidden Access of Resource or "+error.message)
		}
		if (!token) {
			response.status(401).json("Not Authorized, No Token")
		}
	}
	else{
		response.status(404).json("Authorization Headers Not Supplied")
	}
}



const socketprotector = async (socket,next)=>{
	try{
		const token = socket.handshake.query.token;
		const payload = await jwt.verify(token, process.env.SECRET);
		socket.userId = payload.id;
		next();
	}catch(err){
		console.log(err);
	}
}


module.exports = { Authenticate,socketprotector };
