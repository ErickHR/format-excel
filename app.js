const express = require('express')
const app = express()

const path = require('path')
// const cors = require('cors')

global.directoryCurrent = __dirname

const router = require('./resources/routes/router')
const routeApi = require('./resources/routes/api')

// app.use( cors() )

app.use( '/', router )
app.use( '/api', routeApi )

app.listen( 3001, () => {
    console.log('Excel')
} )