require('dotenv').config()
const server = require('./app')

const PORT = process.env.PORT || 8080

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`App running  in http://localhost:${PORT}`)
  });
}

setImmediate(startServer)

module.exports = server











// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
// const { connect } = require('./config/database')
// const routes = require('./routes')

// const app = express()
// const port = 8080
// connect()

// app.use(cors())
// app.use(morgan('dev'))
// app.use(express.json())




// routes(app)


// app.listen(port, () => {
//   console.log(`App running  in http://localhost:${port}`)
// })
