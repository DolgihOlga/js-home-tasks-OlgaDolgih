"use strict"
//1(Кто первым решил больше всех задач).

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function getWinnerName(obj) {
    var tasks = 0;
    var winner = "";
    for (var person in obj) {
        if (obj[person] > tasks) {
            tasks = obj[person];
            winner = person;
        }
    }
    return winner;
}

console.log(getWinnerName(tasksCompleted));




