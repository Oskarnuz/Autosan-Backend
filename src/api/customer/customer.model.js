const { Schema, model } = require('mongoose')

const customerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'fullName is required']
    },
    identificationCard: String,
    address: String,
    phone: String,
    email: String
  },
  {
    timestamps: true,
    versionKey: false
  })

const Customer = model('customer', customerSchema)

module.exports = Customer