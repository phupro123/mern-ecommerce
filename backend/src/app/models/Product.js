
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//const AutoIncrement = require('mongoose-sequence')(mongoose);


const Product = new Schema({
    _id: String,
    name: { type: String},
    price: { type: String },
    description: { type: String, },
    image: { type: String, default:"https://cdn.honda.com.vn/motorbike-versions/October2021/mTuI6iTbdYCOkHBMnsNw.png" },
    amount: { type: String,  },
    status: { type: String, },

    category_id: {type: String},
    seller_id: {type: String},
    brand_id: {type: String},

   
    
},{_id: false ,
    timestamps: true
});

//Product.plugin(AutoIncrement,);
module.exports = mongoose.model('Product',Product);