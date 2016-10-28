/**
 * Created by eduard on 10/28/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    userId: {type:String, required:true},
    firstName: {type:String, required:true},
    secondName: {type:String},
    email: {type:String, required: true},
    country: {type:String},
    status: {type:String},
    playlistIds: {type: Array}
});

module.exports = mongoose.model('User', User);
