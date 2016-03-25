function getValues(obj) {
    var output = [];
    for (var key in obj) {
        output.push(obj[key]);
    }
    return output;
}

export default getValues;