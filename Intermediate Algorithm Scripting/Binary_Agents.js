/**
 * Created by vherever on 4/17/17.
 *
 * Binary Agents
 *
 * Return an English translated sentence of the passed binary string.

 The binary string will be space separated.
 */

function binaryAgent(str) {
    var _arrBin = str.split(" ");
    var _arrDec = [];
    var _out = [];
    for(var i = 0; i < _arrBin.length; i ++) {
        _arrDec.push(parseInt(_arrBin[i], 2));
    }
    for(var j = 0; j < _arrDec.length; j ++) {
        _out.push(String.fromCharCode(_arrDec[j]));
    }
    return _out.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 " +
    "01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // Aren't bonfires fun!?