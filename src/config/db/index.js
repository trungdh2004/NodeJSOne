const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/F8_education_dev',{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("ss");
    } catch (error) {
        console.log("error");
    }
}


module.exports = {connect}