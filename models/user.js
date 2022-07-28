// Database Schema file for user

// 1 - Name
// 2 - userName
// 3 - Age
// 4 - DOB
// 5 - id
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    DOB : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('User',userSchema);