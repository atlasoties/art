const mongoose = require('mongoose');
const hash = require('js-sha256');
const User = mongoose.model("User");
const Message = mongoose.model("Message");
const jwt = require("jwt-then");


class MessageActions{
	async sendMessage(request,response){
		const {text,chatId} = request.body;

		const newMessage = await Messsage.create({
			sender:request.user.id,
			text:text,
			chatId:chatId
		});
	}
}

module.exports = new MessageActions;