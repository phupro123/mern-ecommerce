const { init } = require('../../models/Product');
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
         try { const formData= req.body
        
            Product.init()

            const product = new Product(formData)
    
            product.save()
                .then((product) => res.status(200).json(product))
                .catch(error => {
                    console.log(error)
                    res.status(500).json(error)
                })
             
         } catch (error) {
             console.log(error)
         }
       
        
    }

    async getTop5Product(req,res,next){
       
        Product.find({})
            .limit(5)
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    async getCategory1(req,res,next){
       
        Product.find({category_id:"Xe số"})
          
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    async getCategory2(req,res,next){
       
        Product.find({category_id:"Xe tay ga"})
          
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }
    async getCategory3(req,res,next){
       
        Product.find({category_id:"Xe côn tay"})
          
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }
    async getCategory4(req,res,next){
       
        Product.find({category_id:"Xe mô tô"})
          
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }
    async getProductBySeller(req,res,next){
       
        Product.find({seller_id:req.params.id})
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

}

module.exports = new  ProductController();