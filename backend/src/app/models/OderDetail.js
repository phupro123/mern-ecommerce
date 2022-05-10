const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug);

const OderDetail = new Schema({
    _id: {type: String},
    oder_id: { type: String,   },
    product_id: { type: String, },
    unit_price: { type: Date },
    quantity: { type: String,  },
    
},{ 
    timestamps: true
});
//OderDetail.plugin(AutoIncrement);
module.exports = mongoose.model('OderDetail',OderDetail);