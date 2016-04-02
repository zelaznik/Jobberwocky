import Backbone from 'backbone';
import Models from './Models.jsx';

var Products = Backbone.Collection.extend({
    model: Models.Product,
    url: '/products2',
    comparator: (m) => (m.get('created_at'))
});

var Users = Backbone.Collection.extend({
    model: Models.User,
    url: '/users',
    comparator: (m) => (m.get('created_at'))
});

export { Products, Users }