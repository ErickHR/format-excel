const express = require('express')
const { getData } = require('../controller/ExcelController')
const router = express.Router()

router.get( '/', getData )

module.exports = router