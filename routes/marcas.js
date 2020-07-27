const express = require('express')
const marcasController = require('../controllers/marcasController')
const router = express.Router()


router.get('/', marcasController.index )

router.get('/:marca', marcasController.marcas)
module.exports = router 