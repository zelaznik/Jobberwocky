import Backbone from 'backbone';

var Program = Backbone.Model.extend({
    baseUrl: '/programs/'
});

var User = Backbone.Model.extend({
    baseUrl: '/users/'
});

module.exports = {
    Program: Program,
    User: User
};