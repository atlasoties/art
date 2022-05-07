const mongoose = require('mongoose');
const hash = require('js-sha256');
const Post = mongoose.model("Post");

class PostActions {


	async add(request, response) {

		const { user,text } = request.body;
		if (text) {
			const post = await new Post(
				{
					user,
					text
				});
				post.save();
				response.json({
					message: "post added successfully"
				});
			}
		else {
			response.status(400).json("All fields should be filled in")
		}
	}



	async update(request, response) {
		const id = request.params.id;
		Post.findOneAndUpdate({ id: id });
	}

	async delete(request, response) {
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