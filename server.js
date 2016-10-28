var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var platformConfigs = require('./config/config');
var port = platformConfigs.port;
process.env.NODE_ENV = platformConfigs.mode;

var app = express();

//mongoDB

mongoose.connect('mongodb://localhost/graphqldb');

var Schema = mongoose.Schema;

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

require('./routes/routes')(app);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function (err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: {}
//         });
//     })
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: err.message
    });
});


app.listen(port, function(){
    console.log('listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
});