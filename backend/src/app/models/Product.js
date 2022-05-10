const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Product = new Schema({
    _id: {type: Number},
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
    
},{_id : false,
    timestamps: true
});

Product.plugin(AutoIncrement);
module.exports = mongoose.model('Product',Product);