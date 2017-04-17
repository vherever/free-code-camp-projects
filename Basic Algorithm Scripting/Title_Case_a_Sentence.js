/**
 * Created by vherever on 3/20/17.
 *
 * Title Case a Sentence
 *
 * Return the provided string with the first letter of each word capitalized. Make sure the rest
 * of the word is in lower case.
 *
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

function titleCase(str) {
    var _arr = str.toLowerCase().split(" ");
    var _out = [];
    for(var j = 0; j < _arr.length; j ++) {
        _out.push(_arr[j].replace(_arr[j][0], _arr[j][0].toUpperCase()));
    }
    return _out.join(" ");
}

titleCase("I'm a little tea pot");

/**
 titleCase("I'm a little tea pot") should return a string.
 titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
 titleCase("sHoRt AnD sToUt") should return "Short And Stout".
 titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
 */