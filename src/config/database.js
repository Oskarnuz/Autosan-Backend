const mongoose = require('mongoose')

const connect = () => {
  const mongoUri = 'mongodb://localhost:27017/autosan'

  mongoose.connect(mongoUri)

  mongoose.connection.once('open', () => {
    console.log('Connection with mongo is ready')
  })

  mongoose.connection.on('error', (error) => {
    console.log('Not is possible the connection', error)
  })
}

module.exports = {connect}