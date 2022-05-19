const mongoose = require('mongoose');
const hash = require('js-sha256');
const User = mongoose.model("User");
const jwt = require("jwt-then");
class UserActions{
	

 async create (request ,response) {

	const {name , email , password, dob} = request.body;
	
	
		if(name && email && password && dob){
			
			const regExp = /@gmail.com|@yahoo.com|@facebook.com|@live.com/;
			if(!regExp.test(email)) response.status(404).json("Email domain is not supported");
	
			else if(password.length < 8) response.status(404).json("Password length must be equal to 8 characters or above");
			else{
					const userExists = await User.findOne({email})
					if(!userExists){
						const user = await new User(
							{
							name,
							email,
							password:hash(password+process.env.SALT),
							dob
						});
						user.save();
						response.json({
							success:"user registerd successfully"
						});	
					}else{
						response.status(404).json("User with provided email already exist");
					}
			}
		}
		else{
			response.status(400).json("All fields should be filled in")
		}
	}
	
	
	 async login (request ,response) {
		const {email,password} = request.body;
		if(email && password){

			const user = await User.findOne({
				email:email,
				password: hash(password+process.env.SALT), 
			});
			if(user){
				const token = await jwt.sign({id:user.id},process.env.SECRET);
				response.status(200).json({
					message:"user logged in successfully",
					token:token,
					user
				});
			}else{
				response.json("Your Credential does not match");
			}
		}
		else{
			response.json("All fields should be filled in");
		}
	}
	
	async logout(){

	
	}
	async update (request, response){
		const id = request.user.id;
		const user = await User.findById({id:id});
		if(!user){
			response.status(401).json("Not Found");
		}

		const updatedUser =await User.findOneAndUpdate(id,request.body,{new:true});
				response.status(200).json(updatedUser);
	
	}
	
	async deletes(request, response){
		const id = request.user.id;
		const user = await User.findById({id:id});
		if(!user){
			response.status(401).json("User Not Found");
		}

		await user.remove();
		response.status(200).json("User Deleted Successfully");
	}

	async profile(request, response){
		const id = request.user.id;
		const { _id, name, email}= await User.findById(id)
		response.status(200).json({
			id:_id,
			name,
			email
		});
	}
	
	async show (request, response){
		await User.find()
				  .sort({date:-1})
				  .then(items => response.json(items));
	}
}


module.exports = 
	new UserActions
;