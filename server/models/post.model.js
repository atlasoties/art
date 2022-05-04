const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	text: {
		type: String,
		required: "Description is required"
	},
	
	avatar: {
		type: String,
		required: "Category is required"
	},
	date:{
		type:Date,
		default:Date.now
	},
	likes: [
	{
		user: {
			type: Schema.Types.ObjectId,
			ref:'User'
		}
	}
	],
	comments:[
	{
		user: {
			type: Schema.Types.ObjectId,
			ref:'User'
		},
		text:{
			type:String,
			required:true
		},
		name:{
			type:String
		},
		avatar:{
			type:String
		},
		date:{
			type:Date,
			default:Date.now
		}

	}
	]

},
	{
		timestamps: true
	});

module.exports = mongoose.model("Post", postSchema);