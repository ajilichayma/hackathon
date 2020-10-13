const  mongoose  = require('mongoose');
const bcrypt = require ('bcrypt-nodejs')
const jwt = require ('jsonwebtoken');
const adminSchema = mongoose.model('user',new  mongoose.Schema(
    {

        name:{type:String,require:true},
        username:{type:String,require:true},
        password:{type:String,require:true},

    }).pre('save', function (next){
        this.password = bcrypt.hashSync(this.password )
        next ( )
    })
);
module.exports = mongoose.model("user");
