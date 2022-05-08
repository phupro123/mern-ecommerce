const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String, maxlength : 255  },
    price: { type: Int32Array },
    description: { type: String, },
    amount: { type: String,  },
    status: { type: String, },

    category_id: {type: String},
    seller_id: {type: String},
    brand_id: {type: String},

    img: { type: String,  },
    slug: {type:String, slug:'name', unique: true},
    
},{
    timestamps: true
});

module.exports = mongoose.model('Product',Product);