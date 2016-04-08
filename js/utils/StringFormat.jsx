var StringFormat = Object.freeze({
    capitalize: function(orig) {
        return orig[0].toUpperCase() + orig.slice(1).toLowerCase();
    },

    lowercase: function(orig) {
        return orig.toLowerCase();
    },

    snake_to_label: function(orig) {
        var words = orig.split(/[_|\s]/).map(StringFormat.capitalize);
        return words.join(" ");
    },

    label_to_snake: function(orig) {
        var words = orig.split(/\s+/).map(StringFormat.lowercase);
        return words.join("_");
    }

});

export default StringFormat;