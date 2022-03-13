'use strict';

var formEl = [{label: 'Разработчики:', type: 'text', id: 'develops', width: 400},
    {label: 'Название сайта:', type: 'text', id: 'website', width: 400},
    {label: 'URL сайта:', type: 'text', id: 'siteAddress', width: 400},
    {label: 'Дата запуска сайта:', type: 'date', id: 'siteDate', width: 200},
    {label: 'Посетителей в сутки:', type: 'number', id: 'visitors', width: 200},
    {label: 'E-mail для связи:', type: 'text', id: 'email', width: 400},
    {
        label: 'Рубрика каталога:', type: 'select', id: 'category', width: 200,
        options: [{text: 'Здоровье', value: 1}, {text: 'Домашний уют', value: 2}, {text: 'Бытовая техника', value: 3}]
    },
    {
        label: 'Размещение:', type: 'radio', name: 'payment',
        options: [{text: 'бесплатаное', value: 1}, {text: 'платаное', value: 2}, {text: 'VIP', value: 3}]
    },
    {label: 'Разрешить отзывы:', type: 'checkbox', id: 'review'},
    {label: 'Описание сайта:', type: 'textarea', width: 400, height: 100, id: 'description'},
    {value: 'Опубликовать', type: 'submit'}];

function makeLabel(elem, formName) {
    var label = document.createElement('label');
    label.style.display = 'block';
    label.innerHTML = elem.label;
    label.htmlFor = elem.id;
    formName.appendChild(label);
}

function makeInputText(elem, formName) {
    var input = document.createElement('input');
    input.type = 'text';
    input.id = elem.id;
    input.style.width = elem.width + 'px';
    formName.appendChild(input);
}

function makeInputDate(elem, formName) {
    var input = document.createElement('input');
    input.type = 'date';
    input.id = elem.id;
    input.style.width = elem.width + 'px';
    formName.appendChild(input);
}

function makeInputNumber(elem, formName) {
    var input = document.createElement('input');
    input.type = 'number';
    input.id = elem.id;
    input.style.width = elem.width + 'px';
    formName.appendChild(input);
}

function makeInputRadio(elem, formName) {
    for (var option of elem.options) {
        var inputRadio = document.createElement('input');
        inputRadio.type = 'radio';
        inputRadio.value = option.value;
        inputRadio.name = elem.name;
        var span = document.createElement('span');
        span.textContent = option.text;
        formName.appendChild(inputRadio);
        formName.appendChild(span);
    }
}

function makeSelect(elem, formName) {
    var select = document.createElement('select');
    select.style.width = elem.width + 'px';
    formName.appendChild(select);
    for (var option of elem.options) {
        var optionEl = document.createElement('option');
        optionEl.value = option.value;
        optionEl.textContent = option.text;
        select.appendChild(optionEl);
    }
}

function makeInputCheckbox(elem, formName) {
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.id = elem.id;
    input.checked = true;
    formName.appendChild(input);
}

function makeTextarea(elem, formName) {
    var textArea = document.createElement('textarea');
    textArea.id = elem.id;
    textArea.style.width = elem.width + 'px';
    textArea.style.height = elem.height + 'px';
    formName.appendChild(textArea);
}

function makeInputSubmit(elem, formName) {
    var input = document.createElement('input');
    input.style.display = 'block';
    input.type = 'submit';
    input.value = elem.value;
    formName.appendChild(input);
}

function makeForm(arrFormEl, formName) {
    arrFormEl.forEach(function (el) {
        if (el.label) {
            makeLabel(el, formName);
        }
        if (el.type === 'text') {
            makeInputText(el, formName);
        }
        if (el.type === 'date') {
            makeInputDate(el, formName);
        }
        if (el.type === 'number') {
            makeInputNumber(el, formName);
        }
        if (el.type === 'checkbox') {
            makeInputCheckbox(el, formName);
        }
        if (el.type === 'radio') {
            makeInputRadio(el, formName);
        }
        if (el.type === 'select') {
            makeSelect(el, formName);
        }
        if (el.type === 'textarea') {
            makeTextarea(el, formName);
        }
        if (el.type === 'submit') {
            makeInputSubmit(el, formName);
        }
    });

}

var form = document.forms['INFO'];
var container = document.getElementById('container');

makeForm(formEl, form);
makeClone(form, container);

function makeClone(form, parentContainer) {
    var formClone = form.cloneNode(true);
    formClone.id = 'formClone';
    parentContainer.replaceChild(formClone, form);
}
