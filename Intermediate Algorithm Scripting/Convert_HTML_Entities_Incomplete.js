/**
 * Created by vherever on 12.04.2017.
 *
 * Convert HTML Entities
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
    // &colon;&rpar;
    var splitted = str.split('');

    for(var i = 0; i < splitted.length; i ++) {
        switch(splitted[i]) {
            case '<':
                splitted[i] = '&lt;';
                break;
            case '>':
                splitted[i] = '&gt;';
                break;
            case '&':
                splitted[i] = '&amp;';
                break;
            case '"':
                splitted[i] = '&quot;';
                break;
            case '\'':
                splitted[i] = '&apos;';
                break;
        }
    }
    splitted = splitted.join("");
    return splitted;
}

console.log(convertHTML("<>")); // &lt;&gt;