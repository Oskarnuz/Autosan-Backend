const customer = require('./api/customer')
const vehicle = require('./api/vehicle')
const order = require('./api/order')
const user = require('./api/user')


const routes = (app) => {
  app.use('/api/customer', customer)
  app.use('/api/vehicle', vehicle)
  app.use('/api/order', order)
  app.use('/api/user', user)
}

module.exports = routes