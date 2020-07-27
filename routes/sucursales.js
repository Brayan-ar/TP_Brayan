const express = require('express')
const sucursalesController = require('../controllers/sucursalesController')
const router = express.Router()

router.get('/', sucursalesController.index)

router.get('/:sucursal', sucursalesController.idsucursales) 

module.exports = router 