var express = require('express')
var router = express.Router()

const meController = require('../app/controllers/MeController')

router.get('stored/collection',meController.storedCollection)



module.exports = router;