const Collection = require('../../models/Collection');
const {mongooseToObject} = require('../../../util/mongoose');
const mongoose = require('../../../util/mongoose');

class CollectionController {

    // [GET] /collection/:slug
    show(req,res,next){
        Collection.findOne({slug: req.params.slug})
            .then(collection =>{
                //res.json(collection)
                res.render('web/collections/show',{collection: mongooseToObject(collection)})
            })
            .catch(next)
        
        // res.send('detail'+req.params.slug)    
    }

    // [GET] /collectino/create
    create(req,res,next){
        res.render('web/create',{layout: 'main'})

    }

    // [POST] /collection/create
    store(req,res,next){
        const formData= req.body
        formData.img = `youtube.com/${req.body.img}`
        const collection = new Collection(formData)

        collection.save()
            .then(() => res.redirect('/login'))
            .catch(error => {
                res.sen('a')
            })
       
    }
    // [GET] /collectino/edit
    edit(req,res,next){
        Collection.findById(req.params.id)
        .then(collection =>{
            res.render('collections/edit',{collection: mongooseToObject(collection)})
        })
        .catch(next)
        
        
    }

    //[PUT]  /courses/:id
    update (req,res,next){
        Collection.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/me/stored/collection'))
            .catch(next)
        
    }

    delete(req,res,next){
        Collection.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
}

module.exports = new  CollectionController();