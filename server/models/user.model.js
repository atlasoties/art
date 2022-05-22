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
		required:"Date of Birth is required"
	},
	isAvatarImageSet:{
		type:Boolean,
		default:false
	},
	avatarImage:{
		type:String,
		default:" "
	},
	followers:{
		type:Array,
		default:[]
	},
	following:{
		type:Array,
		default:[]
	}
},
{
	timestamps:true
});

module.exports=mongoose.model("User",userSchema);