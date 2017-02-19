/**
 * Created by vherever on 19.02.2017.
 *
 * Reverse a String
 *
 * Reverse the provided string.

 * You may need to turn the string into an array before you can reverse it.

 * Your result must be a string.
**/

function reverseString(str) {
    var newStr = "";
    for(var i = str.length - 1; i >= 0; i --) {
        newStr += str[i];
    }
    return newStr;
}

// A bit easier way
function reverseString2(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // returns olleh