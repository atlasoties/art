const router = require("express").Router();
const {create,login,deletes,update,show} = require('../controllers/user.controller')
const {protect} = require("../middleware/auth.middleware");
router.post('/register',create);
router.post('/login',login);
router.delete('/delete/:id',protect,deletes);
router.put('/update/:id',protect,update);
router.get('/show',protect,show);

module.exports = router;