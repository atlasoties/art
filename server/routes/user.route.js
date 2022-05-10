const router = require("express").Router();
const {create,login,profile,deletes,update,show} = require('../controllers/user.controller')
const {protect} = require("../middleware/auth.middleware");
router.post('/register',create);
router.post('/login',login);
router.delete('/delete/:id',protect,deletes);
router.put('/update/:id',protect,update);
router.get('/show',protect,show);
router.get('/profile',protect,profile);

module.exports = router;