
const express = require('express')
const autosController = require('../controllers/autosController')
const router = express.Router()

router.get('/', autosController.index)

router.get('/:marcas', autosController.idautos)


module.exports = router 