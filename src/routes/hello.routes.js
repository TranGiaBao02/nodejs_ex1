const express = require('express')
const router = express.Router()

const helloController = require('../controllers/hello.controller.js')

router.get('/hello', helloController.hello)

module.exports = router
