function Sequence() {
    var min = 0, max = 0;

    Object.defineProperty(this, 'range', {get: function() { return {min: min, max: max};}});
    Object.defineProperty(this, 'high',  {get: function() { return ++max; }});
    Object.defineProperty(this, 'low',   {get: function() { return --min; }});

    Object.defineProperty(this, 'update', {
        value: function(val) {
            val = val * 1;
            if (typeof(val) !== 'number') {
                throw new TypeError("Invalid sequence input type(" + typeof(val) + "): " + val);
            }
            max = Math.max(max, val);
            min = Math.min(min, val);
        }
    });
}

function SequenceProxy(sequence) {
    Object.defineProperty(this, 'range',  {get: function() {return sequence.range;}});
    Object.defineProperty(this, 'high',   {get: function() {return sequence.high;}});
    Object.defineProperty(this, 'low',    {get: function() {return sequence.low;}});
}

module.exports = {
    Sequence: Sequence,
    SequenceProxy: SequenceProxy
};