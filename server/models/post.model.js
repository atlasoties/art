const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
	poster: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'User',
		required:true
	},
	text: {
		type: String,
		required: "Description is required"
	},
	
	avatar: {
		type: String,
	},
	date:{
		type:Date,
		default:Date.now
	},
	likes:{
		type:Array,
		default:[]
	},
	comments:[
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
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