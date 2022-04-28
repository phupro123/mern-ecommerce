const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const User = new Schema({
    username: { type: String, maxlength : 255  },
    password: { type: String, maxlength : 255  },
    fullname: { type: String, maxlength:255 },
    mail: { type: String, maxlength:255 },
    phone: { type: String, maxlength:255 },
    image: { type: String, maxlength:255 },
    role: {type: Int16Array},
    slug: {type:String, slug:'name', unique: true},
    
},{
    timestamps: true
});

module.exports = mongoose.model('User',User);