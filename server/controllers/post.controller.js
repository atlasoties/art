const mongoose = require('mongoose');
const hash = require('js-sha256');
const Post = mongoose.model("Post");

class PostActions {


	async add(request, response) {

		const user = await User.findById(request.user.id);
		if(!user){
			response.status(401).json("User not Found");
		}
		const {text } = request.body;
		if (text) {
			const post = await new Post(request.body);
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
		if(post.owner.toString() !== user.id){
			response.status(401).json("Unauthorized");
		}
		const updatedPost = await Post.findOneAndUpdate({ id: id });
		response.status(200).json(updatedPost);
	}

	async deletes(request, response) {
		const id = request.params.id;
		await Post.findById(id)
			.then(item => item.remove().then(() => response.status(200).json("Item Deleted Successfully")))
			.catch(err => response.status(404).json("The Post doesn't Exist in the database"));
	}

	async show(request, response) {
		await Post.find()
			.sort({ date: -1 })
			.then(items => response.json(items));
	}
}


module.exports =
	new PostActions
	;