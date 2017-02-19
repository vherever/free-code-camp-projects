/**
 * Created by vherever on 19.02.2017.
 *
 * Factorialize a Number
 *
 * Return the factorial of the provided integer.

 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

 * Factorials are often represented with the shorthand notation n!

 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */

function factorialize(num) {
    var final = 1;
    for(var i = 1; i <= num; i ++) {
        console.log(i);
        final *= i;
    }
    return final;
}

factorialize(5); // 120
