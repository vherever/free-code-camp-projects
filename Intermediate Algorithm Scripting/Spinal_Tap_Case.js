/**
 * Created by vherever on 13.04.2017.
 *
 * Spinal Tap Case
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+|_+/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap'); // this-is-spinal-tap