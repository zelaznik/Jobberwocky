import Backbone from 'backbone';

var Product = Backbone.Model.extend({
    baseUrl: '/products/'
});

var User = Backbone.Model.extend({
    baseUrl: '/users/'
});

module.exports = {
    Product: Product,
    User: User
};