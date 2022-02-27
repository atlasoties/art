const router = require("express").Router();
const {create,login,deletes,update,show} = require('../controllers/user.controller')

router.post('/register',create);
router.post('/login',login);
router.post('/delete',deletes);
router.post('/update',update);
router.post('/show',show);

module.exports = router;