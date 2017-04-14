/**
 * Created by vherever on 14.04.2017.
 *
 * Sum All Odd Fibonacci Numbers
 *
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

 The first two numbers in the Fibonacci sequence are 1 and 1.
 Every additional number in the sequence is the sum of the two previous numbers.
 The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

 For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
 */

function sumFibs(n) {
    var arr = [1];
    for(var i = 1; i <= n;) {
        arr.push(i);
        i = arr[arr.length - 1] + arr[arr.length - 2];
    }

    return arr.reduce(function(a, b) {
        return (b % 2 !== 0) ? a + b : a;
    });
}

sumFibs(1000); // 1785
