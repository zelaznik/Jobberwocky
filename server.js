var config = require('./webpack.config.js');
var PORT = process.env.PORT || 8080;
var express = require('express');
var path = require('path');
var app = express();

app.use('/assets/', express.static(path.join(__dirname,"assets")));

app.get('/js/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'js', 'bundle.js'));
});

app.get('/js/bundle.js.map', function (req, res) {
    res.sendFile(path.join(__dirname, 'js', 'bundle.js.map'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function() {
    console.log('Express server running at localhost:' + PORT);
});
