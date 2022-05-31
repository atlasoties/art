const mongoose = require('mongoose');
const hash = require('js-sha256');
const Product = mongoose.model("Product");
const User = mongoose.model("User");

class ProductActions {


	async add(request, response) {
		
		const user = await User.findById(request.user.id);
		if(!user){
			response.status(401).json("User not Found");
		}

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
		const product =await Product.findById({id:id});
		if(!product){
			response.status(401).json("Product Not Found");
		}
		const user = await User.findById(request.user.id);
		if(!user){
			response.status(401).json("User not Found");
		}
		if(product.owner.toString() !== user.id){
			response.status(401).json("Unauthorized");
		}
		const {name,description,category,price} = request.body;
			await Product.findOneAndUpdate(id,request.body,{new:true});
			response.status(200).json("User Updated Succesfully");
	}

	async deletes(request, response) {
		const paramsId = request.params.id;
		const id = request.user.id;
		const product =await Product.findById({_id:paramsId});
		if(!product){
			response.status(401).json("Product Not Found");
		}
		const user = await User.findById({_id:id});
		if(!user){
			response.status(401).json("User not Found");
		}
		if(product.owner.toString() !== user._id){
			response.status(401).json("Unauthorized");
		}
		await product.remove()
		response.status(200).json("Product Deleted Succesfully");

			
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