/*3 (Калькулятор)*/

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var arr = [];

do {
    var nums = prompt("введите число");
    arr.push(Number(nums));
} while (isNumeric(nums));

arr.length = arr.length - 1;

function getSum() {
    var sum = 0;
    for (var elem of arr) {
        sum += elem;
    }
    return sum;
}

if (arr.length === 0) {
    alert('Вы не ввели ни одного числа.')
} else {
    alert('Сумма введённых вами чисел: ' + getSum(arr) + '\n' + 'Вы ввели следующие числа: ' + arr);
}
