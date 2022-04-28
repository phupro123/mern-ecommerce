const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Collection = new Schema({
    name: { type: String, maxlength : 255  },
    description: { type: String, maxlength:255 },
    img: { type: String,  },
    slug: {type:String, slug:'name', unique: true},
    
},{
    timestamps: true
});

module.exports = mongoose.model('Collection',Collection);