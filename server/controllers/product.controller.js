const mongoose = require('mongoose');
const hash = require('js-sha256');
const Product = mongoose.model("Product");

class ProductActions {


	async add(request, response) {

		const { name, description, price, category } = request.body;
		if (name && description && price && category) {
			const product = await new Product(
				{
					name,
					description,
					price,
					category
				});
				product.save();
				response.json({
					message: "Product added successfully"
				});
			}
		else {
			response.status(400).json("All fields should be filled in")
		}
	}



	async update(request, response) {
		const id = request.params.id;
		Product.findOneAndUpdate({ id: id });
	}

	async delete(request, response) {
		const id = request.params.id;
		await Product.findById(id)
			.then(item => item.remove().then(() => response.status(200).json("Item Deleted Successfully")))
			.catch(err => response.status(404).json("The product doesn't Exist in the database"));
	}

	async show(request, response) {
		await Product.find()
			.sort({ date: -1 })
			.then(items => response.json(items));
	}
}


module.exports =
	new ProductActions
	;