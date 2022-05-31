const mongoose = require('mongoose');
const hash = require('js-sha256');
const User = mongoose.model("User");
const Post = mongoose.model("Post");
class PostActions {

	// @route post/add
	// @desc Add post
	// @acces public
	async add(request, response) {

		const user = await User.findById(request.user.id);
		if(!user){
			response.status(401).json("User not Found");
		}
		const {text ,...other} = request.body;
		if (text) {
			const post = await new Post({poster:user._id,text});
				if(post){
					const newPost = await post.save();
					response.json({
					message: "post added successfully",
					newPost
					});
				}else{
					response.status(401).json("Empty")
				}
				
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
	async comment(request,response){
		const {text} = request.body;
		const postId = request.params.id;
		const commenter = await User.findById(request.user.id);
		const post = await Post.findById(postId);
		if(!commenter || !post){
			response.status(404).json("User Not Found");
		}
		try{
			const commentdata = {
									user:commenter._id,
									text:text,
									avatar:commenter.avatarImage,
									name:commenter.name
									};
		
			await post.updateOne({$push:{comments:commentdata}},{new:true});
			response.status(200).json(post)
		}catch(error){
			response.status(500).json(error.message);
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
	async show(request, response) {
		await Post.find()
		.then( post =>{ response.status(200).json(post)})
	}

}


module.exports =
	new PostActions
	;