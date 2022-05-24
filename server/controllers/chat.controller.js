const mongoose = require('mongoose');
const hash = require('js-sha256');
const User = mongoose.model("User");
const Chat = mongoose.model("Chat");
const jwt = require("jwt-then");

class ChatActions{
	async accessChat(request, response){
		const {userId} = request.body;

		let chat = await Chat.find({
			isGroupChat:false,
			$and:[
					{users:{$elemMatch:{$eq:request.user.id}}},
					{users:{$elemMatch:{$eq:userId}}}
				 ],
		}).populate('users', '-password')
		  .populate('latestMessage');

		  chat = await User.populate(chat,{
		  	path:'latestMessage.sender',
		  	select:'name avatarImage email'
		  });

		  if(chat.length > 0){
		  	response.status(200).json(chat[0]);
		  }else{
		  		const chatData = {
		  			chatName:"sender",
		  			isGroupChat:false,
		  			users:[request.user.id,userId]
		  		};

		  		try{
		  			const chatCreated = await Chat.create(chatData);

		  			const FullChat = await Chat.find({_id:chatCreated._id})
		  										.populate('users','-password -following -followers');

		  			response.status(200).json(FullChat);
		  		}catch(error){
		  			response.status(500).json(error.message)
		  		}
		  }

	}

	async fetchChats(request,response){
		try{
			await Chat.find({users:{$elemMatch:{$eq:request.user.id}}})
							.populate('users', '-password')
							.populate('groupAdmin', '-password')
							.populate('latestMessage')
							.sort({updatedAt:-1})
							.then(async(results) =>{
								results = await User.populate(results,{
							  	path:'latestMessage.sender',
							  	select:'name avatarImage email'
							  });
								response.status(200).json(results);
							});
		}catch(error){
			response.status(500).json(error.message)
		}
	}

	async createGroupChat(request,response){
		if(!request.body.groupName || !request.body.groupMembers){
			response.status(404).json("Please fill the group name and add at leat 2 users on a group");
		}
		let users = JSON.parse(request.body.groupMembers);

		if(users.length < 2){
			response.status(404).json("The group should have at least 2 members")
		}

		users.push(request.user)

		try{
			const groupChatCreated = await Chat.create({
				chatName:request.body.groupName,
				users:users,
				isGroupChat:true,
				groupAdmin:request.user
			});
			const fullGroupChat = await Chat.findOne({_id:groupChatCreated._id})
			.populate('users', '-password')
			.populate('groupAdmin', '-password');

			response.status(200).json(fullGroupChat);

		}catch(error){
			response.status(500).json(error.message);
 		}
	}

	async renameGroup(request,response){
		const {groupId,groupName} = request.body;
		try{
			const updatedGroup = await Chat.findByIdAndUpdate(groupId,{chatName:groupName},{new:true})
											.populate('users', '-password')
											.populate('groupAdmin', '-password')

			if(updatedGroup){
				response.status(200).json(updatedGroup);
			}
		}catch(error){
			response.status(500).json(error.message);
		}

	}

	async addMember(request,response){
		const {groupId,memberIdToBeAdded} = request.body;

		if(!groupId || !memberIdToBeAdded){
			response.status(404).json("Requirements nott fulfilled");
		}

		const updatedGroup = await Chat.findByIdAndUpdate(groupId,
			{$push:{users:memberIdToBeAdded}},
			{new:true}
		)
		.populate('users', '-password')
		.populate('groupAdmin', '-password');

		if(!updatedGroup){
			response.status(404).json("Chat Not Found")
		}
		response.status(200).json(updatedGroup);

	}
	async removeMember(request,response){
		const {groupId,memberIdToBeRemoved} = request.body;

		if(!groupId || !memberIdToBeRemoved){
			response.status(404).json("Requirements nott fulfilled");
		}

		const updatedGroup = await Chat.findByIdAndUpdate(groupId,
			{$pull:{users:memberIdToBeRemoved}},
			{new:true}
		)
		.populate('users', '-password')
		.populate('groupAdmin', '-password');

		if(!updatedGroup){
			response.status(404).json("Chat Not Found")
		}
		response.status(200).json(updatedGroup);
		
	}
}

module.exports = new ChatActions;