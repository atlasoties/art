const router = require("express").Router();
const { create, login, profile, deletes, update, show,getUser,followUser,unfollowUser } = require('../controllers/user.controller')
const { Authenticate } = require("../middleware/auth.middleware");
router.post('/register', create);
router.post('/login', login);
router.delete('/delete/', Authenticate, deletes);
router.put('/update/', Authenticate, update);
router.get('/show', Authenticate, show);
router.get('/get', Authenticate, getUser);
router.put('/:id/follow', Authenticate, followUser);
router.put('/:id/unfollow', Authenticate, unfollowUser);
router.get('/profile', Authenticate, profile);


module.exports = router;