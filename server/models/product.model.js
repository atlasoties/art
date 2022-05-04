const mongoose = require('mongoose');
const User = mongoose.model('User');
const Schema = mongoose.Schema;
const productSchema = new Schema({
	name: {
		type: String,
		required: "Name of product is required"
	},
	description: {
		type: String,
		required: "Description is required"
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref:'User'

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