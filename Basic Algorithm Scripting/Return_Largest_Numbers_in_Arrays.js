/**
 * Created by vherever on 10.03.2017.
 *
 * Return Largest Numbers in Arrays
 *
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array
 * will contain exactly 4 sub-arrays.
 *
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 */

function largestOfFour(arr) {
    // You can do this!
    var output = [];
    for (var i = 0; i < arr.length; i ++) {
        output.push(Math.max.apply(Math, arr[i]));
    }
    return output;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // returns [5, 27, 39, 1001]
