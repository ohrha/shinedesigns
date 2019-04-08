var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var FileSchema = new Schema({



    //name: {type: String, required: false},

    //username: {type:String, lowercase: true, required: false, unique:true,dropDups:true},

    

})
module.exports = mongoose.model('Fs.Files', FileSchema);