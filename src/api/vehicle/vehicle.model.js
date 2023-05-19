const { Schema, model } = require('mongoose')

const vehicleSchema = new Schema(
  {
    brand: String,
    model: String,
    year: String,
    mileage: String,
    idCard: String,
    color: String,
    fuel: String,
    images: String,
  },
  {
    timestamps: true,
    versionKey: false
  })

const Vehicle = model('vehicle', vehicleSchema)

module.exports = Vehicle