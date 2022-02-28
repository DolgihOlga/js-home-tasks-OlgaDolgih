'use strict';

function isPal(str) {
    str = str.split(' ').join('').toLowerCase();
    var reverseStr = str.split("").reverse().join('');
    return str === reverseStr;
}

console.log(isPal('А роза упала на лапу Азора'));
