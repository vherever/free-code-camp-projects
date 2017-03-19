/**
 * Created by vherever on 3/19/17.
 *
 * Confirm the Ending
 *
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 */

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return (str.substring(str.length, str.length - target.length) == target);
}

confirmEnding("Bastian", "n");