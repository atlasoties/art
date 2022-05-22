const mongoose = require('mongoose');
const hash = require('js-sha256');
const Post = mongoose.model("Post");
const User = mongoose.model("User");
class PostActions {

	// @route post/add
	// @desc Add post
	// @acces public
	async add(request, response) {

		const user = await User.findById(request.user.id);
		if(!user){
			response.status(401).json("User not Found");
		}
		const {text } = request.body;
		if (text) {
			const post = await new Post({$set:request.body});
				const newPost = post.save();
				response.json({
					message: "post added successfully",
					newPost
				});
			}
		else {
			response.status(400).json("All fields should be filled in")
		}
	}


	// @route Put /update:id
	// @desc  Update post
	// @acces private
	async update(request, response) {
		const id = request.params.id;
		const post = await Post.findById({id:id});
		const user = await User.findById(request.user.id);

		if(!post){
			response.status(401).json("Post Not Found");
		}
		if(!user){
			response.status(401).json("User not Found");
		}
		if(post.poster.toString() !== user.id){
			response.status(401).json("Unauthorized");
		}
		const updatedPost = await Post.findOneAndUpdate({ _id: id });
		response.status(200).json(updatedPost);
	}
	// @route Delete delete:id
	// @desc  Delete post
	// @acces private

	async deletes(request, response){
		const paramsId = request.params.id;
		const id = request.user.id;
		const product =await Post.findById({_id:paramsId});
		if(!post){
			response.status(401).json("Post Not Found");
		}
		const user = await User.findById({_id:id});
		if(!user){
			response.status(401).json("User not Found");
		}
		if(post.owner.toString() !== user._id){
			response.status(401).json("Unauthorized");
		}
		await post.remove()
		response.status(200).json("Post Deleted Succesfully");

	}


	// @route PUT id:/like
	// @desc  likeUnlike post
	// @acces private

	async likeUnlike(request, response) {
		try{
			const post = await Post.findById(request.params.id);
			const user = await User.findById(request.user.id);
			if(post && user){
				if(!post.likes.includes(user.id)){
					await post.updateOne({$push:{likes:user._id}});
					response.status(200).json("You liked the post");
				}else{
					await post.updateOne({$pull:{likes:user._id}});
					response.status(200).json("You disliked the post");
				}
			}

		}
		catch(err){
			response.status(500).json(err);
		}

	}


	async getPost(request, response) {
		try{
			const post = await Post.findById(request.params.id);
			response.status(200).json(post);
		}catch(err){
			response.status(500).json(err);
		}
	}

	async showTimeline(request, response) {
		let postCollection = [];
		try{
			const currentUser = await User.findById(request.user.id);
			const currentUserPosts = await Post.find({poster:currentUser._id});

			const friendsPost = await Promise.all(
				currentUser.following.map(friendId =>{
					return Post.find({poster:friendId})
				})
				);
			response.status(200).json(currentUserPosts.concat(...friendsPost));
		}catch(err){
			response.status(500).json(err);
		}
	}


}


module.exports =
	new PostActions
	;