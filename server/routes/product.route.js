const router = require("express").Router();
const { add, update, delete, show } = require('../controllers/product.controller')

router.post('/add', add);
router.delete('/delete/:id', delete);
router.put('/update/:id', update);
router.get('/show', show);

module.exports = router;