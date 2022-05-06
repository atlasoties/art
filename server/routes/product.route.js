const router = require("express").Router();
const { add, update, show } = require('../controllers/product.controller')
const {protect} = require("../middleware/auth.middleware");

router.post('/add',protect, add);
// router.delete('/delete/:id', delete);
router.put('/update/:id',protect, update);
router.get('/show', protect,show);

module.exports = router;