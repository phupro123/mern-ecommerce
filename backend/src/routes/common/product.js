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
router.delete("/delete/:id", verifyTokenAndSeller, productController.deleteProduct);

router.get("/get/:id", productController.getProduct);

router.put("/edit/:id", verifyTokenAndSeller, productController.update);

router.post("/new", verifyTokenAndSeller, productController.newProduct);

module.exports = router;