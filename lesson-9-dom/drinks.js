'use strict';

function THashStorage() {
    this.store = {};
}

THashStorage.prototype.addValue = function (Key, Value) {
    this.store[Key] = Value;
}

THashStorage.prototype.getValue = function (key) {
    return this.store[key];
}

THashStorage.prototype.deleteValue = function (key) {
    if (!key in this.store) {
        return false;
    }
    return delete this.store[key];
}

THashStorage.prototype.getKey = function () {
    return Object.keys(this.store);
}

var drinkStorage = new THashStorage();

drinkStorage.addValue("маргарита", {
    name: "Маргарита", isAlcohol: "Да",
    recipe: "Сделай на бокале для маргариты соленую окаемку, " +
        "налей в шейкер лаймовый сок 30 мл, сахарный сироп 10 мл, " +
        "ликер трипл сек 25 мл и серебряную текилу 50 мл, " +
        "наполни шейкер кубиками льда и взбей"
});

var addInfo = document.getElementById('addInfo');
var getInfo = document.getElementById('getInfo');
var deleteInfo = document.getElementById('deleteInfo');
var allDrinks = document.getElementById('allDrinks');
var recipe = document.getElementById('info');

addInfo.addEventListener('click', function () {

    var name = prompt('Введите название напитка');
    var Alcohol = confirm("Напиток алкогольный?");
    var isAlcohol = Alcohol ? "да" : "нет";
    var recipe = prompt("Введите рецепт приготовления");

    if (!name || !recipe) {
        alert("Нет информации о названии или рецепте напитка, попробуете еще раз");
    } else {
        drinkStorage.addValue(name.toLowerCase(), {name, isAlcohol, recipe});
    }
});

getInfo.addEventListener('click', function () {

    recipe.style.visibility = 'visible';
    var name = prompt('Введите название напитка');
    var recipeInfo = drinkStorage.getValue(name);

    if (!recipeInfo) {
        alert('Информация отсутствует');
        recipe.style.visibility = 'hidden';
    } else {
        recipe.innerHTML = `<p>Напиток: <b>${recipeInfo.name.toLowerCase()}</b><br>
            Алкогольный:  <b>${recipeInfo.isAlcohol}</b><br>
            Рецепт:  <br><b>${recipeInfo.recipe}</p>`
    }
});

deleteInfo.addEventListener('click', function () {

    recipe.style.visibility = 'visible';
    var name = prompt('Какой напиток удалить?');

    if (!name) {
        alert("Вы не ввели название или напиток отсутсвует");
        recipe.style.visibility = 'hidden';
    } else {
        drinkStorage.deleteValue(name.toLowerCase());
        recipe.innerHTML = `<p> Напиток "${name}" удален </p>`;
    }
});

allDrinks.addEventListener('click', function () {
    recipe.style.visibility = 'visible';
    var allDrinks = drinkStorage.getKey();
    if (allDrinks.length === 0) {
        recipe.innerHTML = `<p> информация о напитках отсутсвует </p>`;
    } else {
        recipe.innerHTML = `<p> ${allDrinks.join(", ")} </p>`;
    }
});


