const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Oder = new Schema({
    customer: { type: String, maxlength : 255  },
    seller: { type: String, },
    buy_date: { type: Date },
    phone: { type: String,  },
    adress: { type: String, },
    receiver: {type:String},
    pay_id: { type: String, },
    status: {type:String},
},{
    timestamps: true
});

module.exports = mongoose.model('Oder',Oder);