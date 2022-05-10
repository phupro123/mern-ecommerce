const Oder = require('../../models/Oder');


class OderController {

    // [GET] /oder/all
    async getAllOder(req,res,next){
       
        Oder.find({})
            .then(oder =>{
                res.status(200).json(oder);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    // [delete] /oder/delete/:id
    async deleteOder(req,res){
        try {
            await Oder.findByIdAndDelete(req.params.id);
            res.status(200).json("Oder deleted");
          } catch (err) {
           return res.status(500).json(err);
          }
        }
     // [GET] /oder/get/:id
    async getOder(req,res,next){
        await Oder.findById(req.params.id)
        .then(oder =>{
            res.status(200).json(oder) 
        })
        .catch(next)
        
        
    }
     //[PUT]  /oder/edit/:id
     async update (req,res,next){
        await  Oder.updateOne({_id: req.params.id},req.body)
            .then(() => res.status(200).json('Updated Success'))
            .catch(next)
        
    }
     //  [POSt] /Product/new
     async newOder  (req, res, next){
        const formData= req.body
        
    

        const newOder = new Oder(formData)

        newOder.save()
            .then(() => res.status(200).json(newOder))
            .catch(error => {
                res.status(500).json(error)
            })
        
    }
}

module.exports = new  OderController();