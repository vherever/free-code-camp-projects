/**
 * Created by vherever on 18.04.2017.
 *
 * Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 */

function diffArray(arr1, arr2) {
    var _arr = [];
    // Same, same; but different.
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                _arr.push(arr1[i]);
            }
        }
    }
    return arr1.concat(arr2).filter(function(item) {
        return _arr.indexOf(item) === -1;
    });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
