const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/siteController')
const newsController = require('../app/controllers/NewsController')

router.get('/search', siteController.search)
router.get('/', siteController.index)


module.exports = router;