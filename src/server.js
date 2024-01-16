const express = require('express')
const app = express()

const connect = require('./config/sql.js')

const helloRoutes = require('./routes/hello.routes.js')

app.use('/', helloRoutes)

app.listen(8000, () => {
  connect()
  console.log('server is on')
})
