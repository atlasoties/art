const mongoose = require('mongoose');
const User = mongoose.model('User');
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "Name of product is required"
	},
	description: {
		type: String,
		required: "Description is required"
	},
	owner: {
		type: User,

	},
	category: {
		type: String,
		required: "Category is required"
	},
	price: {
		type: Number,
		required: "Date of Birth is required"
	},

},
	{
		timestamps: true
	});

module.exports = mongoose.model("Product", productSchema);