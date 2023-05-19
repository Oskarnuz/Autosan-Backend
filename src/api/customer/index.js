const router = require('express').Router()
const customerController = require('./customer.controller')

router.post('/', customerController.createCustomer)
router.get('/', customerController.listCustomers)
router.get('/:customerId', customerController.showCustomer)
router.put('/:customerId', customerController.updateCustomer)
router.delete('/:customerId', customerController.deleteCustomer)


module.exports = router