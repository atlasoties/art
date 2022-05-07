const jwt = require("jwt-then");

const protect = async (request,response,next) => {
	try{
		if(!request.headers.authorization) throw "Forbidden!!";
		const token = request.headers.authorization.split(" ")[1];
		const payload = await jwt.verify(token, process.env.SECRET);
		request.payload = payload;
		next();
	}catch(error){
		response.status(401).json({
			message:"Forbidden Access of Resource"
		})
	}
}
}

module.exports = {protect,};
