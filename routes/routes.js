
var Track = require('../data/model/track');
var Playlist = require('../data/model/playlist');
var User = require('../data/model/user');

module.exports = function(app) {
    app.get('/', function(req,res,next){
        res.send('hey')
    });
    app.get('/favicon.ico', function(req, res) {
        res.sendStatus(200);
    });
    app.post('/api/addUser', function(req,res){
        console.log(req.body);
        var user = new User({
            userId: req.body.userId,
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            email: req.body.email,
            country: req.body.country,
            status: req.body.status,
            playlistIds: req.body.playlistIds
        });
        console.log(user);
        user.save(function (err) {
            if (!err) {
                console.log("New user created with id: %s", user.id);
                return res.json({
                    status: 'OK',
                    article: user
                });
            } else {
                res.statusCode = 500;
                res.json({
                    error: 'Server error'
                });
                console.error('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    });
    app.post('/api/addTrack', function(req,res){
        console.log(req.body);
        var track = new Track({
            trackId: req.body.trackId,
            trackTitle: req.body.trackTitle,
            trackDuration: req.body.trackDuration,
            audioLicense: req.body.audioLicense,
            youtubeld: req.body.youtubeld,
            artistId: req.body.artistId,
            artistName: req.body.artistName,
            releaseId: req.body.releaseId,
            releaseTitle: req.body.releaseTitle,
            trackModified: req.body.trackModified
        });
        console.log(track);
        track.save(function (err) {
            if (!err) {
                console.log("New user created with id: %s", track.trackId);
                return res.json({
                    status: 'OK',
                    article: track
                });
            } else {
                res.statusCode = 500;
                res.json({
                    error: 'Server error'
                });
                console.error('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    });
    app.post('/api/addPlaylist', function(req,res){
        console.log(req.body);
        var playlist = new Playlist({
            playlistId: req.body.playlistId,
            title: req.body.title,
            tracksCount: req.body.tracksCount,
            createdTime: req.body.createdTime,
            modifiedTime: req.body.modifiedTime,
            status: req.body.status,
            trackIds: req.body.trackIds
        });
        console.log(playlist);
        playlist.save(function (err) {
            if (!err) {
                console.log("New user created with id: %s", playlist.playlistId);
                return res.json({
                    status: 'OK',
                    article: playlist
                });
            } else {
                res.statusCode = 500;
                res.json({
                    error: 'Server error'
                });
                console.error('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    });
    app.get('/api/getUserById/:id', function (req,res) {
        User.findOne({ userId: req.params.id }, function(err, user) {
            if (err) return console.error(err);
            res.json({
                user: user || 'There is no user by provided id'
            })
        });
    });
    app.get('/api/getTrackById/:id', function (req,res) {
        Track.findOne({ trackId: req.params.id }, function(err, track) {
            if (err) return console.error(err);
            res.json({
                track: track || 'There is no track by provided id'
            })
        });
    });
    app.get('/api/getPlaylistById/:id', function (req,res) {
        Playlist.findOne({ playlistId: req.params.id }, function(err, playlist) {
            if (err) return console.error(err);
            res.json({
                playlist: playlist || 'There is no playlist by provided id'
            })
        });
    })
};