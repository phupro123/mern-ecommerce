const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const User = new Schema({
    username: { 
        type: String, 
        required: true,
        maxlength : 20,
        minlength:3,
        unique: true,

    },
    password: { 
        type: String, 
        required: true,
        maxlength : 255,
        minlength:3,
        
    },
    fullname: { 
        type: String, 
        required: true,
        maxlength : 30,
 
    },
    email: { 
        type: String, 
        required: true,
        maxlength : 30,
       
    },
    phone: { 
        type: String, 
        required: true,
        maxlength : 15,
        minlength:7,
        
    },
    image: { 
        type: String, 
        default: '',
     },
    role: {
        type: String, 
        
        
    },
    slug: {
        type:String, 
        slug:'username',
        unique: true},
    },
    {
    timestamps: true
});

module.exports = mongoose.model('User',User);