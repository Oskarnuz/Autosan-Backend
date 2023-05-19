const customer = require('./api/customer')
const vehicle = require('./api/vehicle')


const routes = (app) => {
  app.use('/api/customer', customer)
  app.use('/api/vehicle', vehicle)

}

module.exports = routes