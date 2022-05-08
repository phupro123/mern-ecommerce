const Collection = require('../models/Collection');
const {muitipleMongooseToObject} = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class SiteController {

    // [GET] /news
    index(req,res,next){
        // Collection.find({}, function (err,collection){
        //     if(!err){ 
        //         res.json(collection);
        //     }else{
        //         res.status(40).json({error:'Error'})

        //     }
        // })

        Collection.find({})
            .then(Collection =>{
                res.render('home', {
                    Collection : muitipleMongooseToObject(Collection),})
            })
            .catch(next);

        
    }

    // [GET] /news/:slug
    search(req,res){
        res.render('search')    
    }
}

module.exports = new  SiteController;