const mongoose = require('mongoose');
const hash = require('js-sha256');
const User = mongoose.model("User");
const jwt = require("jwt-then");
class UserActions{
	
	// @route user/register
	// @desc  Register User
	// @acces Public
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



	// @route user/login
	// @desc  Login User
	// @acces Public
	 async login (request ,response) {
		const {email,password} = request.body;
		try{
				if(email && password){

					const user = await User.findOne({
						email:email,
						password: hash(password+process.env.SALT), 
					});
					console.log(user);
					if(user){
						const token = await jwt.sign({id:user.id},process.env.SECRET);
						const {password,updatedAt,createdAt, ...other} = user._doc;
						response.status(200).json({
							message:"user logged in successfully",
							token:token,
							other
						});
					}else{
						response.json("Your Credential does not match");
					}
				}
				else{
					response.json("All fields should be filled in");
				}
		}
		catch(err){
			response.status(500).json(err);
		}
	}
	
	// @route user/get
	// @desc  Get a User
	// @acces Private
	async getUser(request,response){
		const id  = request.user.id;
		try{
			const user =  await User.findById({_id:id});
			if(!user){
				response.status(404).json("User not found");
			}
			const {password, ...other} = user._doc;
			response.status(200).json(other);
		}catch(err){
			response.status(500).json(err);
		}
		
	}

	// @route user/update
	// @desc  update a User
	// @acces Private
	async update (request, response){
		const id = request.user.id;
				const user = await User.findById({id});
				if(!user){
					response.status(401).json("Not Found");
				}

				const updatedUser = await User.findOneAndUpdate(id,{$set:req.body});
				response.status(200).json(updatedUser);
	}
		
	
	// @route user/delete
	// @desc  delete a User
	// @acces Private
	async deletes(request, response){
		const id = request.user.id;
		const user = await User.findById({id});
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
	
	// @route user/:id/follow
	// @desc  Follow a User
	// @acces Private
	async followUser(request,response){
		const id = request.user.id;
		const paramsId = request.params.id;

			if(id !== paramsId){
				try{
					const userToFollow = await User.findById({_id:id});
					const userToBeFollowed = await User.findById(paramsId);

					if(userToFollow && userToBeFollowed){
						console.log(userToBeFollowed)
						if(!userToBeFollowed.followers.includes(userToFollow._id)){
							await userToBeFollowed.updateOne({$push:{followers:id}});
							await userToFollow.updateOne({$push:{following:paramsId}});
							response.status(200).json("User has been followed");
						}else{
							response.status(401).json("You are already following this user");
						}
					}
				}
				catch(err){
					response.status(500).json(err.message);
				}
			}else{
				response.status(403).json("You can not follow yourself");
			}
		}
		
	// @route user/:id/unfollow
	// @desc  Unfollow a User
	// @acces Private
	async unfollowUser(request,response){
			const id = request.user.id;
			const paramsId = request.params.id;

				if(id == paramsId){
					try{
						const userToFollow = await User.findById({id});
						const userToBeFollowed = await User.findById({paramsId});
						if(userToFollow && userToBeFollowed){
							if(!userToBeFollow.followers.includes(userToFollow._id)){
								await userToBeFollowed.updateOne({$pull:{followers:id}});
								await userToFollow.updateOne({$pull:{following:paramsId}});
								response.status(200).json("User has been unfollowed");
							}else{
								response.status(401).json("You are not following this user");
							}
						}
					}
					catch(err){
						response.status(500).json(err);
					}
				}else{
					response.status(403).json("You can not unfollow yourself");
				}
			}
	async searchUser(request,response){
		const keyword =request.query.search ? {
			$or:[
					{name:{$regex:request.query.search, $options:'i'}},
					{email:{$regex:request.query.search, $options:'i'}}
				]
			}:{};

		const users  = await User.find(keyword).find({_id:{$ne:request.user.id}})
		response.status(200).json(users);
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