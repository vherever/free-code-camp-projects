/**
 * Created by vherever on 3/19/17.
 *
 * Repeat a string repeat a string
 *
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
    // repeat after me
    var out = '';

    for(var i = 0; i < num; i ++) {
        out += str;
    }
    return out;
}

repeatStringNumTimes("abc", 3); // abcabcabc
