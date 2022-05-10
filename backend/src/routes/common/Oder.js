var express = require('express')
var router = express.Router()

const oderController = require('../../app/controllers/common/OderController.js')
const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')

//local/oder/all
//GET ALL USERS
router.get("/all",verifyTokenAndUserAuthorization, oderController.getAllUser);

//DELETE USER
router.delete("/delete/:id", verifyTokenAndUserAuthorization, oderController.deleteUser);

router.get("/get/:id", verifyTokenAndUserAuthorization, oderController.getUser);

router.put("/edit/:id", verifyTokenAndUserAuthorization, oderController.update);

router.post("/new", verifyTokenAndUserAuthorization, oderController.ne);

module.exports = router;