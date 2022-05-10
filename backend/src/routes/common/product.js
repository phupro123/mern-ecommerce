var express = require('express')
var router = express.Router()

const productController = require('../../app/controllers/common/ProductController.js')
const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')

//local/product/all
//GET ALL USERS
router.get("/all",  productController.getAllProduct);

//DELETE USER
router.delete("/delete/:id", verifyTokenAndUserAuthorization, productController.deleteProduct);

router.get("/get/:id", verifyTokenAndUserAuthorization, productController.getProduct);

router.put("/edit/:id", verifyTokenAndUserAuthorization, productController.update);

router.post("/new", verifyTokenAndUserAuthorization, productController.newProduct);

module.exports = router;