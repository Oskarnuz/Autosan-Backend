const Customer = require('./customer.model')

module.exports = {
  //POST
  async createCustomer(req, res) {
    try {
      const data = req.body

      const customer = await Customer.create({ ...data})

      res.status(201).json({ message: 'Customer created', data: customer})

    } catch (error) {
      res.status(400).json({ message: 'Customer could not created', data: error.message })
    }
  },

  // GET
  async listCustomers(req, res) {
    try {
      const customers = await Customer.find()

      res.status(200).json({ message: 'Customers found', data: customers})

    } catch (error) {
      res.status(400).json({ message: 'Customers not found', data: error})
    }
  },

  // GET:id
  async showCustomer(req, res) {
    try {
      const { customerId } = req.params
      const customer = await Customer.findById(customerId)

      res.status(200).json({ message: 'Customer found', data: customer})

    } catch (error) {
      res.status(400).json({ message: 'Customer not found', data: error})
    }
  },

  // PUT:id
  async updateCustomer(req, res) {
    try {
      const { customerId } = req.params
      const data = req.body

      const customer = await Customer.findByIdAndUpdate(customerId, data, {new: true})

      res.status(200).json({ message: 'Customer Update', data: customer})

    } catch (error) {
      res.status(400).json({ message: 'Customer not Update', data: error})
    }
  },

  // DELETE:id
  async deleteCustomer(req, res) {
    try {
      const { customerId } = req.params

      const customer = await Customer.findByIdAndDelete(customerId)

      res.status(200).json({ message: 'Customer Deleted', data: customer})

    } catch (error) {
      res.status(400).json({ message: 'Customer not Deleted', data: error})
    }
  },



}

