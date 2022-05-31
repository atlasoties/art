const mongoose = require('mongoose');
const hash = require('js-sha256');
const User = mongoose.model("User");
const Chat = mongoose.model("Chat");
const Message = mongoose.model("Message");
const jwt = require("jwt-then");


class MessageActions{
	async sendMessage(request,response){
		const {text,chatId} = request.body;
		const message = {
					sender:request.user.id,
					text:text,
					chatId:chatId
				}
		try{
			let newMessage = await Message.create(message);

			newMessage = await newMessage.populate('sender' ,'name avatarImage email');
			newMessage = await newMessage.populate('chatId');
			newMessage = await User.populate(newMessage,{
				path:'chat.users',
				select:'name avatarImage email'
			});


			const updated = await Chat.findByIdAndUpdate(chatId,{
				latestMessage:newMessage
			});

			response.status(200).json(newMessage)
		}catch(error){
			response.status(500).json(error.message);
		}
	}


	async allMessages(request,response){
		try{
			const messages = await Message.find({chatId:request.params.chatId})
								.populate('sender','name avatarImage email')
								.populate('chatId');

								response.status(200).json(messages)
		}
		catch(error){
			response.status(500).json(error.message)
		}
	}
}

module.exports = new MessageActions;