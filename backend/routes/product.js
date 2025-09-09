const express = require('express');
const { getProducts, getSingleProducts } = require('../controllers/productController');
const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getSingleProducts);


module.exports = router;