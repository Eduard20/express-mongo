/**
 * Created by eduard on 10/28/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Track = new Schema({
    trackId: {type:String, required:true},
    trackTitle: {type:String, required:true},
    trackDuration: {type:String},
    audioLicense: {type:String},
    youtubeld: {type:String},
    artistId: {type:String},
    artistName: {type:String},
    releaseId: {type:String},
    releaseTitle: {type:String},
    trackModified: {type:String}
});

module.exports = mongoose.model('Track', Track);