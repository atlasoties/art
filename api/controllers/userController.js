const mongoose = require('mongoose');
const hash = require('js-sha256');
const User = mongoose.model("User");
const register = async (request ,response) => {
const {name , email , password, dob} = request.body;


	if(name && email && password && dob){
		let exception=" ";
		const regExp = /@gmail.com|@yahoo.com|@facebook.com|@live.com/;
		if(!regExp.test(email)) response.status(404).json("Email domain is not supported");

		if(password.length < 8) response.status(404).json("Password length must be equal to 8 characters or above");
		
			const user = new User(
				{name,
				email,
				password:hash(password+process.env.SALT),
				dob});
			await user.save();
			response.json({
				message:"user registerd successfully"
			});	

	}
	else{
		response.status(400).json("ALL fields should be filled in")
	}
}


	const login = async (request ,response) => {
		const {email,password} = request.body;
		if(email && password){

		const user = await User.findOne({
			email,
			password: hash(password+process.env.SALT), 
		});
		if(!user){
			response.status(404).json("Your Credential does not match");
		}else{
			response.status(200).json("user logged in successfully");
		}
	}else{

		response.status(400).json("ALL fields should be filled in");
	}
}


module.exports = {
	register,
	login
};