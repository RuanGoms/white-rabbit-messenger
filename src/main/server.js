const http = require('http')
const requestHandler = require('../utils/requestHandler')
const APP_PORT = process.env.APP_PORT || 3000
const app = http.createServer(requestHandler)

app.listen(APP_PORT)
console.log(`🚀 the server is running on port ${APP_PORT}`)
