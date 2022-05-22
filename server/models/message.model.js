const mongosse = require("mongosse");

const message = new mongoose.Schema({
	chat:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Chat'
	},
	text:{
		type:String,
		required:true,
		trim:true
	},
	sender:{
		type: mongoose.Schema.Types.ObjectId,
		ref:"User"
	}
},
{

	timestamps:true
});

module.exports = mongoose.model("Message",message);
