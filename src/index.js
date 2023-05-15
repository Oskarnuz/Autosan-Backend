require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { connect } = require('./config/database')

const app = express()
const port = 8080
connect()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.listen(port, () => {
  console.log(`App running  in http://localhost:${port}`)
})
