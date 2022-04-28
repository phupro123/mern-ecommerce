const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("ok")
    } catch (error) {
        console.log("nos")
    }
}
 
module.exports = {connect };