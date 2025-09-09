const exporess = require('express');
const { createOrder } = require('../controllers/orderController');
const router = exporess.Router();

router.route('/orders').post(createOrder);

module.exports = router;