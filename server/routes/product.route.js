const router = require("express").Router();
const { add, update, show ,deletes} = require('../controllers/product.controller')
const {Authenticate} = require("../middleware/auth.middleware");

router.post('/add',Authenticate, add);
router.put('/update/:id',Authenticate, update);
router.put('/delete/:id',Authenticate, deletes);
router.get('/show', Authenticate,show);

module.exports = router;