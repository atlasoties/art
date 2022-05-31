const router = require("express").Router();
const { accessChat,
		fetchChats,
		createGroupChat,
		renameGroup,
		removeMember,
		addMember } = require('../controllers/chat.controller')
const {Authenticate} = require("../middleware/auth.middleware");

router.post('/',Authenticate, accessChat);
router.get('/',Authenticate, fetchChats);
router.post('/group',Authenticate, createGroupChat);
router.put('/group/rename',Authenticate, renameGroup);
router.delete('/group/member/remove',Authenticate, removeMember);
router.put('/group/member/add',Authenticate, addMember);


module.exports = router;