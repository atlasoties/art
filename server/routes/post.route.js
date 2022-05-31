const router = require("express").Router();
const { add,
		deletes,
		update,
		likeUnlike,
		getPost,
		show,
		showTimeline,
		comment } = require('../controllers/post.controller')
const { Authenticate } = require("../middleware/auth.middleware");
router.post('/add',Authenticate, add);
router.delete('/delete/:id', Authenticate, deletes);
router.put('/update/:id', Authenticate, update);
router.put('/:id/like', Authenticate, likeUnlike);
router.get('/timeline', Authenticate, showTimeline);
router.get('/getpost', Authenticate, getPost);
router.get('/show', Authenticate, show);
router.put('/comment/:id', Authenticate, comment);



module.exports = router;