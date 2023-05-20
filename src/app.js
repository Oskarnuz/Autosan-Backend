//require('dotenv').config()
const express = require('express');
const connect = require('./config/database');
const configExpress = require('./config/express');
const routes = require('./routes');
const { formData } = require("./middlewares/formData");

const app = express();
connect();


configExpress(app);

routes(app);


app.post("/test-formdata", formData, (req, res) => {
  res.status(200).json({ ...req.body });
});

module.exports = app;