function sue(str, obj, def) {
    /*
     * a function named sue. This is an improved elvis operator, named after the inimitable Johnny Cash.
     *
     * 1st parameter is the string representation of the dotted-name variable in question
     * 2nd parameter is the object to be inspected
     * 3rd parameter is the default value. this is optional and will default to an empty string
     *
     */
    var props = str.split('.');
    for (i in props) {
        if (typeof obj[props[i]] != 'undefined' && obj[props[i]] != null && obj[props[i]] != 'null') {
            obj = obj[props[i]];
        } else {
            // couldn't reference the child, so we'll return the default value
            return def || '';
        }
    }
    return obj;
}
