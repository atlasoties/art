const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
	chatName:{
		type:String,
		required:true,
		trim:true
	},
	isGroupChat:{
		type:Boolean,
		required:true,
		default:false
	},
	users:[
			{
				type:mongoose.Schema.Types.ObjectId,
				required:true,
				ref:'User'
			}
		],
	latestMessage:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Message'
	},
	groupAdmin:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
},{
	timestamps:true
})


module.exports = mongoose.model("Chat", chatSchema);
