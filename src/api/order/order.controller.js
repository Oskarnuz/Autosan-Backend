const Order = require('./order.model')

module.exports = {
  
  async createOrder(req, res) {
    try {
      const data = req.body

      const order = await Order.create({ ...data})

      res.status(200).json({ message: 'Order created', data: order})

    } catch (error) {
      res.status(400).json({ message: 'Order could not created', data: error.message })
    }
  },

  
  async listOrders(req, res) {
    try {
      const orders = await Order.find()

      res.status(200).json({ message: 'Orders found', data: orders})

    } catch (error) {
      res.status(400).json({ message: 'Orders not found', data: error})
    }
  },

  
  async showOrder(req, res) {
    try {
      const { orderId } = req.params
      const order = await Order.findById(orderId)

      res.status(200).json({ message: 'Order found', data: order})

    } catch (error) {
      res.status(400).json({ message: 'Order not found', data: error})
    }
  },

  
  async updateOrder(req, res) {
    try {
      const { orderId } = req.params
      const data = req.body

      const order = await Order.findByIdAndUpdate(orderId, data, {new: true})

      res.status(200).json({ message: 'Order Update', data: order})

    } catch (error) {
      res.status(400).json({ message: 'Order not Update', data: error})
    }
  },

  
  async deleteOrder(req, res) {
    try {
      const { orderId } = req.params

      const order = await Order.findByIdAndDelete(orderId)

      res.status(200).json({ message: 'Order Deleted', data: order})

    } catch (error) {
      res.status(400).json({ message: 'Order not Deleted', data: error})
    }
  },

}
