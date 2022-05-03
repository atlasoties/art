const mongosse = require("mongosse");
const blogSchema = new mongoose.Schema({
	content:{
		type:String,
		required:true
	},
	author:{
		user: mongoose.Schema.Types.ObjectId,
		ref:"User"
	}
},
{

	timestamps:true
});

module.exports = mongoose.model("Blog",blogSchema);