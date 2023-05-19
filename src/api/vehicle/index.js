const router = require('express').Router()
const vehicleController = require('./vehicle.controller')

router.post('/', vehicleController.createVehicle)
router.get('/', vehicleController.listVehicles)
router.get('/:vehicleId', vehicleController.showVehicle)
router.put('/:vehicleId', vehicleController.updateVehicle)
router.delete('/:vehicleId', vehicleController.deleteVehicle)


module.exports = router