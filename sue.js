function sue(str, options) {
    /*
     * a function named sue. This is an improved elvis operator, named after the inimitable Johnny Cash.
     *
     * 1st parameter is the string representation of the dotted-name variable in question
     * 2nd parameter is an object with optional parameters:
     *          def : - the default value to return
     *          data: - the variable to inspect
     *
     */
    var data;
    var def;
    var props = str.split('.');
    var i = 0;
    if (options == null || options.data == null) {
        data = window[props[0]];
    } else {
        data = options.data;
    }

    for (i in props) {
        if (typeof data[props[i]] != 'undefined' && data[props[i]] != null && data[props[i]] != 'null') {
            data = data[props[i]];
        } else {
            // couldn't reference the child, so we'll return the default value
            return options.def || '';
        }
    }
    return data;
}
