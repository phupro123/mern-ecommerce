const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { promise } = require('bcrypt/promises');
const jwt = require('jsonwebtoken')

class UserController {

    // [GET] /user/:slug
    async getAllUser(req,res,next){
       
        User.find({})
            .then(user =>{
                res.status(200).json(user);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    async deleteUser(req,res){
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User deleted");
          } catch (err) {
           return res.status(500).json(err);
          }
        }
    //  [POSt] /login/register
    async register  (req, res, next){
        const formData= req.body
        
        const salt = await bcrypt.genSalt(10);
        formData.password = await bcrypt.hash(formData.password, salt);

        const user = new User(formData)

        user.save()
            .then(() => res.status(200).json(user))
            .catch(error => {
                res.status(200).json(error)
            })
        
    }


}

module.exports = new  UserController();