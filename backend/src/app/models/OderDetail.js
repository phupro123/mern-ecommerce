const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const OderDetail = new Schema({
    _id: {type: Number},
    oder_id: { type: String,   },
    product_id: { type: String, },
    unit_price: { type: Date },
    quantity: { type: String,  },
    
},{ _id : false,
    timestamps: true
});
OderDetail.plugin(AutoIncrement);
module.exports = mongoose.model('OderDetail',OderDetail);