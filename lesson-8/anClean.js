'use strict';

function anClean(arr) {
    var usedH = {};
    for (var i = 0; i < arr.length; i++) {
        var sortElem = arr[i].toLowerCase().split('').sort().join('');
        usedH[sortElem] = arr[i];
    }
    return Object.values(usedH);
}

console.log(anClean(['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор']));
