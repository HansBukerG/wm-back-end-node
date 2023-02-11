const { Router } = require('express');
const router = Router();
const controller = require('../Controllers/Product.Controller')

router.get('/search/', controller.readById);
router.get('/search/:id', controller.readByString);



module.exports = router