/*var str = prompt("Введите строку").toLowerCase();

function countVowelLetters(str) {
    var count = 0;
    var vowels  = ["а", "о", "у", "и", "е", "ё", "ы", "э", "ю", "я"];
    for(var vowel of str) {
        if(vowels.includes(vowel)) {
            count++;
        }
    }
    return count;
}

console.log(countVowelLetters(str));*/


var name;
while(!name) {
    name = prompt("Ваше имя?");
}
var sername;
while (!sername) {
    sername = prompt("Ваша фамилия?");
}
var midlename;
while (!midlename) {
    midlename = prompt("Ваше отчество?");
}
var age = parseInt(prompt("Ваш возраст?"));
while (!Number(age) || age >125 || age < 1) {
    age = parseInt(prompt("Ваш возраст? Введите корректное значение", "18"));
}


var allDays = age*365 + age/4;
var futureAge = age + 5;
var isMale = confirm("Ваш пол - мужской?");
var pension = age > 60? "да" : "нет";
var gender = isMale? "мужской" : "женский";

alert("Ваше ФИО: " + sername + " " + name + " " + midlename + "\n" +
      "Ваш возраст в годах: " + age + "\n" +
      "Ваш возраст в днях: " + allDays + "\n" +
      "через 5 лет вам будет: " + futureAge + "\n" +
      "ваш пол: " + gender + "\n" +
      "вы на пенсии: " + pension);