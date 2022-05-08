const Collection = require('../models/Collection');
const {muitipleMongooseToObject} = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class MeController {

    // [GET] /me/stored/collectino/
    storedCollection(req,res,next){
        Collection.find({})
            .then(Collection =>{
                res.render('me/stored-collection', {
                    Collection : muitipleMongooseToObject(Collection),})
            })
            .catch(next);

        
    }

   
}

module.exports = new  MeController();