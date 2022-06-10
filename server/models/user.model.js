const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name:{
		type:String,
		required:"Name is required"
	},
	email:{
		type:String,
		required:"Email is required"
	},
	password:{
		type:String,
		required:"password is required"
	},
	dob:{
		type:Date,
	},
	isAvatarImageSet:{
		type:Boolean,
		default:false
	},
	avatarImage:{
		type:String,
		default:" "
	},
	followers:[
		{
				type:mongoose.Schema.Types.ObjectId,
				required:true,
				ref:'User'
			}
	],
	following:[
{
				type:mongoose.Schema.Types.ObjectId,
				required:true,
				ref:'User'
			}
	]

},
{
	timestamps:true
});

module.exports=mongoose.model("User",userSchema);