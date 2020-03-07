const mongoose = require('mongoose');

const hypebeastSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    },
    garment:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    },
    designer:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
        
    }
})

module.exports = Hypebeast = mongoose.model( 'hypebeasts', hypebeastSchema);