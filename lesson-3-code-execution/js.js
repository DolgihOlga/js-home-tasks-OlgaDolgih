"use strict"
/*1(Кто первым решил больше всех задач).*/

/*var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
if(tasksCompleted.Anna > tasksCompleted.Serg && tasksCompleted.Anna > tasksCompleted.Elena && tasksCompleted.Anna > tasksCompleted.Anton) {
    console.log("Anna");
}
if(tasksCompleted.Serg > tasksCompleted.Anna && tasksCompleted.Serg > tasksCompleted.Elena && tasksCompleted.Serg > tasksCompleted.Anton) {
    console.log("Serg");
}
if(tasksCompleted.Elena > tasksCompleted.Anna && tasksCompleted.Elena > tasksCompleted.Serg && tasksCompleted.Elena > tasksCompleted.Anton) {
    console.log("Elena");
}
if(tasksCompleted.Anton > tasksCompleted.Anna && tasksCompleted.Anton > tasksCompleted.Serg && tasksCompleted.Anton > tasksCompleted.Elena) {
    console.log("Anton");
}*/

/*2 (Изменение численных свойств)*/

/*var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
    for(var key in obj) {
        if(typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
    return obj;
}
console.log(multiplyNumeric(image));*/

/*3 (Калькулятор)*/

/*var arr = [];
while (true) {
    var nums = prompt("введите число");
    if (nums === '' || nums === null || isNaN(nums)) {
        break;
    }
    arr.push(Number(nums));
}

function getSum() {
    var sum = 0;
    for(var elem of arr) {
        sum += elem;
    }
    return sum;
}
console.log(arr);
alert("Сумма: " + getSum(arr));*/
