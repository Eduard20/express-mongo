/**
 * Created by eduard on 10/28/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Playlist = new Schema({
    playlistId: {type:String, required:true},
    title: {type:String, required:true},
    tracksCount: {type:Number},
    createdTime: {type:Number, required: true},
    modifiedTime: {type:Number, reuqired:true},
    status: {type:String},
    trackIds: {type: Array}
});

module.exports = mongoose.model('Playlist', Playlist);