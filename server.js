var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

var PORT = process.env.PORT || 8080;

// serve our static stuff like index.css
app.use(express.static(__dirname));

// send all requests to index.html so browserHistory in React Router works
app.get('/js/bundle.js', function(req, res) {
    res.sendFile(path.join(__difname, 'js', 'bundle.js'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT);
});