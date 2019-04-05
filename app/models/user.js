var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;
/*
var titlize = require('mongoose-title-case');

var validate = require('mongoose-validator');

var bcrypt = require('bcrypt-nodejs');

*/


var UserSchema = new Schema({



    //name: {type: String, required: false},

    //username: {type:String, lowercase: true, required: false, unique:true,dropDups:true},

    password:{type:String, required:true, select:false},

    email:{type:String, required: true, lowercase:true, unique:true, dropDups:true},

})



UserSchema.pre('save', function(next){

    var user = this;

    console.log('user Prehook',user.password) 

    console.log(typeof user.password)

    //var password = user.password.toString()

  // if(!user.isModified('password')) return next();



  bcrypt.hash(user.password,null,null,function(err,hash){

        if(err) return next(err);
        console.log(hash)
        user.password = hash;

        next();

       

       

    })

})

//CREATE CUSTOM METHOD

UserSchema.methods.comparePassword = function(password){

    console.log("oy")

    console.log(password, this.password)

    console.log(typeof password)

    var passwordPlain = password.toString()

    return bcrypt.compareSync(password,this.password);



}

//var Model = mongoose.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema);



var User = mongoose.model('User', UserSchema);