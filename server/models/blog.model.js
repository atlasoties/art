const mongosse = require("mongosse");
const blogSchema = new mongoose.Schema({
	content:{
		type:String,
		required:true
	},
	author:{
		user: mongoose.Schema.Types.ObjectId,
		ref:"User"
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

	timestamps:true
});

module.exports = mongoose.model("Blog",blogSchema);