const { init } = require('../../models/Product');
const Product = require('../../models/Product');


class ProductController {

    // [GET] /product/all
    async getAllProduct(req,res,next){
       
        Product.find({})
            .populate('category_id')
            .populate('seller_id')
            .populate('brand_id')
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
        .populate('category_id')
            .populate('seller_id')
            .populate('brand_id')
        .then(product =>{
            res.status(200).json(product) 
        })
        .catch(next)
        
        
    }

    async getProductBySlug(req,res,next){
        await Product.findOne({slug:req.params.slug})
            .populate('category_id')
            .populate('seller_id')
            .populate('brand_id')
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
            .limit(4)
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    async getCategory1(req,res,next){
       
        Product.find({category_id:req.params.id})
      
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
        .populate('category_id')
            .populate('seller_id')
            .populate('brand_id')
            .then(product =>{
                res.status(200).json(product);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    async getProductLength(req,res){
        await Product.find().count()
            .then((user)=> res.status(200).json(user))
            .catch((err) =>{
                return res.status(500).json(err);
            })
    }

    async search(req,res){
        await Product.find({ name: {$regex: req.query.q } })

            .then((user)=> res.status(200).json(user))
            .catch((err) =>{
                return res.status(500).json(err);
            })
    }

}

module.exports = new  ProductController();