const mongoose = require('mongoose');
const hash = require('js-sha256');
const Blog = mongoose.model("Blog");

class BlogActions {


	async add(request, response) {

		const { content } = request.body;
		if (content) {
			const blog = await new Blog({content});
				Blog.save();
				response.json({
					message: "Blog added successfully"
				});
			}
		else {
			response.status(400).json("All fields should be filled in")
		}
	}



	async update(request, response) {
		const id = request.params.id;
		Blog.findOneAndUpdate({ id: id });
	}

	async delete(request, response) {
		const id = request.params.id;
		await Blog.findById(id)
			.then(item => item.remove().then(() => response.status(200).json("Item Deleted Successfully")))
			.catch(err => response.status(404).json("The Blog doesn't Exist in the database"));
	}

	async show(request, response) {
		await Blog.find()
			.sort({ date: -1 })
			.then(items => response.json(items));
	}
}


module.exports =
	new BlogActions
	;