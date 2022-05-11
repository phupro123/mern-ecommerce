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

router.get("/getbyseller/:id", productController.getProductBySeller);


router.get("/getTop5", productController.getTop5Product);

router.get("/category/1", productController.getCategory1);

router.get("/category/2", productController.getCategory2);
router.get("/category/3", productController.getCategory3);
router.get("/category/4", productController.getCategory4);
//DELETE USER
router.delete("/delete/:id", verifyTokenAndSeller, productController.deleteProduct);

router.get("/get/:id", productController.getProduct);

router.put("/edit/:id", verifyTokenAndSeller, productController.update);

router.post("/new", productController.newProduct);



module.exports = router;