const mongosse = require("mongosse");

const message = new mongoose.Schema({
	conversationId:{
		type:mongoose.Schema.Types.ObjectId
	},
	text:{
		type:String,
		required:true
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
