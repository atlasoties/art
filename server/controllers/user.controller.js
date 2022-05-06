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
					const user = await new User(
						{
						name,
						email,
						password:hash(password+process.env.SALT),
						dob
					});
					user.save();
					response.json({
						message:"user registerd successfully"
					});	
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
					token:token
				});
			}else{
				response.status(404).json("Your Credential does not match");
			}
		}
		else{
			response.status(400).json("All fields should be filled in");
		}
	}
	
	async update (request, response){
		const id = request.params.id;
		User.findOneAndUpdate({id:id});
	}
	
	async deletes(request, response){
		const id = request.params.id;
		await User.findById(id)
			.then(item => item.remove().then(()=>response.status(200).json("Item Deleted Successfully")))
			.catch(err=> response.status(404).json("The User doesn't Exist in the database"));
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