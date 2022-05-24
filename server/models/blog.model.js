const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
	content:{
		type:String,
		required:true
	},
	author:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	likes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref:'User'
			}
		}
	],
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

	timestamps:true
});

module.exports = mongoose.model("Blog",blogSchema);