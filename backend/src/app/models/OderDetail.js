const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const OderDetail = new Schema({
    oder_id: { type: String,   },
    product_id: { type: String, },
    unit_price: { type: Date },
    quantity: { type: String,  },
    
},{
    timestamps: true
});

module.exports = mongoose.model('OderDetail',OderDetail);