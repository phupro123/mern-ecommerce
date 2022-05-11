const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const User = require('./User');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug);

const Oder = new Schema({
    _id: {type: String},
    customer_id: { type: String, ref: User   },
    buy_date: { type: Date },
    seller_id: { type: String, ref: User },
  
    phone: { type: String,  },
    adress: { type: String, },
    receiver: {type:String},
    pay_id: { type: String, },
    status: {type:String},
},{ 
    timestamps: true
});

//Oder.plugin(AutoIncrement);
module.exports = mongoose.model('Oder',Oder);