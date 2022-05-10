const Product = require('../../models/Product');


class ProductController {

    // [GET] /product/all
    async getAllProduct(req,res,next){
       
        Product.find({})
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    // [delete] /product/delete/:id
    async deleteProduct(req,res){
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Product deleted");
          } catch (err) {
           return res.status(500).json(err);
          }
        }
     // [GET] /product/get/:id
    async getProduct(req,res,next){
        await Product.findById(req.params.id)
        .then(product =>{
            res.status(200).json(product) 
        })
        .catch(next)
        
        
    }
     //[PUT]  /product/edit/:id
     async update (req,res,next){
        await  Product.updateOne({_id: req.params.id},req.body)
            .then(() => res.status(200).json('Updated Success'))
            .catch(next)
        
    }

     //  [POSt] /Product/new
     async newProduct  (req, res, next){
        const formData= req.body
        
    

        const product = new Product(formData)

        product.save()
            .then(() => res.status(200).json(product))
            .catch(error => {
                res.status(500).json(error)
            })
        
    }
}

module.exports = new  ProductController();