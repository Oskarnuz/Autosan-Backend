const Vehicle = require('./vehicle.model')

module.exports = {
  
  async createVehicle(req, res) {
    try {
      const data = req.body

      const vehicle = await Vehicle.create({ ...data})

      res.status(201).json({ message: 'Vehicle created', data: vehicle})

    } catch (error) {
      res.status(400).json({ message: 'Vehicle could not created', data: error.message })
    }
  },

  
  async listVehicles(req, res) {
    try {
      const vehicles = await Vehicle.find()

      res.status(200).json({ message: 'Vehicles found', data: vehicles})

    } catch (error) {
      res.status(400).json({ message: 'Vehicles not found', data: error})
    }
  },

  
  async showVehicle(req, res) {
    try {
      const { vehicleId } = req.params
      const vehicle = await Vehicle.findById(vehicleId)

      res.status(200).json({ message: 'Vehicle found', data: vehicle})

    } catch (error) {
      res.status(400).json({ message: 'Vehicle not found', data: error})
    }
  },

  
  async updateVehicle(req, res) {
    try {
      const { vehicleId } = req.params
      const data = req.body

      const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, data, {new: true})

      res.status(200).json({ message: 'Vehicle Update', data: vehicle})

    } catch (error) {
      res.status(400).json({ message: 'Vehicle not Update', data: error})
    }
  },

  
  async deleteVehicle(req, res) {
    try {
      const { vehicleId } = req.params

      const vehicle = await Vehicle.findByIdAndDelete(vehicleId)

      res.status(200).json({ message: 'Vehicle Deleted', data: vehicle})

    } catch (error) {
      res.status(400).json({ message: 'Vehicle not Deleted', data: error})
    }
  },



}

