var express = require('express')
var router = express.Router()

const collectionController = require('../../app/controllers/web/CollectionController')



router.post('/store',collectionController.store)

router.get('/create',collectionController.create)

// router.get('/:id/edit', collectionController.edit)

// router.delete('/:id/', collectionController.delete)


// router.put('/:id', collectionController.update)

// router.get('/:slug', collectionController.show)






module.exports = router;