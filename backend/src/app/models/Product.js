const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug);

const Product = new Schema({
    _id: {type: String},
    name: { type: String, maxlength : 255  },
    price: { type: String },
    description: { type: String, },
    img: { type: String,  },
    amount: { type: String,  },
    status: { type: String, },

    category_id: {type: String},
    seller_id: {type: String},
    brand_id: {type: String},

   
    slug: {type:String, slug:'name', unique: true},
    
},{
    timestamps: true
});

//Product.plugin(AutoIncrement,);
module.exports = mongoose.model('Product',Product);