 var express = require('express')
var router = express.Router()

const userController = require('../../app/controllers/common/UserController.js')
const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')

//local/user/all
//GET ALL USERS
router.get("/all", verifyToken, userController.getAllUser);

//DELETE USER
router.delete("/delete/:id", verifyTokenAndUserAuthorization, userController.deleteUser);

module.exports = router;