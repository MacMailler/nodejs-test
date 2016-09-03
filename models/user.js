/**
 * Created by denis on 21.08.16.
 */
var mongoose = required('mongoose');

var user = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }
});

mongoose.model('user', user);