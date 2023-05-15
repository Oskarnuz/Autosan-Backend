const mongoose = require('mongoose')

const connect = () => {
  const mongoUri = 'mongodb+srv://Autosan:Autosan@cluster0.y8usi3p.mongodb.net/autosan?retryWrites=true&w=majority&connectTimeoutMS=50000'

  mongoose.connect(mongoUri)

  mongoose.connection.once('open', () => {
    console.log('Connection with mongo is ready')
  })

  mongoose.connection.on('error', (error) => {
    console.log('Not is possible the connection', error)
  })
}

module.exports = {connect}