const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,

        default:''
    },
    password:{
        type:String,
        required:true,
        default:'###########',
    },
    googleid:
    {    type:String,
        required :true,
        default:'#',
    },
    date:{
        type:String,
        default:Date.now()
    }
})

const User = mongoose.model('db1',UserSchema);

module.exports = User