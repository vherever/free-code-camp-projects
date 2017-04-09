/**
 * Created by vherever on 08.04.2017.
 *
 * Sum All Numbers in a Range
 *
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 */

function sumAll(arr) {
    var sum = 0;
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    for(var i = min; i <= max; i ++) {
        sum += i;
    }
    return sum;
}
sumAll([4, 1]); // 7