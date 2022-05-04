const router = require("express").Router();
const {create,login,deletes,update,show} = require('../controllers/user.controller')

router.post('/register',create);
router.post('/login',login);
router.delete('/delete/:id',deletes);
router.put('/update/:id',update);
router.get('/show',show);

module.exports = router;