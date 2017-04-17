/**
 * Created by vherever on 4/17/17.
 *
 * Sorted Union
 *
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of
 * the original provided arrays.

 In other words, all values present from all arrays should be included in their original order,
 but with no duplicates in the final array.

 The unique numbers should be sorted by their original order, but the final array should not be sorted
 in numerical order.
 */

function uniteUnique(arr) {
    var _arr = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            _arr.push(arguments[i][j]);
        }
    }

    return _arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]