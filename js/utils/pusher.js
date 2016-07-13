var Pusher = require('pusher');
var pusher = new Pusher(process.env.PUSHER_APP_ID);
module.exports = pusher;