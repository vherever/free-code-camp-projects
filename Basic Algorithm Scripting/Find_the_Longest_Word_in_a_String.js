/**
 * Created by vherever on 19.02.2017.
 *
 * Find the Longest Word in a String
 *
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 */

function findLongestWord(str) {
    var arr = str.split(" ");
    var maxLength = arr[0].length;
    for(var i = 0; i < arr.length; i ++){
        if(arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // returns 6