import Backbone from 'backbone';
import Models from './Models.jsx';

var Programs = Backbone.Collection.extend({
    model: Models.Program,
    url: '/programs',
    comparator: function(m) { return m.get('created_at'); }
});

var Users = Backbone.Collection.extend({
    model: Models.User,
    url: '/users',
    comparator: function(m) { return m.get('created_at'); }
});

export { Programs, Users }