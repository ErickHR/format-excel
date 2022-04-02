const express = require('express')
const routeApi = express.Router()
const fs = require('fs')

routeApi.get( '/', ( req, res ) => {

    try {
        
        const data = JSON.parse( fs.readFileSync(`${directoryCurrent}/bd/data.json`) )
        res.json( data )

    } catch (error) {
        res.status(500).send( error )
    }

} )

module.exports = routeApi