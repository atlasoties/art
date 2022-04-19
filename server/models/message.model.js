const mongosse = require("mongosse");
const message = new mongoose.Schema({
	text:{
		type:String,
		required:true
	},
	sender:{
		user: mongoose.Schema.Types.ObjectId,
		ref:"User"
	}
},
{

	timestamps:true
});