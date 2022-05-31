const router = require("express").Router();
const { add, update, show } = require('../controllers/blog.controller')
const {Authenticate} = require("../middleware/auth.middleware");

router.post('/add',Authenticate, add);
// router.delete('/delete/:id', delete);
router.put('/update/:id',Authenticate, update);
router.get('/show', Authenticate,show);

module.exports = router;