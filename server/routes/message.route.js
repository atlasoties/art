const router = require("express").Router();
const {sendMessage,allMessages} = require('../controllers/message.controller');
const {Authenticate} = require("../middleware/auth.middleware");
router.post('/send',Authenticate, sendMessage)
router.get('/fetchmessages/:chatId',Authenticate, allMessages)

module.exports = router;