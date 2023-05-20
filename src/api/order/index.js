const router = require('express').Router()
const orderController = require('./order.controller')

router.post('/', orderController.createOrder)
router.get('/', orderController.listOrders)
router.get('/:orderId', orderController.showOrder)
router.put('/:orderId', orderController.updateOrder)
router.delete('/:orderId', orderController.deleteOrder)


module.exports = router