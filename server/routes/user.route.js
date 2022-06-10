const router = require("express").Router();
const { create, 
		login, 
		profile, 
		deletes,
		update,
		searchUser,
		show,
		getUser,
		followUser,
		unfollowUser,
		getAllFollowersAndFollowingUsers } = require('../controllers/user.controller')		
const { Authenticate } = require("../middleware/auth.middleware");



router.get('/', Authenticate, searchUser);
router.get('/show', Authenticate, show);
router.get('/get', Authenticate, getUser);
router.get('/profile', Authenticate, profile);
router.put('/:id/follow', Authenticate, followUser);
router.put('/update/', Authenticate, update);
router.put('/:id/unfollow', Authenticate, unfollowUser);
router.post('/register', create);
router.post('/login', login);
router.delete('/delete/', Authenticate, deletes);
router.get('/getfriends',Authenticate,getAllFollowersAndFollowingUsers);


module.exports = router;