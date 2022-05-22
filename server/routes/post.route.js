const router = require("express").Router();
const { add,deletes,update } = require('../controllers/user.controller')
const { Authenticate } = require("../middleware/auth.middleware");
router.post('/add', add);
router.delete('/delete/:id', Authenticate, deletes);
router.put('/update/:id', Authenticate, update);


module.exports = router;