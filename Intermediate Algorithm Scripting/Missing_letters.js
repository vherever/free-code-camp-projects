/**
 * Created by vherever on 4/15/17.
 *
 * Missing letters
 *
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
    var arr = [];
    var found;
    for(var i = 0; i < str.length; i ++) {
        arr.push(str.charCodeAt(i));
    }
    for(var j = arr.length; j > 0; j --) {
        if(arr[j + 1] - arr[j] > 1) {
            found = String.fromCharCode(arr[j] + 1);
        }
    }
    return found;
}

fearNotLetter("abce"); // d